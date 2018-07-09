import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../login/auth.service';
//otra forma de castear dato "Cliente"
//import { map } from 'rxjs/operators';

@Injectable()
export class ClienteService {
  private urlEndPoint:string = 'http://localhost:8080/api/clientes'
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(
    private _http: HttpClient,
    private _auth : AuthService
  ) { }

  getClientes(): Observable<Cliente[]> {
    //envio con token Authorization, reemplazo de INTERCEPTORS
    //var token : string = this._auth.getToken()
    //var headers = new HttpHeaders({'Authorization': 'Bearer '+token});
    //return this._http.get<Cliente[]>(this.urlEndPoint,{ headers: headers });

    return this._http.get<Cliente[]>(this.urlEndPoint);
    //return of(CLIENTES);
    //otra forma de castear dato "Cliente" usando "map"
    /*return this.http.get(this.urlEndPoint).pipe(
       map( response => response as Cliente[] )
    );*/
  }

  create(cliente : Cliente) : Observable<Cliente>{
    return this._http.post<Cliente>(this.urlEndPoint,cliente,{headers : this.httpHeaders})
  }

  getCliente(id): Observable<Cliente>{
    return this._http.get<Cliente>(`${this.urlEndPoint}/${id}`)
  }

  update(cliente : Cliente) : Observable<Cliente>{
    return this._http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`,cliente,{headers : this.httpHeaders})
  }

  delete(id:number): Observable<Cliente>{
    return this._http.delete<Cliente>(`${this.urlEndPoint}/${id}`,{headers : this.httpHeaders})
  }
}
