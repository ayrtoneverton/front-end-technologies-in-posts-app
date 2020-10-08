import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import axios from 'axios';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  post;
  isUpdate;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.isUpdate = id !== 'new';

    if (this.isUpdate) {
      axios.get(environment.apiUrl + id).then(({ data }) => {
        this.post = data;
      });
    } else {
      this.post = {
        title: '',
        description: '',
        body: ''
      }
    }
  }

  async save() {
    if (!(this.post.title && this.post.description && this.post.body)) {
      return this.toastr.error('All fields are required!');
    }
    if (this.isUpdate) {
      const { _id } = this.post;
      this.post._id = undefined;
      await axios.put(environment.apiUrl + _id, this.post);
    } else {
      await axios.post(environment.apiUrl, this.post);
    }
    this.toastr.success(`Post ${this.isUpdate ? 'updated' : 'created'} successfully!`);
    this.location.back();
  }

  cancel() {
    this.location.back();
  }
}
