import { Component } from '@angular/core'; // No need for OnInit
import { PersonService } from '@services/person.service';
import { Person } from '@models/person';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs'; // Import Observable

@Component({
  selector: 'app-person-list',
  imports: [CommonModule],
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent {
  errorMessage: string = '';
  persons$: Observable<Person[]> | undefined; // Use an Observable with $ convention

  constructor(private personService: PersonService) {
    this.persons$ = this.personService.getPersons(); // Assign the Observable
  }
}
