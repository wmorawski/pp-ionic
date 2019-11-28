import { Observable } from 'rxjs';
import { Party_SavedTracksGQL } from 'src/app/graphql/generated/types';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'party-saved-tracks',
    templateUrl: './saved-tracks.component.html',
    styleUrls: ['./saved-tracks.component.scss'],
})
export class SavedTracksComponent implements OnInit {
    selectMode = false;
    @Input() id: string;
    @Input() changed: () => void;
    @Input('savedTracks') savedTracks$: any;
    @Output() spotifyPlay = new EventEmitter();
    // savedTracks$: any;
    currentTrack = null;
    constructor() {}

    ngOnInit() {
        console.log(this.savedTracks$);
    }

    handleTrackChange(ev) {
        console.log(ev);
        // this.currentTrack = ev;
    }

    handleSpotifyPlay(ev) {
        this.spotifyPlay.emit(ev);
    }

    toggleSelectMode() {
        this.selectMode = !this.selectMode;
    }
}
