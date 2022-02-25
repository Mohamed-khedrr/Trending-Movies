import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetalis } from '../movie-detalis';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  color:string ="";
  constructor(private _MovieService:MovieService , private _ActivatedRoute:ActivatedRoute) { }
  imagePath = 'https://image.tmdb.org/t/p/w500'
  id:string = ''
  movieDetails:MovieDetalis ={};
  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._MovieService.getMovieDetails(this.id).subscribe(
      (response)=>{this.movieDetails = response}
      )
  }






}
