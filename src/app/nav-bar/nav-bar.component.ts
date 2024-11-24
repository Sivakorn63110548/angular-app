import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { faAngular, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterModule,
    MatIconModule,
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  faAngular = faAngular;
  faFacebook = faFacebookF;
  navItems = [
    {
      label: 'HOME',
      isHeader: true
    },
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/'
    },
    {
      label: 'Games',
      isHeader: true
    },
    {
      label: 'Ball',
      icon: 'sports_soccer',
      route: '/'
    },
    {
      label: 'Slot',
      icon: 'casino',
      route: '/'
    },
    {
      label: 'Bacarete',
      icon: 'attach_money',
      route: '/'
    },
    {
      label: 'Other',
      icon: 'extension',
      route: '/'
    },
    {
      label: 'Data',
      isHeader: true
    },
    {
      label: 'Forms',
      icon: 'assignment',
      route: '/'
    },
    {
      label: 'Tables',
      icon: 'table_chart',
      route: '/'
    },
    {
      label: 'Manage',
      isHeader: true
    },
    {
      label: 'Setting',
      icon: 'settings',
      route: '/'
    },
    {
      label: 'About',
      icon: 'info',
      route: '/'
    }
  ];
}
