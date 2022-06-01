import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {HomeComponent} from './home/home.component';
import {CardModule} from 'primeng/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {TagModule} from 'primeng/tag';
import {ChipModule} from 'primeng/chip';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        CardModule,
        ReactiveFormsModule,
        TableModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        DynamicDialogModule,
        TagModule,
        ChipModule,
        BadgeModule,
        AvatarModule,
        ConfirmDialogModule,
        TooltipModule,
        ToastModule
    ]
})
export class PagesModule {
}
