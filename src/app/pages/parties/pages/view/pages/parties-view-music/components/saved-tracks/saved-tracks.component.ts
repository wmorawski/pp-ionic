import { CreatePlaylistModalComponent } from './../create-playlist-modal/create-playlist-modal.component';
import { ModalController } from '@ionic/angular';
import { PartySavedTrack } from './../../../../../../../../graphql/generated/types';
import { Observable } from 'rxjs';
import { Party_SavedTracksGQL } from 'src/app/graphql/generated/types';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface ITrackSelection {
    track: PartySavedTrack;
    selected: boolean;
}

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
    selectedTracks: PartySavedTrack[] = [];
    // savedTracks$: any;
    currentTrack = null;
    constructor(private readonly modalCtrl: ModalController) {}

    ngOnInit() {}

    handleTrackChange(ev) {
        // this.currentTrack = ev;
    }

    handleSpotifyPlay(ev) {
        this.spotifyPlay.emit(ev);
    }

    toggleSelectMode() {
        this.selectMode = !this.selectMode;
    }

    handleTrackSelectionChange(ev: ITrackSelection) {
        if (ev.selected) {
            if (!this.selectedTracks.find((track) => track.spotifyId === ev.track.spotifyId)) {
                this.selectedTracks.push(ev.track);
            }
        } else {
            const index = this.selectedTracks.findIndex((track) => track.spotifyId === ev.track.spotifyId);
            if (index > -1) {
                this.selectedTracks.splice(index, 1);
            }
        }
    }

    async startCreatingPlaylist() {
        (
            await this.modalCtrl.create({
                component: CreatePlaylistModalComponent,
                componentProps: { tracks: this.selectedTracks, id: this.id },
            })
        ).present();
    }
}
