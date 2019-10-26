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
    public _track: Track;
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
            this._track = newTrack;
            this.currentId = newTrack.id;
            this.currentTrackMedia = this.media.create(newTrack.previewUrl);
            this.currentTrackMedia.play();
            this.isPaused = false;
            this.durationInterval = interval(100).subscribe(async (_) => {
                this.duration = await this.currentTrackMedia.getCurrentPosition();
                this.nomralizedDuration = (this.duration / 30.0) * 100;
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
}
