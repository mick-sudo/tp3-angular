import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  users: any[] = [{
    "nom": "wesker",
    "prenom": "albert",
    "email": "wa@stars.com",
    "entreprise": "umbrella",
    "telephone": "09770087"
  }]

  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  user: FormGroup = this.formBuilder.group({
    nom: ['', Validators.minLength(2)],
    prenom: ['', Validators.minLength(2)],
    email: ['', Validators.email],
    entreprise: ['', Validators.minLength(2)],
    telephone: ['', Validators.minLength(10)]
  })

  ngOnInit(): void {
  }

  addUser() {
    this.users.push(this.user.value)
    this.user.reset();
  }

  get form() {
    return this.user.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.user.valid) {
      this.addUser()
    } else {
      console.log('Formulaire invalide')
    }
  }
}
