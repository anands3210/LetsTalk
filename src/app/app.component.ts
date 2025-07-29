import { Component } from '@angular/core';
import { HeComponent } from './he/he.component';
import { SheComponent } from './she/she.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeComponent, SheComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {}
