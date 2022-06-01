import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-conta-edit',
  templateUrl: './conta-edit.component.html',
  styleUrls: ['./conta-edit.component.scss']
})
export class ContaEditComponent implements OnInit, AfterViewInit {

  @ViewChild('inputNome') public inputNome: ElementRef | undefined;

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      vencimento: [null, [Validators.required]],
      valor: [null, [Validators.required]],
      pago: [false, [Validators.required]]
    });
    if (this.config.data?.conta) {
      if (this.config.data.conta.valorPagamento) {
        this.form.addControl('valorPagamento', this.createControl());
      }
      this.form.patchValue(this.config.data.conta);
    }
  }

  cancelar(): void {
    this.ref.close(null);
  }

  submit(): void {
    if (this.form.valid) {
      this.ref.close(this.form.value);
    }
  }

  ngAfterViewInit(): void {
    this.inputNome?.nativeElement.focus();
  }

  createControl(): FormControl {
    return this.fb.control(null, [Validators.required]);
  }

  togglePayment($event: any) {
    if ($event.checked === true) {
      this.form.addControl('valorPagamento', this.createControl());
    } else {
      this.form.removeControl('valorPagamento');
    }
    this.form.updateValueAndValidity();
  }

  integralValue(): void {
    this.form.get('valorPagamento')?.patchValue(this.form.get('valor')?.value)
  }
}
