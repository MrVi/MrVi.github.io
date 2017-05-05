import { Injectable } from '@angular/core';
import {Iwifi} from "./iwifi";
import {FavoriteStatus} from "../constant/favorite-status.enum";
import {PlaceStatus} from "../constant/place-status.enum";

@Injectable()
export class WifiService {

  constructor() { }

  private wifi_list: Iwifi[] = [
    {
      name: 'Point1',
      status: FavoriteStatus.NO,
      login: 'admin',
      password: 'admin',
      address: 'work',
      from: PlaceStatus.LOCAL
    },
    {
      name: 'Point2',
      status: FavoriteStatus.YES,
      login: 'Skl',
      password: 'qwerty',
      address: 'Home',
      from: PlaceStatus.LOCAL
    },
    {
      name: 'Point3',
      status: FavoriteStatus.YES,
      login: 'asd',
      password: '123',
      address: "Anne's house",
      from: PlaceStatus.LOCAL
    },
    {
      name: 'Point4',
      status: FavoriteStatus.NO,
      login: 'dsa',
      password: '123321',
      address: "Tom's house",
      from: PlaceStatus.LOCAL
    }
  ]

  getWifiList() {
    return this.wifi_list;
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

  static createNewPoint(name: string,login: string, password: string,address: string):Iwifi {
    return{
      name,
      login,
      password,
      address,
      status: FavoriteStatus.NO,
      from: PlaceStatus.LOCAL
    };
  }

  addNewPoint(name: string,login: string, password: string,address: string){
    this.wifi_list = this.wifi_list.concat([
      WifiService.createNewPoint(name,login, password,address)
    ]);
  }

  checkPointName(name_to_check: string):boolean {
    return this.wifi_list.some(
      ({name}) => name === name_to_check
    );
  }



}
