// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyCnhnwPz7kPsxxNI2ITHBq3aA9Zmr5GTM0",
  authDomain: "divya-manoj.firebaseapp.com",
  projectId: "divya-manoj",
  messagingSenderId: "778093487534",
  appId: "1:778093487534:web:c10465fbf68a7ac79e943f",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icons/icon-192x192.png'
  });
});
