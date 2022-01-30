import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  form:FormGroup
  sexo: any[] = ['Masculino', 'Femenino'];
  constructor(private fb:FormBuilder,private usuarioService:UsuariosService,
    private router:Router,private _snackBar:MatSnackBar) { 
    this.form=this.fb.group({
      usuario:['',Validators.required],
      nombre:['',Validators.required],
      sexo:['',Validators.required],
      apellido:['',Validators.required],

    })
  }

  ngOnInit(): void {
  }
  agregarUsuario() {
    console.log(this.form.value);
    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellidos: this.form.value.apellido,
      sexo: this.form.value.sexo
    }
    console.log(user);
    this.usuarioService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuarios']);
    this._snackBar.open("Agregado correctamente", '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
