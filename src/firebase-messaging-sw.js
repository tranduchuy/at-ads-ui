importScripts('https://www.gstatic.com/firebasejs/6.4.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.4.2/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: 'YOUR-SENDER-ID'
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  // Customize notification here
  // const notificationTitle = 'Công cụ chống click tặc 2019';
  // const notificationOptions = {
  //   body: 'Bạn đã nhận được cập nhật mới',
  //   icon: 'assets/images/app-logo.png'
  // };

  // return self.registration.hideNotification(notificationTitle,
  //   notificationOptions);

  return new Promise(function(resolve, reject) {});
});