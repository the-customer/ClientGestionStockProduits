import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from "./produit/produit.component";
import { ProduitMockService } from "./produit/produit.mock.service";
import { TestComponent } from './test/test.component';
import { TestMockService } from './test/test.mock.service';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProduitMockService, TestMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
