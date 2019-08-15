import { calandarModule } from './components/calander/Calandar.module';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { RouterModule } from '@angular/router'
import { routes } from './app.routes'
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTableModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatMenuModule,

} from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire'
import { environment } from '../../environments/environment'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { StoreModule } from '@ngrx/store'
import { effects, reducers } from '../presentation'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { AuthGuard } from './guards/firebase.auth.guard'
import { DashboardGuard } from './guards/firebase.dashboard.guard'
import { FirebaseNetworkModule } from '../network/firebase.network.module'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store'
import { RouterSerializer } from '../presentation/router/router.selectors';
import { UsersComponent } from './components/users/users.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { ContactsComponent } from './components/ContactsComponents/contacts/contacts.component';
import { NewContactComponent } from './components/ContactsComponents/new-contact/new-contact.component';

//testing
import { CalanderComponent } from './components/calander/calander.component';
import { CalendarModule } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivitiesComponent } from './components/activities/activities.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgxChartsModule } from '@swimlane/ngx-charts'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    UsersComponent,
    NewUserComponent,
    TimelineComponent,
    EditUserComponent,
    LandingPageComponent,
    ToDoComponent,
    ContactsComponent,
    NewContactComponent,
    ActivitiesComponent,

    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    //Beta
   calandarModule,
   NgxChartsModule,
   ButtonsModule,

    // Material
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatMenuModule,

    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FirebaseNetworkModule,

    // NgRx
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: RouterSerializer },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
        duration: 5000,
        horizontalPosition: 'start',
        verticalPosition: 'top'
      }
    },
    AuthGuard,
    DashboardGuard,


  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
