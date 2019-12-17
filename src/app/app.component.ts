import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder){ }

  ngOnInit(){
    this.criarFormulario();
  }

  enviarDados(){
    console.log(this.formulario.value);
  }

  criarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [''],
      email: [''],
      cpf: [''],
      nascimento: [''],
      senha: [''],
      confirmarSenha: ['']
    });
  }
}
