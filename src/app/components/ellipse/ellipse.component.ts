import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ellipse',
  templateUrl: './ellipse.component.html',
  styleUrls: ['./ellipse.component.less']
})
export class EllipseComponent implements OnInit {
  @Input() width = '1089';
  @Input() height = '1089';

  @Input() widthBg = '1180px'
  @Input() heightBg = '1180px'
  
  constructor() { }

  ngOnInit(): void {
  }

}
