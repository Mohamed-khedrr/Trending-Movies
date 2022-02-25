import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private _movieService:MovieService) { }


  movies:Movie[] = [];
  tvs:Movie[] = [];
  persons:Movie[] = [];

  imgPath = 'https://image.tmdb.org/t/p/w500';

  ngOnInit(): void {
    this._movieService.getTrending('movie').subscribe((response)=>{
      this.movies = response.results.slice(0, 10) ;
    })
    this._movieService.getTrending('tv').subscribe((response)=>{
      this.tvs = response.results.slice(0, 10) ;
    })
    this._movieService.getTrending('person').subscribe((response)=>{
      this.persons = response.results.slice(0, 10) ;
    })
  }

}
