import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonsComponent } from './buttons/buttons.component';
import { MaterialModule } from './material/material.module';
import { MessageErrorComponent } from './message-error/message-error.component';
import { StatusPipe } from './pipes/status.pipe';
import { TypePipe } from './pipes/type.pipe';


@NgModule({
  declarations: [
    MessageErrorComponent,
    TypePipe,
    StatusPipe,
    ButtonsComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    MaterialModule,
    MessageErrorComponent,
    TypePipe,
    StatusPipe,
    ButtonsComponent
  ]
})
export class SharedModule { }
