import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { RockBand } from '../../classes/rock-band';

@Component({
  selector: 'app-new-band',
  templateUrl: './new-band.component.html',
  styleUrls: ['./new-band.component.css'],
})
export class NewBandComponent implements OnInit {
  form: FormGroup;
  constructor(
    private restService: RestService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', Validators.required],
    });
  }

  createBand() {
    if (!this.form.valid) {
      alert('Form is not valid.');
    } else {
      let newBand: RockBand = new RockBand(
        this.form.value.name,
        this.form.value.description,
        this.form.value.url.replace('watch?v=', 'embed/')
      );
      console.log(newBand.videoUrl);
      this.restService.createRockBand(newBand).subscribe(() => {
        alert('New Band created.');
      });
    }
  }

  ngOnInit(): void {}
}
