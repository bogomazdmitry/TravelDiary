import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Work tool';

  isDarkTheme = false;
  screenWidth = 80;

  constructor() {}
}
