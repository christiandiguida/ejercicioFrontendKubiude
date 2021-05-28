import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/classes/user';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  form: FormGroup;
  newUser: User;
  constructor(
    private restService: RestService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  createUser() {
    this.newUser = {
      name: this.form.value.username,
      password: this.form.value.password,
    };
    this.restService.createUser(this.newUser).subscribe(() => {
      alert('User created.');
      this.router.navigate(['/login']);
    });
  }

  ngOnInit(): void {}
}
