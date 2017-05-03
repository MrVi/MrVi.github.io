import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Filter} from "../shared/constant/filter.enum";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() filter_change  = new EventEmitter();

  filter = Filter;
  constructor() { }

  ngOnInit() {
  }

  changeFilter(chosen_filter: Filter){
    this.filter_change.emit(chosen_filter);
  }


}
