import {Component} from '@angular/core';

declare function fetch(url);

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><pre>{{ json }}</pre>'
})
export class AppComponent {
    public json: string;

    public ngOnInit() {
        fetch("test.json")
            .then(response => response.json())
            .then(json => this.json = JSON.stringify(json));
    }
}
