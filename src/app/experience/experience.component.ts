import { Component } from '@angular/core';
import { SharedComponentModule } from '../shared.module';

export interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SharedComponentModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  events: EventItem[];

  showRestfirst = false;
  showRestSecond = false;
  showRestThird = false;

  constructor() {
    this.events = [
      {
        status: 'Ordered',
        date: '15/10/2020 10:30',
        icon: 'fa-shopping-cart',
        color: '#9C27B0',
      },
      {
        status: 'Processing',
        date: '15/10/2020 14:00',
        icon: 'fa-cog',
        color: '#673AB7',
      },
      {
        status: 'Shipped',
        date: '15/10/2020 16:15',
        icon: 'fa-shopping-cart',
        color: '#FF9800',
      },
      {
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: 'fa-check',
        color: '#607D8B',
      },
    ];
  }

  onClickfirst() {
    this.showRestfirst = !this.showRestfirst;
  }

  onClickSecond() {
    this.showRestSecond = !this.showRestSecond;
  }

  onClickThird() {
    this.showRestThird = !this.showRestThird;
  }
}
