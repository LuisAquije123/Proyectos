import { Component } from '@angular/core';
import {Footwear} from "../../models/footwear";
import {FootwearService} from "../../services/footwear.service";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  footwears: Footwear[] = [];
  constructor(private footwearService: FootwearService) { }

  ngOnInit(): void {
    this.fetchFootwears();
  }

  private fetchFootwears(): void {
    this.footwearService.getFootwears().subscribe(
      footwears => this.footwears = footwears,
      error => console.error('Error fetching footwears', error)
    );
  }
}
