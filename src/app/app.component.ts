import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nasaProjects';
  mobile = this.breakPoint.isMatched('(max-width: 599px)');

  constructor(private readonly breakPoint: BreakpointObserver) {
    breakPoint
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe((i) => (this.mobile = !i.matches));
  }
}
