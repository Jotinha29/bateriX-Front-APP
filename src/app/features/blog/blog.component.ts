import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
  featuredPost: any;
  posts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/featuredPost').subscribe((data) => {
      this.featuredPost = data;
    });

    this.http.get<any[]>('http://localhost:3000/posts').subscribe((data) => {
      this.posts = data;
    });
  }
}
