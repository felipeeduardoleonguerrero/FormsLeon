import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormularioUnoComponent } from './formulario-uno/formulario-uno.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FormsLeon';
  @ViewChild('myTestComponent') myTestComponent:FormularioUnoComponent;
  probarTestComponent(){
    console.log(this.myTestComponent);
  }
}
