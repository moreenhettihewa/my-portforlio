import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../shared.module';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, SharedComponentModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactData = {
    name: 'Moreen Hettihewa',
    email: 'moreenmadhushani@gmail.com',
    phone: '+94 76 254 7107',
    linkedin: 'https://www.linkedin.com/in/moreenhettihewa/',
    github: 'https://github.com/moreenhettihewa',
    location: 'Colombo, Sri Lanka',
  };
}
