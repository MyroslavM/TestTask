import {RouterModule, Routes} from "@angular/router";
import {LogoComponent} from "./logo/logo.component";
import {LogoDetailComponent} from "./logo-detail/logo-detail.component";
import {NgModule} from "@angular/core";

const appRoutes: Routes = [
  {path: "logo", component: LogoComponent},
  { path: "logo/:id", component: LogoDetailComponent},
  { path: "", redirectTo: '/logo', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
