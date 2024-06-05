import { Component } from '@angular/core';
import { BillsService, CreateBillToPayDto } from '../bills.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-bill',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-bill.component.html',
  styleUrl: './add-bill.component.css'
})
export class AddBillComponent {

  bill: CreateBillToPayDto = {
    nome: '',
    valorOriginal: 0,
    dataVencimento: '',
    dataPagamento: ''
  };

  constructor(private billsService: BillsService) { }

  addBill(): void {
    this.bill.dataVencimento = this.bill.dataVencimento ? this.formatDate(this.bill.dataVencimento) : null;
    this.bill.dataPagamento = this.bill.dataPagamento ? this.formatDate(this.bill.dataPagamento) : null;

    this.billsService.createBillToPay(this.bill).subscribe(
      response => {
        alert(response.message);
        setTimeout(() => {
          window.location.reload();
        }, 100);
      },
      error => {
        let errorMessage = '';
        if (error.error.errors && error.error.errors.Nome) {
          errorMessage += 'Nome: ' + error.error.errors.Nome[0] + '\n';
        }
        if (error.error.errors && error.error.errors.ValorOriginal) {
          errorMessage += 'Nome: ' + error.error.errors.ValorOriginal[0] + '\n';
        }
        if (error.error.errors && error.error.errors.DataVencimento) {
          errorMessage += 'Data de Vencimento: ' + error.error.errors.DataVencimento[0] + '\n';
        }
        if (error.error.errors && error.error.errors.DataPagamento) {
          errorMessage += 'Data de Pagamento: ' + error.error.errors.DataPagamento[0] + '\n';
        }
        if (error.error && error.error.message) {
          errorMessage += error.error.message;
        }
        alert(errorMessage);
      }
    );
  }

  private formatDate(date: string): string {

    if (date && !date.includes('-')) {

      const parts = date.split('/');
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return date;
  }
}
