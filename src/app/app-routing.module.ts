import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ErrorComponent } from './components/error/error.component';

import { SearchComponent } from './feature/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { FilmComponent } from './feature/film/film.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'search/:data',
    component: SearchComponent
  },
  {
    path:'film/:id',
    component: FilmComponent
  },
  {
    path:'**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
