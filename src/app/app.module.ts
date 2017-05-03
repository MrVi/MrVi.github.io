import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { WifiListComponent } from './wifi-list/wifi-list.component';
import { MenuComponent } from './menu/menu.component';
import { WifiItemComponent } from './wifi-item/wifi-item.component';
import { AddNewPointComponent } from './add-new-point/add-new-point.component';
import {WifiService} from "./shared/model/wifi.service";

@NgModule({
  declarations: [
    AppComponent,
    WifiListComponent,
    MenuComponent,
    WifiItemComponent,
    AddNewPointComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [WifiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
