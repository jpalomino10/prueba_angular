import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: any[];
  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this._apiService.get('/auth/categorys').subscribe((response: any) => {
      if (response.status.code === 1) {
        this.categories = response.data;
      }
    })
  }

}
