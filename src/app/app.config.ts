import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideClientHydration } from '@angular/platform-browser';


const firebaseConfig = {
  apiKey: "AIzaSyDgcrzN4AMR83_7xnONx_LdzXqBYCmf5n4",
  authDomain: "march21-database.firebaseapp.com",
  projectId: "march21-database",
  storageBucket: "march21-database.appspot.com",
  messagingSenderId: "579359009749",
  appId: "1:579359009749:web:d3de038a5f0cbba5342b5c",
  measurementId: "G-J64F3LWL8C"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore())
    ])
  ]


};

