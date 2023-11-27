import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../shared.module';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,SharedComponentModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
