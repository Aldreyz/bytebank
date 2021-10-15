import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  //input permite que uma propriedade seja criada para o app-extrato
  @Input() transferencias:any[];

  constructor() { }

  ngOnInit(): void {
  }

}
