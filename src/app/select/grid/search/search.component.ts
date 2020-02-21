import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() private searchValue = '';
  @Output() private searchValueChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  private updateSearch() {
    this.searchValueChanged.emit(this.searchValue);
  }
}
