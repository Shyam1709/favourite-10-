import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import{ HomeComponent } from './components/home/home.component';
import{ SearchMovieComponent} from './components/search-movie/search-movie.component';

const routes :Routes = [
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: '', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[ RouterModule],
  declarations: []
})
export class AppRoutingModule { }
