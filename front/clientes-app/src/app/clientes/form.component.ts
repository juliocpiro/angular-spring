import { Component, OnInit } from '@angular/core'
import { Cliente } from './cliente'
import { ClienteService } from './cliente.service'
import { Router, ActivatedRoute } from '@angular/router'
//sweetalert2 instalado con --save (npm install sweetalert2 --save) para q se almacene en package.json
import swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente();
  private titulo:string = "Crear Cliente";

  constructor(
    private _clienteService : ClienteService,
    private _router : Router,
    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.cargarCliente()
  }

  cargarCliente():void{
    this._activatedRoute.params.subscribe(
      params =>{
        let id = params['id']
        if(id){
          this._clienteService.getCliente(id)
          .subscribe(
            cliente => this.cliente = cliente
          )
        }
      }
    )
  }

  create():void{
    this._clienteService.create(this.cliente)
    .subscribe(
      cliente => {
        this._router.navigate(['/clientes'])
        swal('Nuevo cliente',`Cliente ${cliente.nombre} creado con éxito`, 'success')
      }
    )
  }

  update():void{
    this._clienteService.update(this.cliente)
    .subscribe(cliente=>{
      this._router.navigate(['/clientes'])
      swal('Cliente Actualizado',`Cliente ${cliente.nombre} actualizado con éxito`, 'success')
    })
  }
}
