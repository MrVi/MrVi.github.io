import {FavoriteStatus} from "../constant/favorite-status.enum";
export interface Iwifi {
  name: string;
  login: string;
  password: string;
  address: string;
  status: FavoriteStatus;
}

