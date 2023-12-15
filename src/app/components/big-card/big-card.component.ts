import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  photo:string = "https://dummyimage.com/640x400/fff/aaa"
  @Input()
  title:string = ""
  @Input()
  description:string = ""
  @Input()
  linkTitle:string = "#"  
}