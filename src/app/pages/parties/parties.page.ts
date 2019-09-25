import { Component, OnInit } from '@angular/core';
import { HasPartiesQueryGQL } from 'src/app/graphql/types';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-parties',
    templateUrl: './parties.page.html',
    styleUrls: ['./parties.page.scss'],
})
export class PartiesPage implements OnInit {
    hasParties: Observable<boolean>;

    constructor(private hasPartiesGQL: HasPartiesQueryGQL, private navCtrl: NavController) {}

    ngOnInit() {}

    ionViewWillEnter() {
        this.hasParties = this.hasPartiesGQL.watch().valueChanges.pipe(map(result => result.data.hasParties));
    }

    create() {
        this.navCtrl.navigateForward(['parties', 'create']);
    }
}
