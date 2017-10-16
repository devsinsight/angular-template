import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';

let routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting { }