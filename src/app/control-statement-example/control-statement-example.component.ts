import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement-example',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-statement-example.component.html',
  styleUrl: './control-statement-example.component.css'
})
export class ControlStatementExampleComponent {
  show:boolean=true;
  switchvalue:any='if';

  ifcode="@if(show){ <h3> Kalaivani G </h3> }";
  ifelsecode="@if(show)<h3>Kalaivani G</h3>}  @else{ <h3>User name is protected</h3> }";
  switchcode="@switch(statementtype) { @case('if'){<p>hello</p> }  @case('if-else'){<p>hii</p>} @case('switch'){ <p>bye</p>}}";

  changevisibility()
{
   if(this.show==true)
   {
    this.show=false;
   }
   else{
    this.show=true;
   }
}
}
