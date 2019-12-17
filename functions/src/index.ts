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

export const sendOnFirestoreCreate = functions.firestore.document('notifications/{discountId}').onCreate(async snapshot => {
    const not = snapshot.data();
    const notification: admin.messaging.Notification = {
        title: not!.title,
        body: not!.body,
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
        topic: 'notifications',
    };

    return admin.messaging().send(payload);
});
