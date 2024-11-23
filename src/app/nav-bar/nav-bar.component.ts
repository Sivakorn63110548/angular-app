import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
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
      label: 'UI COMPONENTS',
      isHeader: true
    },
    {
      label: 'Badge',
      icon: 'bookmark',
      route: '/'
    },
    {
      label: 'Chips',
      icon: 'clear_all',
      route: '/'
    },
    {
      label: 'Lists',
      icon: 'list',
      route: '/'
    },
    {
      label: 'Menu',
      icon: 'menu',
      route: '/'
    },
    {
      label: 'Tooltips',
      icon: 'info',
      route: '/'
    },
    {
      label: 'Forms',
      icon: 'edit',
      route: '/'
    },
    {
      label: 'Tables',
      icon: 'table_chart',
      route: '/'
    },
    {
      label: 'Forms',
      icon: 'edit',
      route: '/'
    },
    {
      label: 'Tables',
      icon: 'table_chart',
      route: '/'
    },
    {
      label: 'Forms',
      icon: 'edit',
      route: '/'
    },
    {
      label: 'Tables',
      icon: 'table_chart',
      route: '/'
    },
    {
      label: 'Forms',
      icon: 'edit',
      route: '/'
    },
    {
      label: 'Tables',
      icon: 'table_chart',
      route: '/'
    },
    {
      label: 'Forms',
      icon: 'edit',
      route: '/'
    },
    {
      label: 'Tables',
      icon: 'table_chart',
      route: '/'
    },
    {
      label: 'Forms',
      icon: 'edit',
      route: '/'
    },
    {
      label: 'Tables',
      icon: 'table_chart',
      route: '/'
    }
  ];
}
