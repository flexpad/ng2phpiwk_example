"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by qiaoc on 2017/2/10.
 */
/* tslint:disable: member-ordering forin */
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var wikipedia_service_1 = require('./wikipedia.service');
var WikiSmartComponent = (function () {
    function WikiSmartComponent(wikipediaService) {
        var _this = this;
        this.wikipediaService = wikipediaService;
        this.title = 'Smarter Wikipedia Demo';
        this.fetches = 'Fetches when typing stops';
        this.searchTermStream = new Subject_1.Subject();
        this.items = this.searchTermStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.wikipediaService.search(term); });
    }
    WikiSmartComponent.prototype.search = function (term) { this.searchTermStream.next(term); };
    WikiSmartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-wiki-smart',
            templateUrl: 'wikipedia.component.html',
            providers: [wikipedia_service_1.WikipediaService]
        })
    ], WikiSmartComponent);
    return WikiSmartComponent;
}());
exports.WikiSmartComponent = WikiSmartComponent;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
