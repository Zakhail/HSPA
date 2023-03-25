import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: 'propery-card.component.html',
  styleUrls: ['propery-card.component.scss']
})
export class ProperyCardComponent {

  Property: any = {
    "id": 1,
    "Name":"Tajmuhammad Zakhail",
    "Type":"House",
    "Price":120000
  }


}
