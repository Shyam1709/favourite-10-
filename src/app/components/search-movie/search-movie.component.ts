import { Component, OnInit } from '@angular/core';
import {TmdbApiService} from './../../services/tmdb-api.service';
@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
  providers:[TmdbApiService]
})
export class SearchMovieComponent implements OnInit {
public searchData: any=[];
  constructor(private tmdbApiService : TmdbApiService) { }

  ngOnInit() {
  // this.getInfo();
  }
 // getInfo(){
 //    this.tmdbApiService.getSearch().subscribe(data=>{
 //      this.searchData=data.results;
 //        },(error:any)=>{
 //          console.log(error)
 //        })
 //  }
 

}
