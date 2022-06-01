import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContaEditComponent } from './components/conta-edit/conta-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {InputNumberModule} from 'primeng/inputnumber';
import {SelectButtonModule} from 'primeng/selectbutton';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CalendarModule} from 'primeng/calendar';
import {RippleModule} from 'primeng/ripple';
import {TooltipModule} from 'primeng/tooltip';



@NgModule({
  declarations: [
    ContaEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    InputNumberModule,
    SelectButtonModule,
    InputSwitchModule,
    CalendarModule,
    RippleModule,
    TooltipModule
  ]
})
export class SharedModule { }
