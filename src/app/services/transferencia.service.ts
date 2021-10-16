import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
//classe Service se conecta com o banco de dados/back-end através de URL
  private listaTransferencia: any [];

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
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
