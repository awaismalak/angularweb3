import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { convertToSpacePipe } from './shared/convert-to-spaces-pipe';
import { StarComponent } from "./shared/StarComponent";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    convertToSpacePipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
