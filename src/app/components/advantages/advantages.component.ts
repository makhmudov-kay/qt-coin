import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.less']
})
export class AdvantagesComponent implements OnInit {
  cards = [
    {title: 'Доступность', text: 'Чтобы начать торговать на QtCoin  вам не нужно быть брокером с многолетним опытом, с нами инвестировать может каждый', icon: '../../../assets/images/adv-1.svg'},
    {title: 'Конфиденциальность ', text: 'Ваши данные остаются под надежной защитой и не подлежат разглашению', icon: '../../../assets/images/adv-2.svg'},
    {title: 'Простота и удобство использования', text: 'Простая и удобная эргономика приложения поможет вам с легкостью совершать сделки', icon: '../../../assets/images/adv-3.svg'},
    {title: 'Эффективность и скорость работы', text: 'Наша быстрая и качественная работа – ваши высокие доходы', icon: '../../../assets/images/adv-4.svg'},
    {title: 'Инновации', text: 'Мы не стоим на месте . Инновационные идеи и самое современное аналитическое оборудование -основные элементы нашей компании', icon: '../../../assets/images/adv-5.svg'},
    {title: 'Поддержка клиента', text: 'Мы полностью сосредоточены на решении задач и удовлетворении потребностей наших клиентов', icon: '../../../assets/images/adv-6.svg'},
    {title: 'Прозрачность', text: 'Наша система полностью прозрачна , каждый пользователь имеет самую полную информацию о своих доходах и расходах', icon: '../../../assets/images/adv-7.svg'},
    {title: 'Лучшие специалисты', text: 'Комманда QtCoin насчитывает десятки лучших IT-специалистов со всего мира', icon: '../../../assets/images/adv-8.svg'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
