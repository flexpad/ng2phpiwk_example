import { Component }          from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" >Dashboard</a>
      <a routerLink="/heros" routerLinkActive="active">Heroes</a>
      <a routerLink="/wiki" routerLinkActive="active">Wikipedia</a>
      <a routerLink="/wikismart" routerLinkActive="active">Wikipedia Smart</a>
      <a routerLink="/search" routerLinkActive="active">Search</a>
      <!--<a routerLink="/detail/2" routerLinkActive="active">Hero 2</a>-->
            
    </nav>
    <router-outlet></router-outlet>   
    
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
