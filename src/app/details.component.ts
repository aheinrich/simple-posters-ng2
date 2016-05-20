import { Component, OnInit, Input } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card'

@Component({
    moduleId: module.id,
    selector: 'details-card',
    directives: [ 
        MD_CARD_DIRECTIVES,
    ],
    template: `
    <md-card>
        <img *ngIf="data.poster_path" md-card-image src="https://image.tmdb.org/t/p/original/{{data.poster_path}}">
        <md-card-header>
            <md-card-title>{{ data.title }}</md-card-title>
            <md-card-subtitle>{{ data.tagline }}</md-card-subtitle>
        </md-card-header>

        <md-card-content>
            <p>{{ data.release_date }} - {{data.vote_average}} ({{data.vote_count}})</p>
            <p>{{ data.overview }}</p>
        </md-card-content>
    </md-card>
    `
})
export class DetailsComponent implements OnInit {
    
    @Input() data:any;
    
    constructor() { }

    ngOnInit() { }

}