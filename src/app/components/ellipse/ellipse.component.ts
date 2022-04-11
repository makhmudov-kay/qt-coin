import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ellipse',
  templateUrl: './ellipse.component.html',
  styleUrls: ['./ellipse.component.less']
})
export class EllipseComponent implements OnInit {
  @Input() banner!: boolean;
  @Input() about!: boolean;
  @Input() chain!: boolean;
  @Input() modal!: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
