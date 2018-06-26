import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//otra forma de castear dato "Cliente"
import { map } from 'rxjs/operators';

@Injectable()
export class ClienteService {
  private urlEndPoint:string = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    //return of(CLIENTES);

    //return this.http.get<Cliente[]>(this.urlEndPoint);
    //otra forma de castear dato "Cliente"
    return this.http.get(this.urlEndPoint).pipe(
       map( response => response as Cliente[] )
    );
  }
}