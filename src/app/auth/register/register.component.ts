import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/providers/firebase.service';
import { IRegister } from 'src/models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup = Object.create(null);

  email: string = '';
  msg = '';
  error = false;
  recuerdame = false;
  authService: any;

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      email: [this.email, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required]
    });

  }

  register() {

    const registerData: IRegister = {
      nombre: 'Gabriel Julián',
      email: 'gjulian@gmail.com',
      password: '123456'
    }

    console.log(registerData);
    this.firebaseService.register(registerData)
        .then((userCredential) => {
          // Signed in 
          console.log(userCredential);

          // añadimos el nombre de usuario en el usuario de google

          // Realizamos login 

        
        })
        .catch((error) => {
          console.log(error);
          const errorCode = error.code;
          console.log(errorCode);
          const errorMessage = error.message;
          console.log(errorMessage);
        }); 
  }


  

}


