import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})

export class ContentComponent {
  @Input()
  photo:string = "https://dummyimage.com/640x400/fff/aaa"
  @Input()
  title:string = "Lorem ipsum dolor sit amet"
  @Input()
  description:string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam aspernatur ipsum eligendi blanditiis ratione, ipsa sapiente iure! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam aspernatur ipsum eligendi blanditiis ratione, ipsa sapiente iure!"
  @Input()
  id:string = "0" 

  constructor( private route:ActivatedRoute ){
    this.route.params.subscribe((value) =>
      console.log( value )
    )
  }
}
