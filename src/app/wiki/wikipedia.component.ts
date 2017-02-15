/**
 * Created by qiaoc on 2017/2/10.
 */
import { Component }        from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { FormControl }      from '@angular/forms';


import { WikipediaService } from './wikipedia.service';

@Component({
  moduleId: module.id,
  selector: 'my-wiki',
  /*template: `
  <h1>{{title}}</h1>
    <p><i>{{fetches}}</i></p>

    <input #term (keyup)="search(term.value)"/>
    <!--<input #term type="text" [formControl]="term"/>-->
    <ul>
      <li *ngFor="let item of items | async">{{item}}</li>
    </ul>
  `,*/
  templateUrl: 'wikipedia.component.html',
  providers: [ WikipediaService ]
})
export class WikiComponent {
  title   = 'Wikipedia Demo';
  fetches = 'Fetches after each keystroke';
  items: Observable<string[]>;
  term = new FormControl();
  /*constructor(private wikipediaService: WikipediaService) {
    this.items = this.term.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.wikipediaService.search(term));
  }*/

  search (term: string) {
    /*this.wikipediaService.search(term)
      .then(items => this.items = items);*/
    this.items = this.wikipediaService.search(term);
    console.log("this.items JSONP: ", this.items);
  }
  constructor (private wikipediaService: WikipediaService) {}


 }


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
