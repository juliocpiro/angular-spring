import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service'

@Component({
  selector : 'app-header',
  templateUrl : './header.component.html'
})
export class HeaderComponent{
  title : string = 'App Angular'
  mostrarMenu : boolean = false

  constructor(
    private _authService : AuthService
  ){}

}
