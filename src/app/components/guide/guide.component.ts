import { Component, OnInit } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.less'],
})
export class GuideComponent implements OnInit {
  guide = [
    {title: `Получай пассивный доход на торговле криптовалютой`, text: 'Зарабатывайте не выходя из дома и без специальных знаний Наш сервис предназначен для автоматической торговли криптовалютой и не требует многовремени для контроля и отслеживания работы', btnText: 'С чего начать?', img: './assets/images/guide-mobile-img.png'},
    {title: `1. Регистрация на QtCoin`, text: 'После успешной регистрации на сайте DataSignal вы получаете пояснительное электронное письмо , в котором будет содержаться ссылка на приложение QtCoin , установите приложение и создайте ваш личный аккаунт', btnText: 'Далее', img: './assets/images/guide-mobile-img.png'},
    {title: ` 2. Регистрация на Binance`, text: 'Установить приложение Binance и пройти верификацию для пополнения кошелька', btnText: 'Далее', img: './assets/images/step-2.png'},
    {title: `3. Покупка USDT`, text: 'На платформе Binance приобрести необходимое колличество токенов USDT TRC20 , переведите свои USDT токены на кошелек QtCoin', btnText: 'Далее', img: './assets/images/step-3.png'},
    {title: `4. Получайте сигналы`, text: 'Мы добавляем вас в приватный телеграмм-канал , где вы узнаете подробности проведения сделок  и получите подробные сигналы и инструкции', btnText: 'Окей', img: './assets/images/step-4.png'},
  ];

  constructor() {}

  ngOnInit(): void {   
  }

  next(e: NzCarouselComponent) {
    e.next()
  }
}
