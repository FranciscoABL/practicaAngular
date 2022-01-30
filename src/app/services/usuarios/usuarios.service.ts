import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  listaUsuarios: Usuario[] = [
    {usuario: "Paco", nombre: 'Francisco Antonio', sexo: 'M', apellidos: 'Barraza Lugo'},
    {usuario: "Tony", nombre: 'Antonio', sexo: 'M', apellidos: 'Valenzuela'},
    {usuario: "Pepe", nombre: 'Pepe', sexo: 'M', apellidos: 'Lopez Lugo'},
    ];
  constructor() { }
  getUsuarios(){
    return this.listaUsuarios.slice();
  }
  eliminarUsuario(index:number){
    this.listaUsuarios.slice(index,1)
    console.log(this.listaUsuarios);
  }
  agregarUsuario(user:Usuario){
    this.listaUsuarios.unshift(user);
  }
}
