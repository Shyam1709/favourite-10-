import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from './../../services/tmdb-api.service';
import { AppConfig } from './../../config/config.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[TmdbApiService]
})
export class HomeComponent implements OnInit {
 public popularData: any=[];
 public movieId:number = 0;
 public movieUrl=AppConfig.baseUrl;
 public movieSearch : any;

  constructor(private tmdbApiService : TmdbApiService) { }

  ngOnInit() {
     this.getInfo();
  }
  //get movie data to display on the card layout
  getInfo(){
    this.tmdbApiService.getPopular().subscribe(data=>{
      this.popularData=data.results;
        },(error:any)=>{
          console.log(error)
        })
  }
    //get search data on search button click
   search() {
    this.tmdbApiService.getSearch(this.movieSearch).subscribe(data=>{
      this.popularData=data.results;
        },(error:any)=>{
          console.log(error)
        })
  }
    //get search data from search bar on enter key press
   keySearch() {
    this.tmdbApiService.getSearch(this.movieSearch).subscribe(data=>{
      this.popularData=data.results;
        },(error:any)=>{
          console.log(error)
        })
  }

  count(){
    this.movieId=this.movieId+1;
    console.log(this.movieId);
  }
}
