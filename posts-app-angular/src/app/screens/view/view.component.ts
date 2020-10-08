import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  post;

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');

    axios.get(environment.apiUrl + id).then(({ data }) => {
      this.post = data;
    });
  }
}
