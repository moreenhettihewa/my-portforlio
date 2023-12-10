import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../shared.module';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SharedComponentModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
