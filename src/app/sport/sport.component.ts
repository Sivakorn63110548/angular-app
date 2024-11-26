import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FootballComponent } from './football/football.component';

@Component({
  selector: 'app-sport',
  imports: [
    MatTabsModule,
    MatIcon,
    RouterModule,
    FootballComponent
  ],
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css'
})
export class SportComponent {

}
