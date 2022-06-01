import {Component, OnInit} from '@angular/core';
import {Conta, Contas} from '../models/conta';
import {DialogService} from 'primeng/dynamicdialog';
import {ContaEditComponent} from 'src/app/shared/components/conta-edit/conta-edit.component';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contas: Contas;

  constructor(
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.contas = new Contas();
    this.contas.lista.push(new Conta('Cartão', 1000, new Date()));
  }

  ngOnInit(): void {
  }

  pagarConta(conta: Conta): void {
    this.confirmationService.confirm({
      message: 'Deseja pagar esta conta?',
      header: 'Pagamento',
      closeOnEscape: true,
      blockScroll: true,
      acceptButtonStyleClass: 'p-button-success',
      rejectButtonStyleClass: 'p-button-outlined p-button-secondary',
      accept: () => {
        conta.pagar();
        this.messageService.add({severity:'success', summary:'Sucesso', detail:'Pagamento efetuado.', life: 2000});
      }
    });
  }

  removerConta(index: number): void {
    this.confirmationService.confirm({
      message: 'Deseja excluir esta conta?',
      header: 'Atenção',
      closeOnEscape: true,
      blockScroll: true,
      acceptLabel: 'Sim, Excluir',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-outlined p-button-secondary',
      accept: () => {
        this.contas.remove(index);
        this.messageService.add({severity:'success', summary:'Sucesso', detail:'Conta removida.', life: 2000});
      }
    });
  }

  addConta(): void {
    const ref = this.dialogService.open(ContaEditComponent, {
      header: 'Adicionar nova conta',
      width: '70%'
    });

    ref.onClose.subscribe(
      res => {
        if (res) {
          const conta: Conta = new Conta(res.nome as string, res.valor as number, res.vencimento as Date);
          this.contas.add(conta);
          this.messageService.add({severity:'success', summary:'Sucesso', detail:'Conta adicionada.', life: 2000});
        }
      }
    );
  }

  editarConta(conta: Conta): void {
    const ref = this.dialogService.open(ContaEditComponent, {
      data: {
        conta: conta
      },
      header: 'Editar conta',
      width: '70%'
    });

    ref.onClose.subscribe(
      res => {
        if (res) {
          conta.nome = res.nome as string;
          conta.valor = res.valor as number;
          conta.vencimento = res.vencimento as Date;
          conta.pago = res.pago as boolean;
          if (res.pago === true) {
            conta.pagar(res.valorPagamento);
          } else {
            conta.extornar();
          }
        }
      }
    );
  }
}
