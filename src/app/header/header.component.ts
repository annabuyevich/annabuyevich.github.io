import { Component } from '@angular/core';
// tslint:disable-next-line:no-unused-variable
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: `./header.component.html`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private active = false;

  get isActive(): boolean {
    return this.active;
  }

  // hamburger
  isIn = false;
  toggleState() {
    const bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }
}
