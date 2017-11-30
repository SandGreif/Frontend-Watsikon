import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from "@angular/router";
import { WikiComponent } from "./wiki/wiki.component";
import { YummlyComponent} from "./yummly/yummly.component";
import { HelpComponent } from "./help/help.component";

const routes: Routes = [
  { path: 'wiki', component: WikiComponent },
  { path: 'yummly', component: YummlyComponent },
  { path: 'help', component: HelpComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
