import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
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
import { CatalogueFilterComponent } from './component/catalogue-filter/catalogue-filter.component';
import { FooterComponent } from './component/footer/footer.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


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
    CatalogueFilterComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AdzRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
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


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

