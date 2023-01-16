import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MovieRequest } from '../movie-request.request';
import { Movie } from '../movie.body';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  @Input() movieList: Movie = {}
  @Input() currentQuery: string = ''
  @Output() submitted = new EventEmitter<MovieRequest>()

  updateInfo(event: any) {
    this.submitted.emit({query: this.currentQuery, page: event.pageIndex})
  }
}
