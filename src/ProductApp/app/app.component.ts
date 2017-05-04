import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    // template: `<h1>Hello {{name}}</h1>`, // removed to hand off HTML to an .html file
    templateUrl: './app.component.html', // this is the .html file i've replaced the template with
    moduleId: 'moduleId', // help angular understand relative paths in relation to the current component
    // else you'd have to set templateUrl to './app/app.component.html'
})
export class AppComponent {
    pageTitle = 'Product Application';
    name = 'Angular';
}
