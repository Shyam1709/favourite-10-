import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FavouriteMoviesComponent } from './components/favourite-movies/favourite-movies.component';

const routes :Routes = [
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'favourite', component:FavouriteMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[ RouterModule],
  declarations: []
})
export class AppRoutingModule { }
