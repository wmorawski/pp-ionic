import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

export const subscribeToTopic = functions.https.onCall(async (data, context) => {
    await admin.messaging().subscribeToTopic(data.token, data.topic);

    return `subscribed to ${data.topic}`;
});

export const unsubscribeFromTopic = functions.https.onCall(async (data, context) => {
    await admin.messaging().unsubscribeFromTopic(data.token, data.topic);

    return `unsubscribed from ${data.topic}`;
});

export const sendOnFirestoreCreate = functions.firestore
    .document('discounts/{discountId}')
    .onCreate(async (snapshot) => {
        const discount = snapshot.data();
        const notification: admin.messaging.Notification = {
            title: 'New discount available!',
            body: discount!.headline,
        };
        const payload: admin.messaging.Message = {
            notification,
            webpush: {
                notification: {
                    vibrate: [200, 100, 200, 100],
                    actions: [
                        {
                            action: 'like',
                            title: 'Yay!',
                        },
                        {
                            action: 'dislike',
                            title: 'Boo!',
                        },
                    ],
                },
            },
            topic: 'discounts',
        };

        return admin.messaging().send(payload);
    });
