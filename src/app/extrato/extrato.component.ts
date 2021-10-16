import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  //input permite que uma propriedade seja criada para o app-extrato
  transferencias:any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    /*faz chamada para o banco de dados (db.json) atraves da url
      http://localhost:3000/transferencias, que retorna a lista de transferencias
      a ser mostrada na tela.
    */
    this.service.todas().subscribe((transferencias : Transferencia[])=>{
      console.table(transferencias);

      // colocando transferencias que chegou do json para minha variavel a ser mostrada na tela.
      this.transferencias = transferencias;
    });
  }

}
