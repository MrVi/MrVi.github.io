import {Component, OnInit, Input} from '@angular/core';
import {Iwifi} from "../shared/model/iwifi";
import {FavoriteStatus} from "../shared/constant/favorite-status.enum";
import {Filter} from "../shared/constant/filter.enum";
import {WifiService} from "../shared/model/wifi.service";
import {Subscription} from "rxjs";
import {FilterMenuService} from "../shared/model/filter-menu.service";
import {PlaceStatus} from "../shared/constant/place-status.enum";
import {WifiGosMosService} from "../shared/model/wifi-gos-mos.service";
import {GosPoint} from "../shared/model/gos-point";

@Component({
  selector: 'app-wifi-list',
  templateUrl: './wifi-list.component.html',
  styleUrls: ['./wifi-list.component.css']
})
export class WifiListComponent implements OnInit {

  wifi_list: Iwifi[] = [];
  filter_now : Filter;
  subscription: Subscription;


  @Input() search_string: string;

  constructor(private wifiService: WifiService,
              private menuService: FilterMenuService,
              private wifiGosService: WifiGosMosService) {
    this.subscription = this.menuService.navItem$.subscribe(filter => {
      this.filter_now = filter;
      this.updateList();
    });
    // console.log('--inTodoListfunc', this.filter_now);
  }

  checkFilter(point_to_check: Iwifi): boolean {
    switch (this.filter_now) {
      case Filter.FAVORITES:
        return point_to_check.status === FavoriteStatus.YES;

      case Filter.LOCAL:
        return point_to_check.from === PlaceStatus.LOCAL;

      case Filter.INTERNET:
      return point_to_check.from === PlaceStatus.INTERNET;

      case Filter.SEARCH:
        // console.log(this.search_string);
        return this.wifiService.checkIfContain(this.search_string, point_to_check);

      default:
        return true;
    }
  }

  ngOnInit() {
    this.updateList();
  }

  deletePoint(point_to_delete: Iwifi) {
  // this.wifi_list = this.wifi_list.filter(
  //   point => point.name != point_to_delete.name
  // );
    this.wifiService.deletePoint(point_to_delete);
    this.updateList();
}

  changeStatus(point_to_change_status: Iwifi) {
    // const status = point_to_change_status.status === FavoriteStatus.YES ? FavoriteStatus.NO : FavoriteStatus.YES;
    // const new_point = Object.assign({}, point_to_change_status, {status});
    // this.wifi_list = this.wifi_list.map(
    //   point => point.name !== point_to_change_status.name ? point : new_point
    // );
    this.wifiService.changeStatus(point_to_change_status);
    this.updateList();
  }

  private updateList(){
    this.wifiGosService.initWifiList().subscribe((res) => {
      console.log(res);
      this.wifiService.concatWithInternet(res);
      console.log('END', this.wifi_list);
    });
    this.wifi_list = this.wifiService.getWifiList();
  }


}
