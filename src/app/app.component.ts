import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  size: NzButtonSize = 'large'
  isVisibleCalculate = true;
  value1 = 30;

  constructor() {}

  showModalCalc(): void {
    this.isVisibleCalculate = true;
  }

  handleOkCalc(): void {
    console.log('Button ok clicked!');
    this.isVisibleCalculate = false;
  }

  handleCancelCalc(): void {
    console.log('Button cancel clicked!');
    this.isVisibleCalculate = false;
  }
}
