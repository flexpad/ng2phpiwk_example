import { Injectable } from '@angular/core';
import {Http, Jsonp, Headers, URLSearchParams} from '@angular/http';
import {Hero}                                  from '../hero';
import 'rxjs/add/operator/toPromise';
//import '../rxjs-extensions';

@Injectable()
export class RestService {
  private headers = new Headers({'Just_Test': 'application/json'});
  private heroesUrl = 'http://localhost/tp5/public/index/index/api';  // URL to web api

  constructor(
    private  http: Http,
    private jsonp: Jsonp) { }


  getHeroes() {
  let params = new URLSearchParams();
  params.set('action', 'query');
  /*let resString = this.http.get(this.heroesUrl, { search: params, headers: this.headers }).map(res => <string[]> res.json());
   console.log("Response cross domain: ", resString);
   return resString.toPromise();*/
  return this.http.get(this.heroesUrl, {search: params/*, header: this.headers*/})
    .toPromise()
    .then(response => response.json() as Hero[])
    .catch(this.handleError);
}

  getHero(id: number): Promise <Hero> {
  let params = new URLSearchParams();
  params.set('action', 'query');
  params.set('id', id.toString());
  console.log("Hero ID is:", id.toString());
  return this.http.get(this.heroesUrl, {search: params})
    .toPromise()
    .then(response => {
      console.log('Json Response for hero: ', response.json()[0]);
      return response.json()[0] as Hero;
    })
    .catch(this.handleError);
}

  delete(id: number): Promise<void> {
    let params = new URLSearchParams();
    params.set('action', 'delete');
    params.set('id', id.toString());

    return this.http.get(this.heroesUrl, {search: params})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    let params = new URLSearchParams();
    params.set('action', 'add');
    params.set('name', name);

    return this.http.post(this.heroesUrl, params/*JSON.stringify({name: name})*/, {headers: this.headers})
      /*this.http.get(this.heroesUrl, {search: params})*/
      .toPromise()
      .then(res => res.json() as Hero)
      .catch(this.handleError);


    /*return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);*/
  }

  update(hero: Hero): Promise<Hero> {

    let params = new URLSearchParams();
    params.set('action', 'modify');
    params.set ('id', hero.id.toString());
    params.set('name', hero.name);

    return this.http.get(this.heroesUrl, {search: params})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);

    /*const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);*/
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

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
