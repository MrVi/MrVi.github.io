import {Component, OnInit, Input} from '@angular/core';
import {Iwifi} from "../shared/model/iwifi";
import {FavoriteStatus} from "../shared/constant/favorite-status.enum";
import {Filter} from "../shared/constant/filter.enum";
import {WifiService} from "../shared/model/wifi.service";

@Component({
  selector: 'app-wifi-list',
  templateUrl: './wifi-list.component.html',
  styleUrls: ['./wifi-list.component.css']
})
export class WifiListComponent implements OnInit {

  wifi_list: Iwifi[] = [];

  @Input() filter: Filter;

  constructor(private wifiService: WifiService) {}

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
    this.wifi_list = this.wifiService.getWifiList();
  }
}
