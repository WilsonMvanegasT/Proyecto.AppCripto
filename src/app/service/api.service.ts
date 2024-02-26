import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private urlapi ='https://api.coinlore.net/api/ticker/?id=';
  private urlapi='https://localhost:7008/api/ConsultarTicker/IdTicker?id='
  //private urapiall='https://api.coinlore.net/api/tickers/?start=0&limit=6';
  private urapiall='https://localhost:7008/api/ConsultasCryptos/Tickers';

  constructor(private http: HttpClient) { }

  public getDataCoin(idCon: any): Observable<any> {
    const body={
    };
    return this.http.post(this.urlapi + idCon, body);
  }

  public getDataAllCoin(): Observable<any> {            
     const body={
     };
     return this.http.post(this.urapiall, body);
    //return this.http.get(this.urapiall);
  }

}
