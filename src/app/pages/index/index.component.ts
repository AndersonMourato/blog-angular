import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component'
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component'
import { BigCardComponent } from '../../components/big-card/big-card.component'
import { SmallCardComponent } from '../../components/small-card/small-card.component'



@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    MenuTitleComponent,
    MenuBarComponent,
    BigCardComponent,
    SmallCardComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
