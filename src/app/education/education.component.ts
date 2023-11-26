import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [SharedComponentModule,RouterModule,CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

}
