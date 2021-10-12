import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAvzx2RQMjlzf903oRLX4CYMmyxBItkJqg",
    authDomain: "uploading-file-14552.firebaseapp.com",
    projectId: "uploading-file-14552",
    storageBucket: "uploading-file-14552.appspot.com",
    messagingSenderId: "379430328588",
    appId: "1:379430328588:web:69e3fdb72ef2a79d689129",
    measurementId: "G-F8BEBH8ZNK"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export {storage, firebase as default}