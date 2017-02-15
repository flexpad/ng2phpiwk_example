import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class WikipediaService {
  times: number;
  constructor(private jsonp: Jsonp) { this.times = 0;}

  /*search (term: string) {
    let search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp
      .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
      .map((response) => response.json()[1]);
  }*/

  search (term: string) {

    let wikiUrl = 'http://en.wikipedia.org/w/api.php';

    let params = new URLSearchParams();
    params.set('search', term); // the user's search value
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    /*params.set('callback', `__ng_jsonp__.__req${this.times}.finished`);
    this.times=this.times+1;*/

    return this.jsonp
      .get(wikiUrl, { search: params })
      .map((response)  => <string[]> response.json()[1]);

    // TODO: Add error handling
    /*
    return this.jsonp
      .get(wikiUrl, { search: params })
      .map(response => <string[]> response.json()[1]);*/
  }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
 /**
 * Created by qiaoc on 2017/2/10.
 */
