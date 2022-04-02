import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.less']
})
export class SafetyComponent implements OnInit {

  safety = [
    {title: 'Гарантия безопасности', text: 'QtCoin использует самые современные протоколы безопасности на рынке'},
    {title: 'Активы застрахованы', text: 'Биржа QtCoin ведет свою деятельность в Японии, Южной Корее , обладет высоким кредитом доверия и славится своей надежностью'},
    {title: 'Открытое общение с клиентом', text: 'Комманда DataSignal  даст вам точные инструкции и научит торговать криптовалютой и грамотно инвестировать.  Мы здесь чтобы отвечать на ваши вопросы и решать ваши проблемы'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
