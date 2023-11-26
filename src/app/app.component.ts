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

  @ViewChild('homeEl') homeEl!: ElementRef;

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
          document.getElementById('home-view')?.scrollIntoView({  behavior: 'smooth' });
        },
        // view: 'home-view'
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
          document.getElementById('education-view')?.scrollIntoView({  behavior: 'smooth' });
        },
      },
      {
        label: 'Experience',
        icon: 'fa fa-timeline',
        tooltipOptions: {
          tooltipLabel: 'Experience',
          tooltipPosition: 'right',
        },
        command: () => {
          console.log('Experience');
          document.getElementById('experience-view')?.scrollIntoView({  behavior: 'smooth' });
        },
      },
      {
        label: 'Projects',
        icon: 'fa fa-toolbox',
        tooltipOptions: {
          tooltipLabel: 'Projects',
          tooltipPosition: 'right',
        },
        command: () => {
          console.log('Projects');
          document.getElementById('projects-view')?.scrollIntoView({  behavior: 'smooth' });
        },
      },
      {
        label: 'Blogs',
        icon: 'fa fa-note-sticky',
        tooltipOptions: {
          tooltipLabel: 'Blogs',
          tooltipPosition: 'right',
        },
        command: () => {
          console.log('Blogs');
          
        },
      },
      {
        label: 'Contact',
        icon: 'fa fa-circle-user',
        tooltipOptions: {
          tooltipLabel: 'Contact',
          tooltipPosition: 'right',
        },
        command: () => {
          console.log('Contact');
        },
      },
    ];
  }

  onClickView(view: string) {
    console.log(view);
    switch (view) {
      case 'home-view':
        this.homeEl.nativeElement.scrollIntoView({ behavior: 'smooth' });
        console.log(view);
        break;
      case 'education-view':
        this.position = 'left';
        break;
      case 'experience-view':
        this.position = 'left';
        break;
      case 'projects-view':
        this.position = 'left';
        break;
      case 'blogs-view':
        this.position = 'left';
        break;
      case 'contact-view':
        this.position = 'left';
        break;
      default:
        this.position = 'left';
        break;
    }
  }
}
