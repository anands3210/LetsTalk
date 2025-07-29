import { Injectable } from '@angular/core';
import { Database, ref, set, onValue } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private heToShe$ = new BehaviorSubject<string>('');
  private sheToHe$ = new BehaviorSubject<string>(''); 

  constructor(private db: Database) {
    const sheRef = ref(this.db, 'chat/she');
    onValue(sheRef, (snapshot) => {
      const msg = snapshot.val();
      console.log('🔥 Message for He:', msg);
      if (msg !== null) this.sheToHe$.next(msg);
    });

    const heRef = ref(this.db, 'chat/he');
    onValue(heRef, (snapshot) => {
      const msg = snapshot.val();
      console.log('🔥 Message for She:', msg);
      if (msg !== null) this.heToShe$.next(msg);
    });
  }

  sendMessageFromHe(message: string) {
    set(ref(this.db, 'chat/he'), message);
  }

  sendMessageFromShe(message: string) {
    set(ref(this.db, 'chat/she'), message);
  }

  getMessageForHe() {
    return this.sheToHe$.asObservable();
  }

  getMessageForShe() {
    return this.heToShe$.asObservable();
  }
}
