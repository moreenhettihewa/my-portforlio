import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../shared.module';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,SharedComponentModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
