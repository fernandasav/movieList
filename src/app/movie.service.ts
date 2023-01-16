import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Movie } from './movie.body';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieSearchUrl = 'https://api.themoviedb.org/3/search/movie'

  constructor(private httpClient: HttpClient) {}

  getMovieListBySearch(query: string, page: number): Observable<Movie> {
    query = query.trim();
    const queryParams = query ? {
      params: new HttpParams()
                    .set('query', query)
                    .set('api_key', '581d44e7910a4306b5356935bf55d8c4')
                    .set('language', 'en-US')
                    .set('page', page + 1)
                    .set('include_adult', false)
      } : {}
    return this.httpClient.get<Movie>(this.movieSearchUrl, queryParams)
  }
}
