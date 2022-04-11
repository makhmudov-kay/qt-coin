import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.less']
})
export class AdvantagesComponent implements OnInit {
  cards = [
    {title: 'advCardOneTitle', text: 'advCardOneText', icon: '../../../assets/images/adv-1.svg'},
    {title: 'advCardTwoTitle', text: 'advCardTwoText', icon: '../../../assets/images/adv-2.svg'},
    {title: 'advCardThreeTitle', text: 'advCardThreeText', icon: '../../../assets/images/adv-3.svg'},
    {title: 'advCardFourTitle', text: 'advCardFourText', icon: '../../../assets/images/adv-4.svg'},
    {title: 'advCardFiveTitle', text: 'advCardFiveText', icon: '../../../assets/images/adv-5.svg'},
    {title: 'advCardSizTitle', text: 'advCardSixText', icon: '../../../assets/images/adv-6.svg'},
    {title: 'advCardSevenTitle', text: 'advCardSevenText', icon: '../../../assets/images/adv-7.svg'},
    {title: 'advCardEightTitle', text: 'advCardEightText', icon: '../../../assets/images/adv-8.svg'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
