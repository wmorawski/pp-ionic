import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Track } from 'spotify-web-sdk';
@Component({
    selector: 'spotify-top-track',
    templateUrl: './top-track.component.html',
    styleUrls: ['./top-track.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class TopTrackComponent implements OnInit, OnDestroy {
    alreadySaved = false;
    @Input() track: Track;
    @Input()
    set currentTrack(val: Track) {
        if (val) {
            this.playing = val.id === this.track.id;
        } else {
            this.playing = false;
        }
    }
    @Output() trackChange = new EventEmitter();
    @Output() addToSaved = new EventEmitter();
    @Output() spotifyPlay = new EventEmitter();
    @Input() savedTracks: any;
    playing = false;

    constructor() {}

    ngOnInit() {
        this.savedTracks.subscribe((tracks) => {
            if (tracks) {
                this.alreadySaved = tracks.some((track) => track.spotifyId === this.track.id);
            }
        });
    }

    ngOnDestroy() {
        this.savedTracks.unsubscribe();
    }

    play() {
        this.trackChange.emit(this.track);
    }
    stop() {
        this.trackChange.emit(null);
    }

    playOnSpotify() {
        this.spotifyPlay.emit({ uris: [this.track.uri] });
    }

    addToSavedTracks() {
        this.addToSaved.emit(this.track);
    }
}
