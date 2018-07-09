import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(
    private clienteService: ClienteService,
    private _router : Router
  ) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes,
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 403){
            this._router.navigate(['/login'])
          }
        }
      }
    );
  }

  delete(cliente:Cliente):void{
    swal({
      title: 'Esta seguro?',
      text: `¿Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.clienteService.delete(cliente.id)
        .subscribe(
          res=>{
            //filtrar el cliente eliminado para q no se vea en pantall
            this.clientes = this.clientes.filter(cli => cli!=cliente)
            swal('Cliente eliminado!',`Cliente ${cliente.nombre} eliminado`,'success')
          }
        )
      }
    })
  }

}
