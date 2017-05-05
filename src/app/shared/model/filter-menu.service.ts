import { Injectable } from '@angular/core';
import {Filter} from "../constant/filter.enum";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class FilterMenuService {

  constructor() { }

  private current_filter = new BehaviorSubject(Filter.ALL);
  navItem$ = this.current_filter.asObservable();

  changeFilter(new_filter) {
    this.current_filter.next(new_filter);
    console.log('----Filter', this.current_filter);
  }
}
