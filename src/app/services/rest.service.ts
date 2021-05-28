import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user';
import { RockBand } from '../classes/rock-band';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(
      'https://ejerciciofrontendkubiude-default-rtdb.europe-west1.firebasedatabase.app/users.json'
    );
  }
  getRockBands(): Observable<RockBand[]> {
    return this.http.get<RockBand[]>(
      'https://ejerciciofrontendkubiude-default-rtdb.europe-west1.firebasedatabase.app/rockBands.json'
    );
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(
      'https://ejerciciofrontendkubiude-default-rtdb.europe-west1.firebasedatabase.app/users.json',
      user
    );
  }
  createRockBand(band: RockBand): Observable<RockBand> {
    return this.http.post<RockBand>(
      'https://ejerciciofrontendkubiude-default-rtdb.europe-west1.firebasedatabase.app/rockBands.json',
      band
    );
  }
}
