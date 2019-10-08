import { PP_USER_ID } from './../constants';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FCM } from '@ionic-native/fcm/ngx';

@Injectable({
    providedIn: 'root',
})
export class FcmService {
    constructor(private afs: AngularFirestore, private fcm: FCM) {}

    // Get permission from the user
    async getToken() {
        const token = await this.fcm.getToken();
        return this.saveTokenToFirestore(token);
    }

    // Save the token to firestore
    private saveTokenToFirestore(token) {
        if (!token) {
            return;
        }

        const devicesRef = this.afs.collection('devices');

        const docData = {
            token,
            userId: localStorage.getItem(PP_USER_ID),
        };

        return devicesRef.doc(token).set(docData);
    }

    // Listen to incoming FCM messages
    listenToNotifications() {
        return this.fcm.onNotification();
    }

    sub(topic) {
        return this.fcm.subscribeToTopic(topic);
    }

    unsub(topic) {
        return this.fcm.unsubscribeFromTopic(topic);
    }
}
