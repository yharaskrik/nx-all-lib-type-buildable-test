import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgLib2Component } from './ng-lib2/ng-lib2.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgLib2Component],
  exports: [NgLib2Component],
})
export class NgLib2Module {}
