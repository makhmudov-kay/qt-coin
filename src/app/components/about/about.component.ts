import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
})
export class AboutComponent implements OnInit {
  get currentLang(): string | null {
    return localStorage.getItem('lang');
  }
  constructor() {}

  ngOnInit(): void {}
}
