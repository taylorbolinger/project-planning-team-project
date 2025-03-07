import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Front-End';
  message = 'A message to you';

  constructor(private bs: BackendService) { bs.getHello().subscribe(response => {
    this.message = response.message;
  })}


}
