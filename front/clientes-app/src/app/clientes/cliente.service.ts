import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//otra forma de castear dato "Cliente"
import { map } from 'rxjs/operators';

@Injectable()
export class ClienteService {
  private urlEndPoint:string = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    var headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJhdXRob3JpdGllcyI6Ilt7XCJhdXRob3JpdHlcIjpcIlJPTEVfVVNFUlwifV0iLCJzdWIiOiJhbmRyZXMiLCJpYXQiOjE1MzA5MTc1ODgsImV4cCI6MTUzMDkyMTE4OH0.CkDTxgEz8Pis81Sw5dtNYOOmxPvv4GKxwSoe2HT3d9nfpGV-zVkd-hxsNDGsHKT14B_xr0amtG_DkWJcbqyDKw'
    });
    return this.http.get<Cliente[]>(this.urlEndPoint,{ headers: headers });

    //return of(CLIENTES);
    //otra forma de castear dato "Cliente" usando "map"
    /*return this.http.get(this.urlEndPoint).pipe(
       map( response => response as Cliente[] )
    );*/
  }
}
