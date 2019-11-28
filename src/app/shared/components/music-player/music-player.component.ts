import { DoublyLinkedList, DoublyLinkedListNode } from './../../helpers/doubly-linked-list';
import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Track } from 'spotify-web-sdk';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { interval, Subscription } from 'rxjs';

@Component({
    selector: 'spotify-music-player',
    templateUrl: './music-player.component.html',
    styleUrls: ['./music-player.component.scss'],
})
export class MusicPlayerComponent implements OnInit, OnDestroy {
    alreadySaved = false;
    // tslint:disable: variable-name
    public _track: Track;
    public _trackOfDLL: DoublyLinkedListNode<Track>;
    @Input() tracks: Track[];
    tracksDLL: DoublyLinkedList<Track> = new DoublyLinkedList<Track>();
    currentTrackMedia: MediaObject;
    currentId: string;
    duration = 0;
    isPaused = true;
    nomralizedDuration = 0;
    durationInterval: Subscription;
    savedTracksSubscription: Subscription;
    @Output() addToSaved = new EventEmitter();
    @Input() savedTracks: any;
    @Input()
    set track(newTrack: Track) {
        if (this.currentTrackMedia) {
            this.currentTrackMedia.stop();
        }
        if (this.savedTracksSubscription) {
            this.savedTracksSubscription.unsubscribe();
        }
        if (newTrack) {
            this.currentId = newTrack.id;
            this._track = newTrack;
            this.currentTrackMedia = this.media.create(newTrack.previewUrl);
            this.currentTrackMedia.play({ playAudioWhenScreenIsLocked: true });
            this.isPaused = false;
            this.durationInterval = interval(100).subscribe(async (_) => {
                this.duration = await this.currentTrackMedia.getCurrentPosition();
                this.nomralizedDuration = (this.duration / 30.0) * 100;
            });
            this.currentTrackMedia.onSuccess.subscribe((_) => {
                if (this.currentId === newTrack.id) {
                    this.onTrackChange.emit(null);
                }
            });
            if (this.tracks) {
                if (this.tracks) {
                    this.tracks.map((track) => {
                        if (track.previewUrl) {
                            this.tracksDLL.add(track);
                        }
                    });
                }
                this._trackOfDLL = this.tracksDLL.head;
                while (this._trackOfDLL.value.id !== this._track.id) {
                    this._trackOfDLL = this._trackOfDLL.next;
                }
            }
            this.savedTracksSubscription = this.savedTracks.subscribe((tracks) => {
                console.log('From player', tracks, this._track);
                if (tracks) {
                    this.alreadySaved = this._track && tracks.some((track) => track.spotifyId === this._track.id);
                }
            });
        } else {
            this._track = null;
        }
    }
    // tslint:disable-next-line: no-output-on-prefix
    @Output() onTrackChange = new EventEmitter<Track>();

    constructor(private readonly media: Media) {}

    ngOnInit() {}

    ngOnDestroy() {
        if (this.currentTrackMedia) {
            this.currentTrackMedia.stop();
        }
        if (this.savedTracksSubscription) {
            this.savedTracksSubscription.unsubscribe();
        }
    }
    togglePlay() {
        if (this.isPaused) {
            this.isPaused = false;
            this.currentTrackMedia.play();
        } else {
            this.isPaused = true;
            this.currentTrackMedia.pause();
        }
    }

    sliderChanged(event) {
        this.duration = (event * 30.0) / 100;
        this.currentTrackMedia.seekTo(this.duration * 1000);
        this.nomralizedDuration = event;
    }

    goNext() {
        if (this._trackOfDLL && this._trackOfDLL.next) {
            // tslint:disable-next-line: no-non-null-assertion
            this.onTrackChange.emit(this._trackOfDLL.next.value);
        }
    }

    goPrev() {
        if (this._trackOfDLL && this._trackOfDLL.prev) {
            this.onTrackChange.emit(this._trackOfDLL.prev.value);
        }
    }

    addToSavedTracks() {
        this.addToSaved.emit(this._track);
    }
}
