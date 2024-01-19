import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ControlStatementExampleComponent } from './control-statement-example/control-statement-example.component';
import { DeferrablesComponent } from './deferrables/deferrables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ControlStatementExampleComponent,DeferrablesComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task1';
}
