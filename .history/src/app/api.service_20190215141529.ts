import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResultModel} from './model/LoginResultModel'
import { DashBoardResultModel} from './model/DashBoardResultModel'
import { identifierModuleUrl } from '@angular/compiler';
import {CoinMarketCap} from '../app/model/coinmarketcap';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // coinMarketCapData : CoinMarketCap[]=[];
  constructor(private http: HttpClient) {

  }

  login(email: string, password: string): Observable<LoginResultModel>{
    return this.http.post<LoginResultModel>('https://reqres.in/api/login', {
      email: email,
      password: password
    });
  }

//   dashboard(id: String, name: string, symbol: String,  rank: number, last_updated: number): Observable<DashBoardResultModel>{
//   return this.http.post<DashBoardResultModel>(' https://api.coinmarketcap.com/v1/ticker/',{
//     id: id,
//     name: name,
//     rank: rank,
//     last_updated: last_updated
    
// });
// }

// The below method will call the API and return the comin Market Cap data in the form of an array(Asynchronous Call).

  GetCoinMarketCapData(): Observable<CoinMarketCap[]>
  {
    console.log("Inside service");

    // return this.http.get<CoinMarketCap[]>('https://api.coinmarketcap.com/v1/ticker/');
      //'https://api.coinmarketcap.com/v1/ticker/');

  }



}