import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { SharedComponentModule } from '../shared.module';
import { EducationComponent } from '../education/education.component';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,SharedComponentModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
