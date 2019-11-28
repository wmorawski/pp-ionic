import { PlaylistEdge } from './../../../../../../../../graphql/generated/types';
import { Component, OnInit, Input } from '@angular/core';
import { getPlaylist, startUserPlayback } from 'spotify-web-sdk';

@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
    @Input() playlist: PlaylistEdge;

    constructor() {}

    ngOnInit() {}

    showInfo() {}
}
