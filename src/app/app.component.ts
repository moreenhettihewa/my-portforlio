import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;

  position: string = 'left';

  ngOnInit(): void {
    this.items = [
      {
        label: 'About',
        icon: 'fa fa-home',
        tooltipOptions: {
          tooltipLabel: 'About',
          tooltipPosition: 'right',
        },
        command: () => {
          console.log('About');
          document
            .getElementById('home-view')
            ?.scrollIntoView({ behavior: 'smooth' });
        },
      },
      {
        label: 'Education',
        icon: 'fa fa-graduation-cap',
        tooltipOptions: {
          tooltipLabel: 'Education',
          tooltipPosition: 'right',
        },
        command: () => {
          console.log('Esucation');
          document
            .getElementById('education-view')
            ?.scrollIntoView({ behavior: 'smooth' });
        },
      },
      {
        label: 'Experience',
        icon: 'fa fa-briefcase',
        tooltipOptions: {
          tooltipLabel: 'Experience',
          tooltipPosition: 'right',
        },
        command: () => {
          console.log('Experience');
          document
            .getElementById('experience-view')
            ?.scrollIntoView({ behavior: 'smooth' });
        },
      },
      {
        label: 'Projects',
        icon: 'fa fa-timeline',
        tooltipOptions: {
          tooltipLabel: 'Projects',
          tooltipPosition: 'right',
        },
        command: () => {
          console.log('Projects');
          document
            .getElementById('projects-view')
            ?.scrollIntoView({ behavior: 'smooth' });
        },
      },
      {
        label: 'Blogs',
        icon: 'fa fa-note-sticky',
        tooltipOptions: {
          tooltipLabel: 'Blogs',
          tooltipPosition: 'right',
        },
        command: () => {},
      },
    ];
  }
}
