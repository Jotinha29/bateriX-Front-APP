import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-local-descarte',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './local-descarte.component.html',
})
export class LocalDescarteComponent implements OnInit {
  locaisDescarte: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/locaisDescarte').subscribe((data) => {
      this.locaisDescarte = data.slice(0, 3);
    });
  }
}
