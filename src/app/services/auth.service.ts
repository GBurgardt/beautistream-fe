import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { DomSanitizer } from '@angular/platform-browser';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private sanitizer:DomSanitizer
    ) { }

    getLinkotesScrap = () => this.http.get<any[]>(environment.WS_URL)

    sanitize = (url: string) => this.sanitizer.bypassSecurityTrustUrl(url);
    

}
