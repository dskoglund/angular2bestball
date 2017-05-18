import { Component } from '@angular/core';

@Component({
  selector: 'my-navbar',
  template: `
    <md-toolbar color="primary">
        <span>{{title}}</span>
      <md-toolbar-row>
        <span>
          <a md-fab routerLink="/golfers"><h4>Golfers</h4></a>
        </span>
        <span>
          <a md-fab routerLink="/dashboard"><h4>Dashboard</h4></a>
        </span>
      </md-toolbar-row>
    </md-toolbar>
  `
})

export class NavbarComponent {
  title = 'Best Ball';
}
