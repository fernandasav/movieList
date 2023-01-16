import { Component, EventEmitter, Output } from '@angular/core';
import { MovieRequest } from '../movie-request.request';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<MovieRequest>()

  term: string = ''

  onFormSubmit(event: any) {
    event.preventDefault()
    this.submitted.emit({query: this.term, page: 0})
  }
}
