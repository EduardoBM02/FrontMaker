import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { User } from '../../_models/user';

@Component({
  selector: 'app-usuario',
  standalone: false,

  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {

  mostrarDados = false;

  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializateForm();
  }

  initializateForm() {
    this.userForm = this.fb.group({
      nome: ['', Validators.required],
      idade: [null, [Validators.required, Validators.min(0)]]
    });
  }

  user = {
    nome: '',
    idade: null
  }

  submitForm() {
    if (this.userForm.valid){
      this.user = this.userForm.value;
      this.userForm.reset;
    }
    this.mostrarDados=true;
    this.userForm.reset();
  }

}
