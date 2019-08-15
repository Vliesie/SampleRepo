import { Store, select } from '@ngrx/store';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/entity/user.entity';
import { State } from '../../../../presentation/index';
import { getCurrentUser } from 'src/app/presentation/user/user.selectors';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {


constructor(private store: Store<State>){}

  user$: Observable<User>;

  ngOnInit(){

    this.user$ = this.store.pipe(select(getCurrentUser));
  }

  doNothing(){

  }

}


