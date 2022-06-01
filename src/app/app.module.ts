import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {HttpClientModule} from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ButtonModule} from 'primeng/button';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SharedModule} from './shared/shared.module';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TableModule,
    DropdownModule,
    AccordionModule,
    AutoCompleteModule,
    ButtonModule,
    ScrollPanelModule,
    ScrollTopModule,
    DynamicDialogModule,
    ConfirmDialogModule
  ],
  providers: [
    DialogService,
    ConfirmationService,
    MessageService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
