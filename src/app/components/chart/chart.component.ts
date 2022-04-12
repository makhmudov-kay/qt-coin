import { Component, OnInit } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { BinanceService } from 'src/app/services/binance.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {
  array = [1, 2, 3, 4];
  cryptoInfo = [
    { symbol: 'BTC', price: '', logo: './assets/images/btc.png', tag: 'BITCOIN', percent: '1.41'},
    { symbol: 'ETH', price: '', logo: './assets/images/eth.png', tag: 'ETHEREUM', percent: '2.22' },
    { symbol: 'BNB', price: '', logo: './assets/images/bnb.png', tag: 'BINANCE', percent: '0.82' },
    { symbol: 'USDT', price: '1.00', logo: './assets/images/usdt.png', tag: 'TETHER', percent: '0,03' },
  ]

  constructor(private binanceService: BinanceService) { }

  ngOnInit(): void {
    this.binanceService.getBtcPrice().subscribe((response) => {
      for (let i = 0; i < this.cryptoInfo.length; i++) {
        if (this.cryptoInfo[i].symbol === 'BTC') {
          this.cryptoInfo[i].price = response.price;
        }
      }
    });
    this.binanceService.getEtheriumPrice().subscribe((response) => {
      for (let i = 0; i < this.cryptoInfo.length; i++) {
        if (this.cryptoInfo[i].symbol === 'ETH') {
          this.cryptoInfo[i].price = response.price;
        }
      }
    });
    this.binanceService.getBnbPrice().subscribe((response) => {
      for (let i = 0; i < this.cryptoInfo.length; i++) {
        if (this.cryptoInfo[i].symbol === 'BNB') {
          this.cryptoInfo[i].price = response.price;
        }
      }
    });
    this.getCryptoInfo();
  }

  getCryptoInfo() {
    setTimeout(() => {
      this.binanceService.getBtcPrice().subscribe((response) => {
        for (let i = 0; i < this.cryptoInfo.length; i++) {
          if (this.cryptoInfo[i].symbol === 'BTC') {
            this.cryptoInfo[i].price = response.price;
          }
        }
      });
      this.binanceService.getEtheriumPrice().subscribe((response) => {
        for (let i = 0; i < this.cryptoInfo.length; i++) {
          if (this.cryptoInfo[i].symbol === 'ETH') {
            this.cryptoInfo[i].price = response.price;
          }
        }
      });
      this.binanceService.getBnbPrice().subscribe((response) => {
        for (let i = 0; i < this.cryptoInfo.length; i++) {
          if (this.cryptoInfo[i].symbol === 'BNB') {
            this.cryptoInfo[i].price = response.price;
          }
        }
      });
      this.getCryptoInfo();
    }, 5000);
  }

  pre(e: NzCarouselComponent) {
    e.pre()
  }
  next(e: NzCarouselComponent) {
    e.next()
  }
}
