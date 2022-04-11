import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.less']
})
export class SafetyComponent implements OnInit {

  safety = [
    {title: 'safetyBlockOneTitle', text: 'safetyBlockOneText'},
    {title: 'safetyBlockTwoTitle', text: 'safetyBlockTwoText'},
    {title: 'safetyBlockThreeTitle', text: 'safetyBlockThreeText'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
