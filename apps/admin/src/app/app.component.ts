import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// components
import { BannerComponent } from '@org/common-ui';

@Component({
  standalone: true,
  imports: [RouterModule, BannerComponent],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin';
}
