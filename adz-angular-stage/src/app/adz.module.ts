import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';


import { AdzRoutingModule } from './adz-routing.module';
import { AdzComponent } from './adz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CatalogueComponent } from './component/catalogue/catalogue.component';
import {ApiConfigService} from './services/api-config/api-config.service';
import { BookDialogOverviewComponent } from './component/book-dialog-overview/book-dialog-overview.component';


export function initializeApi(appConfig: ApiConfigService) {
  return () => appConfig.getConfigBook();
}

@NgModule({
  declarations: [
    AdzComponent,
    HomeComponent,
    ErrorComponent,
    CatalogueComponent,
    BookDialogOverviewComponent,
  ],
  imports: [
    BrowserModule,
    AdzRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApi,
      deps: [ApiConfigService], multi: true
    }
  ],
  bootstrap: [AdzComponent]
})
export class AdzModule { }
