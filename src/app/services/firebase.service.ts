import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, query, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) { }


  getNotes(collectionname: any): Observable<any[]> {
    const notesRef = collection(this.firestore, `${collectionname}`);
    return collectionData(notesRef, { idField: 'id' }) as Observable<any[]>;
  }

  getNoteById(collectionname: any, id: any): Observable<any> {
    const noteDocRef = doc(this.firestore, `${collectionname}/${id}`);
    return docData(noteDocRef, { idField: 'id' }) as Observable<any>;
  }

  addNote(collectionname: any, note: any) {
    const notesRef = collection(this.firestore, `${collectionname}`);
    return addDoc(notesRef, note);
  }

  deleteNote(collectionname: any, note: any) {
    const noteDocRef = doc(this.firestore, `${collectionname}/${note.id}`);
    return deleteDoc(noteDocRef);
  }

  updateNote(collectionname: any, note: any, i: any) {
    // console.log(collectionname, note, i);
    const noteDocRef = doc(this.firestore, `${collectionname}/${note.id}`);
    return updateDoc(noteDocRef, { favourited: i });
  }
}
