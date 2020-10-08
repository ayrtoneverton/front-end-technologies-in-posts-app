import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import axios from 'axios';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  search = '';
  posts;
  filteredPosts;

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loadPosts();
  }

  async loadPosts() {
    await axios.get(environment.apiUrl).then(({ data }) => {
      this.posts = data;
      this.filteredPosts = data;
    });
  }

  onSearch() {
    this.filteredPosts = this.posts?.filter(
      p => p.title.indexOf(this.search) >= 0 || p.description.indexOf(this.search) >= 0
    );
  }

  async onRemove(id) {
    this.posts = this.filteredPosts = null;
    await axios.delete(environment.apiUrl + id);
    this.toastr.success('Post removed successfully!');
    await this.loadPosts();
    this.onSearch();
  }

  redirect(url) {
    this.router.navigateByUrl(url);
  }
}
