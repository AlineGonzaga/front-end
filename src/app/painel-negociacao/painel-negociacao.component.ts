import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../reserva.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {

  reserva = {};
  reservas = [];

  constructor(
    private reservaService: ReservaService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.reservaService.listar()
    .subscribe(resposta => this.reservas = <any> resposta)
  }

  adicionar() {
    this.reservaService.adicionar(this.reserva).subscribe(() => {
        this.reserva = {};
        this.consultar();

        this.messageService.add({
          severity:'success',
          summary:'Reserva adicionada com sucesso'
        });

    }, resposta => {
      let msg = 'Erro inesperado. Tente novamente.';

      //if(resposta.error.message) {
        //  msg = resposta.error.message;
      //}

      this.messageService.add({
        severity:'error',
        summary:msg
      });
    }
    );
  }
}
