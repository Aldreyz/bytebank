import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
//classe Service se conecta com o banco de dados/back-end através de URL
  private listaTransferencia: any [];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]>{
    // chamando url que acessa todas transferencias no banco.
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  adicionar(transferencia:any){
    this.hidratar(transferencia);

    this.listaTransferencia.push(transferencia);
    //transferencias vai adicionar atraves do metodo push um evento
  }

  private hidratar(transferencia:any){
    transferencia.data = new Date();
  }
}
