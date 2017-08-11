import { Component } from '@angular/core';
// tslint:disable-next-line:no-unused-variable
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: `./header.component.html`,
  styleUrls: ['./header.component.css']
})
export class headerComponent {
  private active: boolean = false;

  get isActive(): boolean {
    return this.active;
  }

  // hamburger
  isIn = false;
  toggleState() {
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }
}
