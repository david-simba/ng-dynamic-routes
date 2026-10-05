import { Routes } from '@angular/router';
import { HomePage } from './features/home/presentation/pages/home-page/home-page';
import { OtherPage } from './features/other/presentation/pages/other-page/other-page';
import { HomeDetails } from './features/home/presentation/pages/home-details/home-details';

export const routes: Routes = [
  {
    path: "home",
    component: HomePage
  },
  {
    path: "home-details/:id",
    component: HomeDetails
  },
  { 
    path: "other",
    component: OtherPage
  },
  {
    path: "**",
    redirectTo: "home"
  }
];
