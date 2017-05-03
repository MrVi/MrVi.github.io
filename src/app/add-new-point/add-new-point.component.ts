import { Component, OnInit } from '@angular/core';
import {WifiService} from "../shared/model/wifi.service";
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-new-point',
  templateUrl: './add-new-point.component.html',
  styleUrls: ['./add-new-point.component.css']
})
export class AddNewPointComponent implements OnInit {

  form: FormGroup;

  constructor(private wifiService: WifiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      login: [''],
      password: [''],
      address: [''],
    });
  }

  onSubmit(form) {
    this.wifiService.addNewPoint(this.form.get('name').value, this.form.get('login').value,
      this.form.get('password').value, this.form.get('address').value);
  }

}
