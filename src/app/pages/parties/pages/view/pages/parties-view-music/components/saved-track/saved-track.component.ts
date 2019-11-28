import { PartySavedTrack } from 'src/app/graphql/generated/types';
import { Track, getTrack, startUserPlayback } from 'spotify-web-sdk';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'saved-track',
    templateUrl: './saved-track.component.html',
    styleUrls: ['./saved-track.component.scss'],
})
export class SavedTrackComponent implements OnInit {
    @Input('track') trackDb: PartySavedTrack;
    @Input() selectMode: boolean;
    @Output() trackChange = new EventEmitter();
    @Output() spotifyPlay = new EventEmitter();
    @Output() trackSelectionChange = new EventEmitter();
    track: Track;
    constructor() {}

    async ngOnInit() {
        this.track = await getTrack(this.trackDb.spotifyId);
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

    onSelectionChange(ev) {
        this.trackSelectionChange.emit({ track: this.trackDb, selected: ev.target.checked });
    }
}
