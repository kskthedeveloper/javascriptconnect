import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './helloworld.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProudctDetailComponent } from './proudct-detail/proudct-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ProductListComponent,
    ProudctDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
