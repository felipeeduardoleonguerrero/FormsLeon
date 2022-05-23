import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-uno',
  templateUrl: './formulario-uno.component.html',
  styleUrls: ['./formulario-uno.component.scss']
})
export class FormularioUnoComponent implements OnInit {
  formularioContacto: FormGroup;
  @ViewChild('myTestDiv') myTestDiv:ElementRef;
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.formularioContacto=this.fb.group({
      name: ['Felipe', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.email],  
      message: ['Hallo', Validators.maxLength(15)]
    })
  }
submit(){
  /*console.log(this.formularioContacto.value);*/
  /*debugger;*/
  console.log(this.myTestDiv.nativeElement);
}
}
