import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemingService } from './theming.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private themeService: ThemingService) {}
  changeTheme(value: string) {
    this.themeService.changeTheme(value);
  }
}
