import { Component } from '@angular/core';
// components
import { BannerComponent } from '@org/common-ui';
// objects
import { exampleProducts } from '@org/products';

@Component({
  standalone: true,
  imports: [BannerComponent],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'store';
  products = exampleProducts;
}
