import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    sportsEvents: Observable<any[]>;

    constructor(
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.sportsEvents = this.authService.getLinkotesScrap();

    }

    /**
     * Parsea info bien chotamente
     */
    parseInfo = (a) => `
Hora: ${a.hora} <br/>
Deporte: ${a.deporte} <br/>
Retrasmision: ${a.retrasmision} <br/>
Donde ver: <br/>${
        a.canales
            .map(canal => `- Idioma: ${canal.languaje} <br/>${
                canal.acestreamIds
                    .map(a => `<a href="${this.authService.sanitize(a.ace)}">${a.ace}</a> <br/>`)
                    .join(' ')
            } <br/>`)
            .join(' ')
    }`
}
