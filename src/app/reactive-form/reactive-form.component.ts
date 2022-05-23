import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  formEstudiante: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formEstudiante=this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', Validators.required],
      period: ['', Validators.required]
    })
  }
  submit(){
    console.log(this.formEstudiante.value);
  }
}
