import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import {AvatarModule} from 'primeng/avatar';
import {ImageModule} from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';
import { AccordionModule} from 'primeng/accordion'
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
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  events: EventItem[];

  constructor() {
    this.events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'fa-shopping-cart', color: '#9C27B0', },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'fa-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'fa-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'fa-check', color: '#607D8B' }
    ];
    
}

}
