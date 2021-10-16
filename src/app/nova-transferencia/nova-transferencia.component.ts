import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
    selector: 'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

    valor:number;
    destino:number;

    constructor(private service : TransferenciaService){}

    transferir(){
      console.log('Solicitar nova transfêrencia');

      const valorEmitir: Transferencia = {valor: this.valor,destino: this.destino};

      this.service.adicionar(valorEmitir)
        .subscribe(resultado =>{
          console.log(resultado);
          this.limparCampo();
        },
      error => console.error(error));
    }
     limparCampo(){
       this.valor = 0;
       this.destino = 0;
     }
}
