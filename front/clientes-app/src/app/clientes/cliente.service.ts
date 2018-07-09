import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../login/auth.service'
//otra forma de castear dato "Cliente"
//import { map } from 'rxjs/operators';

@Injectable()
export class ClienteService {
  private urlEndPoint:string = 'http://localhost:8080/api/clientes';

  constructor(
    private http: HttpClient,
    private _auth : AuthService
  ) { }

  getClientes(): Observable<Cliente[]> {
    //envio con token Authorization, reemplazo de INTERCEPTORS
    //var token : string = this._auth.getToken()
    //var headers = new HttpHeaders({
    //  'Authorization': 'Bearer '+token
    //});
    //return this.http.get<Cliente[]>(this.urlEndPoint,{ headers: headers });

    return this.http.get<Cliente[]>(this.urlEndPoint);
    //return of(CLIENTES);
    //otra forma de castear dato "Cliente" usando "map"
    /*return this.http.get(this.urlEndPoint).pipe(
       map( response => response as Cliente[] )
    );*/
  }
}
