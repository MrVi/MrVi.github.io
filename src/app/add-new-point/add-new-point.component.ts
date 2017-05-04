import { Component, OnInit } from '@angular/core';
import {WifiService} from "../shared/model/wifi.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

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
      name: ['', [Validators.required]],
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
      address: [''],
    });
  }

  onSubmit(form) {
    this.wifiService.addNewPoint(this.form.get('name').value, this.form.get('login').value,
      this.form.get('password').value, this.form.get('address').value);
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
      address: [''],
    });
  }

}
