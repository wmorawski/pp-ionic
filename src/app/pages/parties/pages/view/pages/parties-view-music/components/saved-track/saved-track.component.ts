import { PartySavedTrack } from './../../../../../../../../graphql/generated/types';
import { Track, getTrack } from 'spotify-web-sdk';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'saved-track',
    templateUrl: './saved-track.component.html',
    styleUrls: ['./saved-track.component.scss'],
})
export class SavedTrackComponent implements OnInit {
    @Input('track') trackDb: PartySavedTrack;
    @Output() trackChange = new EventEmitter();
    track: Track;
    constructor() {}

    async ngOnInit() {
        this.track = await getTrack(this.trackDb.spotifyId);
        console.log(this.track);
    }

    play() {
        this.trackChange.emit(this.track);
    }
    stop() {
        this.trackChange.emit(null);
    }
}
