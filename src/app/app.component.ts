import { Component } from '@angular/core';
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'bt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BugTracker';
  isCollapsed = true;
  user = "administrator";
  faCoffee = faCoffee;
  faUserPlus = faUserPlus

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
