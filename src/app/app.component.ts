import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  name = 'Angular';

  constructor(private messageService: MessageService) { }


}
