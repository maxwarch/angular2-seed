import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {Location} from '@angular/common';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {RepoBrowser} from './components/repo-browser/repo-browser';

@Component({
  selector: 'seed-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/seed-app.html',
})
@Routes([
  { path: '/',       component: Home,       },
  { path: '/about',  component: About,      },
  { path: '/github', component: RepoBrowser },
])
export class SeedApp {
	currentPath: string;

	constructor(private location: Location, private router: Router) {
        router.changes.subscribe((val) => {
            this.currentPath = location.path();
        });
    }

}
