import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card'
import { MD_LIST_DIRECTIVES } from '@angular2-material/list'
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav'
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

import { DetailsComponent } from './details.component'
import { SearchService } from './search.service'


@Component({
    moduleId: module.id,
    selector: 'app',
    styleUrls: ['app.component.css'],
    templateUrl: 'app.component.html',
    directives: [ 
        MdButton,
        MD_CARD_DIRECTIVES,
        MD_LIST_DIRECTIVES, 
        MD_INPUT_DIRECTIVES,
        MD_SIDENAV_DIRECTIVES, 
        MdToolbar,
        MdIcon,
        DetailsComponent
    ],
    providers: [ SearchService, MdIconRegistry ]
})
export class AppComponent implements OnInit {
    
    name:string;
    
    searchResults:Array<any>
    
    details:any;
    
    constructor(private search:SearchService) { }

    ngOnInit() {}
    
    getConfig(){
        this.search.getConfig().subscribe(data => {
            console.log(data)
        })
    }
    
    doSearch(){
        this.details = null
        this.search.search(this.name).subscribe(data => {
            console.log(data)
            this.searchResults = data.results
        })
    }
    
    doDetails(id:number){
        this.search.fetchDetails(id).subscribe(data => {
            this.details = data
        })
    }

}