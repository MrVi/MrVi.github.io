import {Component, Input} from '@angular/core';
import {Filter} from "./shared/constant/filter.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  filter_now = Filter.ALL;
  filter = Filter;

  changeFilter(chosen_filter: Filter){
    this.filter_now = chosen_filter;
  }

  ifList(){
    return this.filter_now === Filter.ALL || this.filter_now === Filter.LOCAL ||
      this.filter_now === Filter.INTERNET || this.filter_now === Filter.FAVORITES
  }
}
