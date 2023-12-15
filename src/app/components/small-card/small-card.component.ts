import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {
  @Input()
  photo:string = "https://dummyimage.com/500x500/fff/aaa"
  @Input()
  author:string = ""
  @Input()
  description:string = ""
  @Input()
  id:string = "0" 

  constructor( private route:ActivatedRoute ){
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      console.log( value )
    )
    //throw new Error('Method not implemented.');
  }


}

