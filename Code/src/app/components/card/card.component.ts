import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
	@Input()
	gameCover:string = ""
	@Input()
	gameCoverAlt:string = ""
	@Input()
	gameType:string = ""
	@Input()
	gamePrice:string = ""
	@Input()
	gameLabel:string= ""
}
