import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonListComponent } from "./person-list/person-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Happy Thursday!';
}
