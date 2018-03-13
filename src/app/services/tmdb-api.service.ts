import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from './../config/config.constant';
import 'rxjs/add/operator/map';

@Injectable()
export class TmdbApiService {
private popularURL=AppConfig.movie_api;
data:any={};
constructor(private http: Http) {
 }

//get moviedata to display on the homepage
getPopular(){
     return this.http.get(this.popularURL)
     .map(data => data.json(),
     (error: any)=>this.handleError(error));
   }

//get search movie data entered by user in search bar
   getSearch(movieName: any){
     return this.http.get(AppConfig.search_api+movieName)
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }
   private handleError(error: Response){
     return Observable.throw(error.statusText);
   }

   // isAdded:boolean=false;
   // movieObj:object={};
   // addNewMovie=function(movie){
   //   this.movieObj={
   //     "title":movie.name,
   //     "poster_path":movie.poster_path
   //   }
   //   this.http.post("http://localhost:3000/results",this.movieObj).subscribe((res:Response)=>{
   //       this.isAdded=true;
   //     });
   // }
}
