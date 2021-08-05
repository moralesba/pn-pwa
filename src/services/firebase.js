import firebase from "firebase";

export function firebaseConfig() {
    var config = {
        apiKey: "AIzaSyB7BdiyOV6M52Jp-iPd1tIgAacKlONPdis",
        authDomain: "pn-pwa.firebaseapp.com",
        projectId: "pn-pwa",
        storageBucket: "pn-pwa.appspot.com",
        messagingSenderId: "211385459012",
        appId: "1:211385459012:web:57075085d57d8b9a443711",
        measurementId: "G-076ZEXMN24"
    };
    firebase.initializeApp(config);
}

export function gerarToken() {
    console.log("EU")
    const messaging = firebase.messaging();
    messaging.usePublicVapidKey("BCckw1fDfD8LqjdRMKsVOSK9lxVRmEqxR-aZTQcVPTxYfns-WPAgUOXiYbq7HAp-Hg279y72FQcyq4pDn1Obq3g");
    return messaging.getToken()
}