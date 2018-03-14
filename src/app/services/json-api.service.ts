import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConfig }from '../config/config.constant';



@Injectable()
export class JsonApiService {
  productObj:object = {};
  private headers = new Headers({ 'Content-Type': 'application/json'});
  constructor(private http: Http) {
  }

  // Call rest api to save movie into database
  addToFavourite(movie){ 
    return this.http.post(AppConfig.apiUrl+'/movies', movie, {headers: this.headers})
    .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }

   // Call rest api to get favourite movies from database
  getFavourite(){ 
    return this.http.get(AppConfig.apiUrl+'/movies', {headers: this.headers})
    .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }


   // Call rest api to get favourite movies from database
  deleteMovie(movieId){ 
    return this.http.delete(AppConfig.apiUrl+'/movies/'+movieId, {headers: this.headers})
    .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }


   // Handle errors
   private handleError(error: Response){
     return Observable.throw(error.statusText);
   }
 }












