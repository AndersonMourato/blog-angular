import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [
    {
        path:"",
        component: IndexComponent
    },
    {
        path:"content",
        component: ContentComponent
    }
];

