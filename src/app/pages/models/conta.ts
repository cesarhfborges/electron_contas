class Conta {
  nome: string | undefined;
  valor: number;
  vencimento: Date;
  pago: boolean = false;
  dataPagamento!: Date;
  valorPagamento: number = 0;

  constructor(nome:string, valor: number, vencimento: Date, pago?: boolean) {
    this.nome = nome;
    this.valor = valor;
    this.vencimento = vencimento;
    this.pago = pago ?? false;
  }

  get statusPagamento(): string {
    const v: number = this.valorPago;
    if (v === 0) {
      return 'success';
    } else if (v > 0) {
      return 'warning';
    } else if (v < 0) {
      return 'info';
    }
    return 'danger';
  }

  get valorPago(): number {
    return (this.valor ?? 0) - (this.valorPagamento ?? 0);
  }

  pagar(valorPagamento?: number, dataPagamento?: Date): void {
    this.valorPagamento = valorPagamento ?? this.valor;
    this.dataPagamento = dataPagamento ?? new Date();
    this.pago = true;
  }

  extornar(): void {
    this.valorPagamento = 0;
    this.pago = false;
  }
}

class Contas {
  lista: Conta[];

  constructor() {
    this.lista = [];
  }

  get aPagar(): number {
    return this.lista.map(conta => conta.valorPago).reduce((a, b) => a + b, 0);
  }

  get pago(): number {
    return this.lista.filter(conta => conta.pago).map(conta => conta.valor ?? 0).reduce((a, b) => a + b, 0);
  }

  get total(): number {
    return this.lista.map(conta => conta.valor ?? 0).reduce((a, b) => a + b, 0);
  }

  add(conta: Conta): void {
    this.lista.push(conta);
  }

  remove(index: number): void {
    this.lista.splice(index, 1);
  }
}

export {Contas, Conta};
