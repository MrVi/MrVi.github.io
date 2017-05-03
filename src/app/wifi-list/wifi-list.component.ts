import {Component, OnInit, Input} from '@angular/core';
import {Iwifi} from "../shared/model/iwifi";
import {FavoriteStatus} from "../shared/constant/favorite-status.enum";
import {Filter} from "../shared/constant/filter.enum";

@Component({
  selector: 'app-wifi-list',
  templateUrl: './wifi-list.component.html',
  styleUrls: ['./wifi-list.component.css']
})
export class WifiListComponent implements OnInit {

  wifi_list: Iwifi[] = [
    {
      name: 'Point1',
      status: FavoriteStatus.NO,
      login: 'admin',
      password: 'admin',
      address: 'work'
    },
    {
      name: 'Point2',
      status: FavoriteStatus.YES,
      login: 'Skl',
      password: 'qwerty',
      address: 'Home'
    },
    {
      name: 'Point3',
      status: FavoriteStatus.YES,
      login: 'asd',
      password: '123',
      address: 'Anne',
    }
  ]

  @Input() filter: Filter;

  constructor() {
  }

  ngOnInit() {
  }

  deletePoint(point_to_delete: Iwifi) {
    this.wifi_list = this.wifi_list.filter(
      point => point.name != point_to_delete.name
    );
  }

  changeStatus(point_to_change_status: Iwifi) {
    const status = point_to_change_status.status === FavoriteStatus.YES ? FavoriteStatus.NO : FavoriteStatus.YES;
    const new_point = Object.assign({}, point_to_change_status, {status});
    this.wifi_list = this.wifi_list.map(
      point => point.name !== point_to_change_status.name ? point : new_point
    );
  }
}
