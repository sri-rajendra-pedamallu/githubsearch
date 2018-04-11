import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map' ;

@Injectable()
export class GithubService{
    private username:string;
    private client_id:'80d6833dad852a3ef260';
    private client_secret='e3c83295b17163875f57318324effacfa4320008';

    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username='sri-rajendra-pedamallu';
    }
    getUser(){
        return this._http.get('http://github.com/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }
}