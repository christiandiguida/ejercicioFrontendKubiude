import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RockBand } from 'src/app/classes/rock-band';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  rockBands: RockBand[] = [];

  constructor(
    private restService: RestService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.restService.getRockBands().subscribe((rockBands) => {
      for (const key in rockBands) {
        const band = rockBands[key];
        band.id = key;
        this.rockBands.push(band);
        for (let i = 0; i < this.rockBands.length; i++) {
          const band = this.rockBands[i];
          this.sanitizer.bypassSecurityTrustResourceUrl(band.videoUrl);
        }
        // this.rockBands.forEach((band) => {
        //   this.sanitizer.bypassSecurityTrustResourceUrl(band.videoUrl);
        // });
      }
    });
  }
}
