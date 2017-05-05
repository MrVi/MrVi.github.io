import {Injectable, OnInit} from '@angular/core';
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

  constructor(private http: Http) {
  }

  getWifiList(): Observable<GosPoint[]>{
    return this.http.get(`${BASE_URL}.json`)
        .map(res => res.json())
  }

  initWifiList(): Observable<Iwifi[]>{
    return this.http.get(`${BASE_URL}.json`)
      .map(res => res.json())
      .map(pointList => pointList.map(
        point => this.createNewPoint(point)
        )
      );
  }

  createNewPoint(gos_point: GosPoint): Iwifi {
    return {
      name: (gos_point.WiFiName + gos_point.ID),
      login: gos_point.WiFiName,
      password: '',
      address: gos_point.Location,
      status: FavoriteStatus.NO,
      from: PlaceStatus.INTERNET
    }
  }


}
