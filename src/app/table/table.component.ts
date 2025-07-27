import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Lugar {
  nombre: string;
  ciudad: string;
  pais: string;
  precio: number;
  imagen: string;
  descripcion: string;
}

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  lugares: Lugar[] = [
    {
      nombre: 'Lahaina',
      ciudad: 'HI',
      pais: 'Estados Unidos',
      precio: 595,
      imagen: 'assets/images/lahaina.jpg',
      descripcion: 'Hermosa casa en la playa con vista al mar y todas las comodidades.'
    },
    {
      nombre: 'Montréal',
      ciudad: 'QC',
      pais: 'Canadá',
      precio: 30,
      imagen: 'assets/images/montreal.jpg',
      descripcion: 'Habitación privada en el centro de Montreal, cerca del metro.'
    },
    {
      nombre: 'Porto',
      ciudad: 'Porto',
      pais: 'Portugal',
      precio: 65,
      imagen: 'assets/images/porto.jpg',
      descripcion: 'Apartamento moderno en el corazón de Porto.'
    },
    {
      nombre: 'Brooklyn',
      ciudad: 'NY',
      pais: 'Estados Unidos',
      precio: 79,
      imagen: 'assets/images/brooklyn.jpg',
      descripcion: 'Departamento entero en Brooklyn, ideal para familias.'
    },
    {
      nombre: 'Bogotá',
      ciudad: 'Bogotá',
      pais: 'Colomobia',
      precio: 70,
      imagen: 'assets/images/bogota.jpg',
      descripcion: 'Apartamento moderno en el centro de Bogotá.'
    },
    {
      nombre: 'Kyoto',
      ciudad: 'Kyoto',
      pais: 'Japón',
      precio: 120,
      imagen: 'assets/images/kyoto.jpg',
      descripcion: 'Casa tradicional japonesa cerca de templos y jardines.'
    },
    {
      nombre: 'Cape Town',
      ciudad: 'Western Cape',
      pais: 'Sudáfrica',
      precio: 85,
      imagen: 'assets/images/capetown.jpg',
      descripcion: 'Apartamento con vista a la montaña y cerca de la playa.'
    },
    {
      nombre: 'Barcelona',
      ciudad: 'Barcelona',
      pais: 'España',
      precio: 95,
      imagen: 'assets/images/barcelona.jpg',
      descripcion: 'Piso céntrico con terraza y excelente ubicación.'
    },
    {
      nombre: 'Sydney',
      ciudad: 'NSW',
      pais: 'Australia',
      precio: 110,
      imagen: 'assets/images/sydney.jpg',
      descripcion: 'Departamento moderno cerca de la Ópera y el puerto.'
    },
    {
      nombre: 'Mendoza',
      ciudad: 'Mendoza',
      pais: 'Argentina',
      precio: 60,
      imagen: 'assets/images/mendoza.jpg',
      descripcion: 'Cabaña en viñedo con vistas a la cordillera de los Andes.'
    }
  ];

  lugarSeleccionado: Lugar | null = null;

  abrirMenuLugar(lugar: Lugar) {
    this.lugarSeleccionado = lugar;
  }

  cerrarMenuLugar() {
    this.lugarSeleccionado = null;
  }
}
