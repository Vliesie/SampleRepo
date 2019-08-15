import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { fromPromise } from 'rxjs/internal-compatibility'

import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase/app'
import UserCredential = firebase.auth.UserCredential

import { AuthNetwork } from '../../domain/gateways/network/auth.network'

@Injectable()
export class FirebaseAuthNetwork implements AuthNetwork<UserCredential> {

  constructor(private auth: AngularFireAuth) {}

  // TODO: Implement create cloud function and call here
  create(email: string, name: string): Observable<UserCredential> {
    return undefined;
  }

  login(email: string, password: string): Observable<UserCredential> {
    return fromPromise(this.auth.auth.signInWithEmailAndPassword(email, password))
  }

  logout(): Observable<void> {
    return fromPromise(this.auth.auth.signOut())
  }
}
