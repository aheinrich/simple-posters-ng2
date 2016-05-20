import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
    
    private api_key:string;
    
    private _config:{
        images: {
            "base_url": string;
            "secure_base_url": string;
            "backdrop_sizes": string[]
            "logo_sizes": string[]
            "poster_sizes":string[]
            "profile_sizes": string[]
            "still_sizes":string[]
        },
        change_keys: string[]
    }

    constructor(private http:Http) {
        this.http.get('secrets.json').map(res => {
            return res.json()
        }).subscribe(data => {
            this.api_key = data.api_key
        })
    }
    
    get config() {
        return this._config
    }
    
    getConfig(){
        let params = {
            api_key: this.api_key,
        } 
        let paramString = Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
        return this.http.get('http://api.themoviedb.org/3/configuration?' + paramString).map(res => {
            this._config = res.json()
            return res.json()
        })
    }
    
    search(title:string){
        let params = {
            api_key: this.api_key,
            query: title
        } 
        let paramString = Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
        return this.http.get('http://api.themoviedb.org/3/search/movie?' + paramString).map(res => {
            return res.json()
        })
    }
    
    fetchDetails(id:number){
        let params = {
            api_key: this.api_key,
        } 
        let paramString = Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
        return this.http.get(`http://api.themoviedb.org/3/movie/${id}?` + paramString).map(res => {
            return res.json()
        })
    }

}


