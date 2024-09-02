/* import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { firebaseConfig } from './../../firebaseConfig'; // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app = initializeApp(firebaseConfig);
  private db = getFirestore(this.app);

  constructor() { }

  async getData() {
    const querySnapshot = await getDocs(collection(this.db, "votre_collection"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }
}
 */