import { Party_SavedTracksGQL } from './../../../../../../../../graphql/generated/types';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'party-saved-tracks',
    templateUrl: './saved-tracks.component.html',
    styleUrls: ['./saved-tracks.component.scss'],
})
export class SavedTracksComponent implements OnInit {
    @Input() id: string;
    @Input() changed: () => void;
    savedTracks$: any;
    currentTrack = null;
    constructor(private readonly partySavedTracksGQL: Party_SavedTracksGQL) {}

    ngOnInit() {
        this.savedTracks$ = this.partySavedTracksGQL.watch({
            where: {
                party: { id: this.id },
            },
        }).valueChanges;
    }

    handleTrackChange(ev) {
        console.log(ev);
        // this.currentTrack = ev;
    }
}
