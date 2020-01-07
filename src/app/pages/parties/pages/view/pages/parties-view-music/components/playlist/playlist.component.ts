import { PlaylistEdge } from 'src/app/graphql/generated/types';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { getPlaylist, startUserPlayback } from 'spotify-web-sdk';

@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
    selected = false;
    @Input() playlist: PlaylistEdge;
    @Input() selectionMode: boolean;
    @Output() playlistSelectionChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {}

    ngOnInit() {}

    showInfo() {}

    onSelectionChange(e) {
        this.playlistSelectionChange.emit(this.selected);
    }
}
