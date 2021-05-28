import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { User } from '../../classes/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users: User[] = [];
  form: FormGroup;
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

  validation() {
    if (!this.form.valid) {
      alert('Form not valid.');
    } else {
      let foundUser: User = undefined;
      this.users.find((user) => {
        if (
          user.name === this.form.value.username &&
          user.password === this.form.value.password
        ) {
          this.router.navigate(['/dashboard']);
          foundUser = user;
        }
      });
      if (foundUser === undefined) {
        alert('User not found.');
      }
    }
  }

  ngOnInit(): void {
    this.restService.getUsers().subscribe((users) => {
      for (const key in users) {
        const user: User = users[key];
        user.id = key;
        this.users.push(user);
      }
    });
  }
}
