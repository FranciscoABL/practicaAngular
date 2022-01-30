import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  listaUsuarios: Usuario[] = []
  displayedColumns: string[] = ['usuario', 'nombre', 'sexo', 'apellidos','acciones'];
  dataSource!:MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private usuariosService:UsuariosService, private _snackBar: MatSnackBar) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  cargarUsuarios(){
    this.listaUsuarios=this.usuariosService.getUsuarios();
    this.dataSource=new MatTableDataSource(this.listaUsuarios);
  }
  ngOnInit(): void {
    this.cargarUsuarios();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  eliminarusuario(index:number){
    
    console.log(index);
    this.usuariosService.eliminarUsuario(index);
    this.cargarUsuarios();
    this._snackBar.open("Eliminado", '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
