import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  photo:string = "https://dummyimage.com/500x500/fff/aaa"
  @Input()
  author:string = ""
  @Input()
  description:string = ""
  @Input()
  link:string = "#"  
}
