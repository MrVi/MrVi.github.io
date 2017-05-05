import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {WifiService} from "../shared/model/wifi.service";

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.css']
})
export class ListSearchComponent implements OnInit {

  constructor(private wifiService: WifiService, private fb: FormBuilder) { }

  form: FormGroup;
  search: string;

  ngOnInit() {
    this.form = this.fb.group({
      name: ['']
    });
  }

  onSubmit(form) {
    this.search = this.form.get('name').value;
    this.form = this.fb.group({
      name: ['']
    });
  }

}
