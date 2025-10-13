import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  imports: [IonicModule, CommonModule]
})
export class Tab2Page {
  datosPersonales = {
    nombre: 'Jose Alejandro Pila Vizuete',
    profesion: 'Desarrollador de Software',
    telefono: '0963289100',
    correo: 'josealejandro_pilavizuete@hotmail.com',
    direccion: 'Quito, Ecuador',
    edad: '27' 
  }
    perfil = 'Desarrollador de software con 2 años de experiencia en el desarrollo de aplicaciones móviles y web. Enfocado en crear soluciones eficientes y escalables con tecnologías modernas. Busco seguir creciendo profesionalmente en el área de desarrollo multiplataforma.';
    formacion = [
      {
        titulo: 'Bachiller en Ciencias',
        institucion: 'Unidad Educativa Nacional',
        fechas: '2008 - 2015'
      },
      {
        titulo: 'Ingeniería en Computación',
        institucion: 'Escuela Politécnica Nacional',
        fechas: '2017 - 2021'
      },
      {
        titulo: 'Tecnología en Desarrollo de Software',
        institucion: 'Escuela Politécnica Nacional',
        fechas: '2024 - Presente'
      }
  ];
  habilidadesTecnicas = ['Ionic', 'Angular', 'TypeScript', 'Firebase', 'HTML', 'CSS', 'Git'];
  habilidadesBlandas = ['Trabajo en equipo', 'Comunicación', 'Adaptabilidad', 'Responsabilidad'];
  idiomas = ['Español (Nativo)', 'Inglés (Intermedio)'];
}
