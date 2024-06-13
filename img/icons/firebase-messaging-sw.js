// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAGej1opGn0YO_LvtziNbxp1psn0xrklL8",
  authDomain: "daycare-237d8.firebaseapp.com",
  projectId: "daycare-237d8",
  storageBucket: "daycare-237d8.appspot.com",
  messagingSenderId: "585998104850",
  appId: "1:585998104850:web:8e32e836881bd34fb9dbcb"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
