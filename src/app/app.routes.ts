import { Routes } from '@angular/router';
import { MemberListComponent } from './Components/MemberList/MemberList';
import { MemberDetailsComponent } from './Components/MemberDetails/MemberDetails'; // Import the component

export const routes: Routes = [
  { path: '', component: MemberListComponent },
  { path: 'member/:id', component: MemberDetailsComponent }, // Ensure this route is configured
];
