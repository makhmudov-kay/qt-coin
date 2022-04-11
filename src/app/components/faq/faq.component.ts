import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.less'],
})
export class FaqComponent implements OnInit {
  right = 'right'
  panels = [
    {
      name: 'faqFirstTitle',
      text: 'faqFirstText',
      active: false
    },
    {
      name: 'faqSecondtTitle',
      text: 'faqSecondtText',
      active: false
    },
    {
      name: 'faqThirdTitle',
      text: 'faqThirdText',
      active: false
    },
    {
      name: 'faqFourthTitle',
      text: 'faqFourthText',
      active: false
    },
    {
      name: 'faqFifthTitle',
      text: 'faqFifthText',
      active: false
    },
    {
      name: 'faqSixthTitle',
      text: 'faqSixthText',
      active: false
    },
    {
      name: 'faqSeventhTitle',
      text: 'faqSeventhText',
      active: false
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
