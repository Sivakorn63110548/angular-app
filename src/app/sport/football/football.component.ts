import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-football',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatSelectModule
  ],
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent {
  competitions: any[] = [];
  selectedCompetition: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFilteredCompetitions();
  }

  getFilteredCompetitions(): void {
    const url = 'http://api.football-data.org/v4/competitions';
    const params = {
      areas: '2072',
      season: '2023',
      code: 'PL'
    };
    const headers = { 'X-Auth-Token': '7d1ac53f18e94d93806f9dca9e5b4f28' };

    this.http.get(url, { headers }).subscribe({
      next: (data: any) => {
        this.competitions = data.competitions.map((competition: any) => ({
          id: competition.id,
          name: competition.name,
          emblem: competition.emblem || 'https://crests.football-data.org/SA.png'
        }));
      },
      error: (error) => console.error('Error:', error)
    });
  }

  onCompetitionChange() {
    console.log(this.selectedCompetition);
  }

  getSelectedCompetition() {
    return this.competitions.find(competition => competition.id === this.selectedCompetition);
  }
}
