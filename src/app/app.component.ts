import { Component } from '@angular/core';
import {TmdbApiService} from './services/tmdb-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TmdbApiService]
})
export class AppComponent {
  title = 'app';
}
