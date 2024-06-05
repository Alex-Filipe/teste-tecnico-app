import { Component, OnInit } from '@angular/core';
import { BillsService, BillToPay } from '../bills.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bills-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.css']
})
export class BillsListComponent implements OnInit {

  bills: BillToPay[] = [];

  constructor(private billsService: BillsService) { }

  ngOnInit(): void {
    this.billsService.getAllBillsToPay().subscribe((data: BillToPay[]) => {
      this.bills = data;
    });
  }
}
