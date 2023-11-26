import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../shared.module';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,SharedComponentModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
