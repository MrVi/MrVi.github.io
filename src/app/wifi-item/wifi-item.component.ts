import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Iwifi} from "../shared/model/iwifi";
import {FavoriteStatus} from "../shared/constant/favorite-status.enum";

@Component({
  selector: 'app-wifi-item',
  templateUrl: './wifi-item.component.html',
  styleUrls: ['./wifi-item.component.css']
})
export class WifiItemComponent implements OnInit {

  @Input() point_item: Iwifi;
  @Output() delete  = new EventEmitter();
  @Output() status_change  = new EventEmitter();

  constructor() { }
  is_open = false;

  ngOnInit() {
  }

  changeStatus(){
    this.status_change.emit(this.point_item);
  }
  deletePoint(){
      this.delete.emit(this.point_item);
  }
  isFavorite(){
    return this.point_item.status === FavoriteStatus.YES;
  }
  isOpen(){
    return this.is_open;
  }
  showAllInfo() {
    this.is_open = !this.is_open;
  }
}
