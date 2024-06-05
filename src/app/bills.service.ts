import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BillToPay {
  nome: string;
  valorOriginal: number;
  valorCorrigido: number;
  quantidadeDiasAtraso: number;
  dataPagamento: string;
}

export interface CreateBillToPayDto {
  nome: string;
  valorOriginal: number;
  dataVencimento: string | null;
  dataPagamento: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  private apiUrl = 'http://localhost:5156/api';

  constructor(private http: HttpClient) { }

  getAllBillsToPay(): Observable<BillToPay[]> {
    return this.http.get<BillToPay[]>(`${this.apiUrl}/bills_to_pay`);
  }

  createBillToPay(bill: CreateBillToPayDto): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/new_bill_to_pay`, bill, { headers });
  }
}
