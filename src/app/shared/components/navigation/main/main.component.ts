import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
    selector: 'main-nav',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainNavComponent implements OnInit {
    public isNavbarVisible = true;
    constructor(private readonly appService: AppService) {}

    ngOnInit() {}
    ionViewWillEnter() {
        this.appService.isNavbarVisible.subscribe(visible => {
            this.isNavbarVisible = visible;
        });
    }
}
