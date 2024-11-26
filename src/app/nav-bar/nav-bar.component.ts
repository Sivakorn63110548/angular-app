import { Component } from '@angular/core';
import { Router, RouterModule, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faFacebookF } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  faAngular = faAngular;
  faFacebook = faFacebookF;
  isLoading = false;

  navItems = [
    { label: 'HOME', isHeader: true },
    { label: 'Dashboard', icon: 'dashboard', route: '/home' },
    { label: 'Games', isHeader: true },
    { label: 'Sport', icon: 'sports_soccer', route: '/sport' },
    { label: 'Slot', icon: 'casino', route: '/' },
    { label: 'Bacarete', icon: 'attach_money', route: '/' },
    { label: 'Other', icon: 'extension', route: '/' },
    { label: 'Data', isHeader: true },
    { label: 'Forms', icon: 'assignment', route: '/' },
    { label: 'Tables', icon: 'table_chart', route: '/' },
    { label: 'Manage', isHeader: true },
    { label: 'Setting', icon: 'settings', route: '/' },
    { label: 'About', icon: 'info', route: '/' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
        }, 100);
      } else if (
        event instanceof NavigationEnd || 
        event instanceof NavigationCancel || 
        event instanceof NavigationError
      ) {
        setTimeout(() => {
          this.isLoading = false;
        }, 100);
      }
    });
  }
}
