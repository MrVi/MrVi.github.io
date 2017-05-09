import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { WifiListComponent } from './wifi-list/wifi-list.component';
import { MenuComponent } from './menu/menu.component';
import { WifiItemComponent } from './wifi-item/wifi-item.component';
import { AddNewPointComponent } from './add-new-point/add-new-point.component';
import {WifiService} from "./shared/model/wifi.service";
import {FilterMenuService} from "./shared/model/filter-menu.service";
import {WifiGosMosService} from "./shared/model/wifi-gos-mos.service";
import { ListSearchComponent } from './list-search/list-search.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: 'add-new-point', component: AddNewPointComponent },
  { path: 'list-search', component: ListSearchComponent},
  { path: 'wifi-list', component: WifiListComponent},
  { path: 'about', component: AboutComponent},
  { path: '',
    redirectTo: 'wifi-list',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WifiListComponent,
    MenuComponent,
    WifiItemComponent,
    AddNewPointComponent,
    ListSearchComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    WifiService,
    FilterMenuService,
    WifiGosMosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
