import {Component, OnInit} from '@angular/core';
import {Filter} from "./shared/constant/filter.enum";
import {FilterMenuService} from "./shared/model/filter-menu.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  filter = Filter;

  filter_now : Filter;
  subscription: Subscription;
  constructor(private menuService: FilterMenuService) {
    this.subscription = this.menuService.navItem$.subscribe(filter => this.filter_now = filter);
    // console.log('--inAppComponentConstructor', this.filter_now);
  }

  // changeFilter(chosen_filter: Filter){
  //   this.filter_now = chosen_filter;
  // }

  ngOnInit(){}

  ifList(){
    return this.filter_now === Filter.ALL || this.filter_now === Filter.LOCAL ||
       this.filter_now === Filter.INTERNET || this.filter_now === Filter.FAVORITES
  }
}
