import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API mockada para teste

  constructor(private http: HttpClient) {}

  // Método para enviar dados do usuário
  postUser(user: { nome: string; idade: number }): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  // Método para obter dados do usuário
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((users) =>
        users.map((user) => ({
          nome: user.name, // Nome do usuário retornado pela API
          email: user.email, // Email do usuário retornado pela API
         
        }))
      )
    );
  }
}
