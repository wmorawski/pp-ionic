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
    // tslint:disable-next-line: variable-name
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
    @Input()
    set track(newTrack: Track) {
        if (this.currentTrackMedia) {
            this.currentTrackMedia.stop();
        }
        if (newTrack) {
            this.currentId = newTrack.id;
            this._track = newTrack;
            this.currentTrackMedia = this.media.create(newTrack.previewUrl);
            this.currentTrackMedia.play();
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
                        this.tracksDLL.add(track);
                    });
                }
                this._trackOfDLL = this.tracksDLL.head;
                while (this._trackOfDLL.value.id === this._track.id) {
                    this._trackOfDLL = this._trackOfDLL.next;
                }
            }
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
        if (this._trackOfDLL) {
            // tslint:disable-next-line: no-non-null-assertion
            this.onTrackChange.emit(this._trackOfDLL.next!.value);
        }
    }

    goPrev() {
        if (this._trackOfDLL) {
            this.onTrackChange.emit(this._trackOfDLL.prev!.value);
        }
    }
}
