import {FavoriteStatus} from "../constant/favorite-status.enum";
import {PlaceStatus} from "../constant/place-status.enum";
export interface Iwifi {
  name: string;
  login: string;
  password: string;
  address: string;
  status: FavoriteStatus;
  from: PlaceStatus;
}

