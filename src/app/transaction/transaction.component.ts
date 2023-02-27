import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Transactions } from '../shared/models/transactions';
import { TransactionService } from './transaction.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    value: new FormControl(null, [Validators.required]),
    type: new FormControl('', [Validators.required]),
  });

  incomes: number = 0;
  expense: number = 0;
  total: number = 0;

  body?: Observable<Transactions[]>;

  constructor(private service: TransactionService) { }

  ngOnInit() { }

  onSave() {
    if (this.form.valid) {
      this.formValues();
      this.checkType();
    }
    return;
  }

  formValues() {
    let body = {
      name: this.form.controls.name.value,
      value: this.form.controls.value.value,
      type: this.form.controls.type.value,
    };

    if ((body.name && body.value && body.type !== '') || null || undefined) {
      this.service.create(body).subscribe((response) => response);

      alert('Adicionado com sucesso!');
    } else {
      alert('Operação não permitida');
    }
    location.reload();

    return;
  }

  checkType() {
    let type = this.form.controls.type.value;
    this.service.checkTransactionType(type);
    console.log(type);
  }

  getErrorMessage() {
    if (this.form.controls.name.hasError('required')) {
      return 'Este campo precisa ser preenchido.';
    }

    if (this.form.controls.value.hasError('required')) {
      return 'Este campo precisa ser preenchido.';
    }

    if (this.form.controls.value.hasError('required')) {
      return 'Verifique os dados digitados.';
    } else {
      return this.form.controls.name.hasError('name') ? 'Erro.' : '';
    }
  }
}
