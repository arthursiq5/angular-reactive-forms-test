import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      nome: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])],
      email: ['', Validators.compose([Validators.email])],
      cpf: ['', Validators.compose([
        Validators.required
      ])],
      nascimento: ['', Validators.compose([
        Validators.required
      ])],
      senha: ['', Validators.compose([
        Validators.required
      ])],
      confirmarSenha: ['', Validators.compose([
        Validators.required
      ])]
    });
  }
}
