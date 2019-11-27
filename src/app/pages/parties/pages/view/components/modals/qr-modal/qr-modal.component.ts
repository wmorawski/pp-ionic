import { Party } from 'src/app/graphql/generated/types';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-qr-modal',
    templateUrl: './qr-modal.component.html',
    styleUrls: ['./qr-modal.component.scss'],
})
export class QrModalComponent implements OnInit {
    @Input() party: Party;

    constructor(private modalController: ModalController) {}

    ngOnInit() {}

    closeModal() {
        this.modalController.dismiss();
    }
}
