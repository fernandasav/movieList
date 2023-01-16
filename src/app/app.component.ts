import { Component } from '@angular/core';
import { MovieRequest } from './movie-request.request';
import { Movie } from './movie.body';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieList';
  movieResult: Movie = {}
  currentQuery: string = ''

  constructor(private movieService: MovieService) {}

  onTerm(term: MovieRequest) {
    this.currentQuery = term.query
    this.movieService.getMovieListBySearch(term.query, term.page)
      .subscribe(movieResult => {
        movieResult.page =-1
        this.movieResult = movieResult
      }
    )
  }
}
