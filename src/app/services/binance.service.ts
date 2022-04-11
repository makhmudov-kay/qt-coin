import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Crypto {
  price: string;
  symbol: string;
  logo: string;
  tag: string;
  percent: string
}

@Injectable({
  providedIn: 'root',
})
export class BinanceService {
  constructor(private http: HttpClient) {}

  getBtcPrice(): Observable<Crypto> {
    return this.http.get<Crypto>(
      'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'
    );
  }

  getEtheriumPrice(): Observable<Crypto> {
    return this.http.get<Crypto>(
      'https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT'
    );
  }

  getBnbPrice(): Observable<Crypto> {
    return this.http.get<Crypto>(
      'https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT'
    );
  }
}