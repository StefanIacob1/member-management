// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { MemberListComponent } from './Components/MemberList/MemberList';
import { MemberDetailsComponent } from './Components/MemberDetails/MemberDetails';

export const routes: Routes = [
  { path: '', component: MemberListComponent },
  { path: 'member/:id', component: MemberDetailsComponent },
];
