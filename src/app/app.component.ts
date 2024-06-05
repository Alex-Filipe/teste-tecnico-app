import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddBillComponent } from './add-bill/add-bill.component';
import { BillsListComponent } from './bills-list/bills-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddBillComponent, BillsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teste-tecnico-app';
}
