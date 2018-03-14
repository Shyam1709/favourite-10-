import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from './../../services/tmdb-api.service';
import { JsonApiService } from './../../services/json-api.service';
import { AppConfig } from './../../config/config.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[TmdbApiService, JsonApiService]
})
export class HomeComponent implements OnInit {
 public movies: any=[];
 public movieId:number = 0;
 public movieUrl=AppConfig.baseUrl;
 public movieSearch : any;
 public favMovies : any =[];
 public errorMsg ='';
 public showError : boolean = false;

  constructor(private tmdbApiService : TmdbApiService,
    private jsonApiService : JsonApiService) { }

  ngOnInit() {
     this.getFavorite();
  }
 
  // Add favourite movie to  database
  addToFavorite(movie) {
    this.jsonApiService.addToFavourite(movie).subscribe((res) =>{
     this.getFavorite();
      this.showError = false;

    },(error:any)=>{
      this.errorMsg = error.statusText;
      this.showError = true;
        })
  }

  // Add favourite movie to  database
  getFavorite() {
    this.jsonApiService.getFavourite().subscribe((res) =>{
      this.favMovies = res;
      this.showError = false;
    },(error:any)=>{
      this.errorMsg = error._body;
      this.showError = true;
    })
  }
    //get search data on search button click
   search() {
    this.tmdbApiService.getSearch(this.movieSearch).subscribe(data=>{
      this.movies=data.results;
        },(error:any)=>{
          console.log(error)
        })
  }
    }


