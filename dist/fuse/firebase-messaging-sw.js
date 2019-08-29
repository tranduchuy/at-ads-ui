importScripts('https://www.gstatic.com/firebasejs/6.4.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.4.2/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: 'YOUR-SENDER-ID'
});

const messaging = firebase.messaging();