import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
      <div class="navbar is-dark">
      <!--logo-->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="/assets/img/Symbol-Spiderman.png">
        </a>
      </div>

      <!-- menu -->
      <div class="navbar-menu">
        <div class="navbar-start">
          <a href="" class="navbar-item" routerLink="/">Home</a>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
