import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Iwifi} from "./iwifi";
import {GosPoint} from "./gos-point";
import {PlaceStatus} from "../constant/place-status.enum";
import {FavoriteStatus} from "../constant/favorite-status.enum";

const PARK_URL = 'http://data.gov.ru/opendata/7710878000-wifi/data-20161219T0100';
const MOS_URL = 'http://data.gov.ru/opendata/7710878000-gorodskoywifi/data-20170130T0100';
const BASE_URL = 'https://wifi-68d5d.firebaseio.com/';

@Injectable()
export class WifiGosMosService {

  temp: GosPoint[] = [];
  temp2: Iwifi[] = [];

  constructor(private http: Http) {
  }

  getWifiList(): Observable<GosPoint[]>{
    return this.http.get(`${BASE_URL}.json`)
        .map(res => res.json())
  }


  getWifiList2(){
    this.getWifiList().subscribe((res) => {
      console.log(res);
      this.temp = res;
      this.temp2 = res.map(point => {
        return this.createNewPoint(point);
      });
      return this.temp2;
    });
  }

  getWifiList3(): Observable<Iwifi[]>{
    return this.http.get(`${BASE_URL}.json`)
      .map(res => res.json())
      .map(point => {
        return this.createNewPoint(point);
      });
  }

  createNewPoint(gos_point: GosPoint): Iwifi {
    return {
      name: gos_point.WiFiName,
      login: gos_point.WiFiName,
      password: '',
      address: gos_point.Location,
      status: FavoriteStatus.NO,
      from: PlaceStatus.LOCAL
    }
  }
    // .map(data => {
    //   const result = Object.keys(data)
    //     .map(key => {
    //       return Object.assign({}, data[key], {key});
    //     });
    //
    //   console.log('--- result', result);
    //   return result;
    // })

}
