import { Component, OnInit } from '@angular/core';
import { nodeLib } from '@all-libs/node-lib';

@Component({
  selector: 'all-libs-ng-lib',
  templateUrl: './ng-lib.component.html',
  styleUrls: ['./ng-lib.component.css'],
})
export class NgLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    nodeLib();
  }
}
