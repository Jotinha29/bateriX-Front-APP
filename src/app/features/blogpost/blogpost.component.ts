import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blogpost',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './blogpost.component.html'
})
export class BlogPostComponent implements OnInit {
  post: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id') as string;
    this.http.get(`http://localhost:3000/posts/${postId}`).subscribe((data) => {
      this.post = data;
    });
  }
}
