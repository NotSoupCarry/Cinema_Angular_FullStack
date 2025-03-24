import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmListComponent } from "./film-list/film-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FilmListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
