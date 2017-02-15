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
var core_1 = require('@angular/core');
var wikipedia_service_1 = require('./wikipedia.service');
var WikiComponent = (function () {
    function WikiComponent(wikipediaService) {
        this.wikipediaService = wikipediaService;
        this.title = 'Wikipedia Demo';
        this.fetches = 'Fetches after each keystroke';
    }
    WikiComponent.prototype.search = function (term) {
        this.items = this.wikipediaService.search(term);
    };
    WikiComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-wiki',
            templateUrl: 'wikipedia.component.html',
            providers: [wikipedia_service_1.WikipediaService]
        })
    ], WikiComponent);
    return WikiComponent;
}());
exports.WikiComponent = WikiComponent;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
