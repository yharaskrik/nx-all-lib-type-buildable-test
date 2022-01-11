import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { nodeLib } from '@all-libs/node-lib';
import { NgLibComponent } from './ng-lib/ng-lib.component';
import { NgLib2Module } from '@all-libs/ng-lib2';

@NgModule({
  imports: [CommonModule, NgLib2Module],
  declarations: [NgLibComponent],
})
export class NgLibModule {}
