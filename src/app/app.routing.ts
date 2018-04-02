import {Routes, RouterModule} from "@angular/router";

import { LinhaDoTempoComponent } from "./linha-do-tempo/linha-do-tempo.component";
import { PostarComponent } from './postar/postar.component';

const APP_ROUTES: Routes = [
    {path:"", redirectTo:"/linha-do-tempo", pathMatch:"full"},
    {path:"linha-do-tempo", component: LinhaDoTempoComponent},
    {path:"postar", component: PostarComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);