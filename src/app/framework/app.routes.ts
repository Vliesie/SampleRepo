import { CalanderComponent } from './components/calander/calander.component';
import { ContactsComponent } from './components/ContactsComponents/contacts/contacts.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { AuthGuard } from './guards/firebase.auth.guard'
import { DashboardGuard } from './guards/firebase.dashboard.guard'
import { UsersComponent } from './components/users/users.component'
import { TimelineComponent } from './components/timeline/timeline.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { NewContactComponent } from './components/ContactsComponents/new-contact/new-contact.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [DashboardGuard]
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [DashboardGuard]
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: LandingPageComponent
          },
         {
            path: 'users',
            component: UsersComponent
          },
           {
            path: 'users/new',
            component: NewUserComponent
          },
          {
            path: 'Timeline',
            component: TimelineComponent
          },
          {
            path: 'users/:id',
            component: EditUserComponent
          },
          {
            path: 'toDo',
            component: ToDoComponent
          },
          {
            path: 'Contacts',
            component: ContactsComponent
          },
          {
            path: 'Contacts/new',
            component: NewContactComponent
          },
          {
            path: 'Calendar',
            component: CalanderComponent
          }
        ],
      },
    ],
  },
]
