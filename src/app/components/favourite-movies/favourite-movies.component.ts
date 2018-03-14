import { Component, OnInit } from '@angular/core';
import { JsonApiService } from './../../services/json-api.service';
import { AppConfig } from './../../config/config.constant';


@Component({
  selector: 'app-favourite-movies',
  templateUrl: './favourite-movies.component.html',
  styleUrls: ['./favourite-movies.component.css'],
  providers:[JsonApiService]

})
export class FavouriteMoviesComponent implements OnInit {
 public favMovies : any =[];
	public errorMsg ='';
 public showError : boolean = false;
 public movieUrl=AppConfig.baseUrl;


  constructor(private jsonApiService : JsonApiService) { }

  ngOnInit() {
  	this.getFavorite();
  }

  // Get favourite movies from  database
  getFavorite() {
    this.jsonApiService.getFavourite().subscribe((res) =>{
      this.favMovies = res;
      this.showError = false;
    },(error:any)=>{
      this.errorMsg = error._body;
      this.showError = true;
    })
  }

  ///Delete movie from database
  deleteMovie(movieId){
  	this.jsonApiService.deleteMovie(movieId).subscribe(data=>{
      this.getFavorite();
        },(error:any)=>{
          console.log(error)
        })
  }

  }

