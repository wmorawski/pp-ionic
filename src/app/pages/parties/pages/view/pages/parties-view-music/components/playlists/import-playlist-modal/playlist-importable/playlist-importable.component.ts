import { PlaylistEdge } from './../../../../../../../../../../graphql/generated/types';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'party-playlist-importable',
    templateUrl: './playlist-importable.component.html',
    styleUrls: ['./playlist-importable.component.scss'],
})
export class PlaylistImportableComponent implements OnInit {
    @Input() playlist: PlaylistEdge;
    @Output() selectionChanged = new EventEmitter<boolean>();
    isSelected = false;
    constructor() {}

    ngOnInit() {}

    viewOnSpotify() {
        window.open(this.playlist.node.spotifyExternalUrl);
    }

    handleChange(ev) {
        this.selectionChanged.emit(this.isSelected);
    }
}
