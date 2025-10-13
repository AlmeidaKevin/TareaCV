import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  imports: [IonicModule, CommonModule]
})
export class Tab1Page {
  datosPersonales = {
    nombre: 'Kevin Almeida Fernando Arreaga',
    profesion: 'Desarrollador de Software',
    telefono: '0990653955',
    correo: 'kevinalmeida783@gmail.com',
    direccion: 'Quito, Ecuador',
    edad: '21' 
  }
    perfil = 'Estudiante en el último semestre de la carrera de Tecnología en Desarrollo de Software, con conocimientos en desarrollo web, bases de datos y metodologías ágiles. Apasionado por la tecnología, el aprendizaje continuo y la creación de soluciones prácticas.';
    formacion = [
      {
        titulo: 'Bachiller en Ciencias',
        institucion: 'Unidad Educativa Augusto Arias',
        fechas: '2018 - 2021'
      },
      {
        titulo: 'Tecnología en Desarrollo de Software',
        institucion: 'Escuela Politécnica Nacional',
        fechas: '2025 - Presente'
      }
  ];
  habilidadesTecnicas = ['Ionic', 'Angular', 'TypeScript', 'Firebase', 'HTML', 'CSS', 'Git'];
  habilidadesBlandas = ['Trabajo en equipo', 'Comunicación', 'Adaptabilidad', 'Responsabilidad'];
  idiomas = ['Español (Nativo)', 'Inglés (Intermedio)'];
}
