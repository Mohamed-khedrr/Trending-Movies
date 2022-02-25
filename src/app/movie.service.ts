import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// https://api.themoviedb.org/3/trending/movie/week?api_key=866cd3a065ef9304a549f1d65e494940
// https://api.themoviedb.org/3/trending/tv/week?api_key=866cd3a065ef9304a549f1d65e494940

// https://api.themoviedb.org/3/movie/464052?api_key=866cd3a065ef9304a549f1d65e494940&language=en-US

// imagePath = https://image.tmdb.org/t/p/w500


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _HttpClient:HttpClient) { }


getTrending(type:string):Observable<any>{
  console.log((`https://api.themoviedb.org/3/trending/${type}/week?api_key=866cd3a065ef9304a549f1d65e494940`))
  return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=866cd3a065ef9304a549f1d65e494940`)
}


getMovieDetails(id:string){
  return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=866cd3a065ef9304a549f1d65e494940&language=en-US`)
}










}
