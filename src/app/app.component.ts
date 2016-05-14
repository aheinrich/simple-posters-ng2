import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES],
})
@Routes([
])

export class AppComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {
        // this.router.navigate(['/transactions']);
    }

}