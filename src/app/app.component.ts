import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Validacoes } from './Validacoes';
import { Usuario } from './usuario';

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

  enviarDados() {
    if(!this.formulario.valid)
      return;

    const dadosFormulario = this.formulario.value;

    const usuario = new Usuario(
      dadosFormulario.nome,
      dadosFormulario.email,
      dadosFormulario.cpf,
      dadosFormulario.nascimento,
      dadosFormulario.senha
    );

    alert(`O usuário ${usuario.nome} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(usuario)}`);

    this.formulario.reset();
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
      validators: Validacoes.SenhasCombinam,
      updateOn: 'submit'
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
