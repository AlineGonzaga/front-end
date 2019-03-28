import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  apiUrl = 'http://localhost:8080/reservas';

  constructor(private httpclient: HttpClient) { }

  listar() {
    return this.httpclient.get(this.apiUrl);
  }

  adicionar(reserva : any) {
   return this.httpclient.post(this.apiUrl, reserva);
  }
}
