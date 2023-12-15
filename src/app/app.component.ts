import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IndexComponent } from "./pages/index/index.component"
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterLink, IndexComponent, MenuBarComponent]
})
export class AppComponent {
  title = 'blog-angular';
}
