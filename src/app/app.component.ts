import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    TopBarComponent,
    NavBarComponent,
    RouterModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
