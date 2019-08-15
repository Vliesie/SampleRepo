import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNetwork } from '../domain/gateways/network/user.network'
import { FirebaseUserNetwork } from './firebase/firebase.user.network'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: UserNetwork, useClass: FirebaseUserNetwork }
  ]
})
export class FirebaseNetworkModule { }
