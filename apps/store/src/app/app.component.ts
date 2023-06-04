import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import { BannerComponent } from '@org/common-ui';
// objects
import { exampleProducts } from '@org/products';

@Component({
  standalone: true,
  imports: [BannerComponent, CommonModule],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'store';
  products = exampleProducts;
}
