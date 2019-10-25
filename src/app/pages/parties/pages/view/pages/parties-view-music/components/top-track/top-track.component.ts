import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Track, startUserPlayback } from 'spotify-web-sdk';

@Component({
    selector: 'spotify-top-track',
    templateUrl: './top-track.component.html',
    styleUrls: ['./top-track.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class TopTrackComponent implements OnInit {
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
    playing = false;

    constructor() {}

    ngOnInit() {}

    play() {
        this.trackChange.emit(this.track);
    }
    stop() {
        this.trackChange.emit(null);
    }

    playOnSpotify() {
        startUserPlayback({ uris: [this.track.uri, 'spotify:track:3SmUKvWEaTViTxmVYJzMIK'] });
    }
}
