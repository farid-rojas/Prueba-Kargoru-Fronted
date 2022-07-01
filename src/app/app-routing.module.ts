import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuoteComponent } from './quote/quote.component';
import { SearchComponent } from './search/search.component';
import { ViewQuotesComponent } from './view-quotes/view-quotes.component';

const routes: Routes = [
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'quote' , component: QuoteComponent},
  {path: 'view-quotes' , component: ViewQuotesComponent},
  {path: "search", component: SearchComponent},
  {path: '**' , pathMatch: 'full', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
