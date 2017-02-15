import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroSearchComponent }  from './hero-search.component';
import { WikiComponent }        from './wiki/wikipedia.component';
import { WikiSmartComponent }   from './wiki/wikipedia.smart.component';


const appRoutes: Routes = [

  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heros', component: HeroesComponent},
  {path: 'wiki', component: WikiComponent},
  {path: 'search', component: HeroSearchComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'wikismart', component: WikiSmartComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
