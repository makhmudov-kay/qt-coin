import { Component, OnInit } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.less'],
})
export class GuideComponent implements OnInit {
  guide = [
    {title: `passiveProfit`, text: 'stepFirstText', btnText: 'stepFirstBtn', img: './assets/images/guide-mobile-img.png'},
    {title: `registered`, text: 'stepSecondText', btnText: 'stepSecondBtn', img: './assets/images/guide-mobile-img.png'},
    {title: `registered2`, text: 'stepThirdText', btnText: 'stepSecondBtn', img: './assets/images/step-2.png'},
    {title: `buy`, text: 'stepFourthText', btnText: 'stepSecondBtn', img: './assets/images/step-3.png'},
    {title: `getStepFifthTitle`, text: 'getStepFifthText', btnText: 'ok', img: './assets/images/step-4.png'},
  ];

  constructor() {}

  ngOnInit(): void {   
  }

  next(e: NzCarouselComponent) {
    e.next()
  }
}
