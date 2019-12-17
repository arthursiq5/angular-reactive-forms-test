import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Validacoes } from './Validacoes';

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
        Validators.required,
        Validacoes.ValidaCpf
      ])],
      nascimento: ['', Validators.compose([
        Validators.required,
        Validacoes.MaiorQue18Anos
      ])],
      senha: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])],
      confirmarSenha: ['', Validators.compose([
        Validators.required
      ])]
    }, {
      validators: Validacoes.SenhasCombinam
    });
  }

  get nome() {
    return this.formulario.get('nome');
  }

  get email() {
    return this.formulario.get('email');
  }

  get cpf() {
    return this.formulario.get('cpf');
  }

  get nascimento() {
    return this.formulario.get('nascimento');
  }

  get senha() {
    return this.formulario.get('senha');
  }

  get confirmarSenha() {
    return this.formulario.get('confirmarSenha');
  }
}
