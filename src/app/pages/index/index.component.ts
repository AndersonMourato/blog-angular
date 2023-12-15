import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component'
import { BigCardComponent } from '../../components/big-card/big-card.component'
import { SmallCardComponent } from '../../components/small-card/small-card.component'



@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
