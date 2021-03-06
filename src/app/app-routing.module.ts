import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExportControlComplianceComponent } from './about/export-control-compliance/export-control-compliance.component';
import { HistoryComponent } from './about/history/history.component';
import { WhistleblowingComponent } from './about/whistleblowing/whistleblowing.component';
import { CareersComponent } from './careers/careers.component';
import { CatagoriesComponent } from './catagories/catagories.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { ProductsComponent } from './products/products.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { SubSubCatagoryComponent } from './sub-sub-catagory/sub-sub-catagory.component';
import { SubcatagoriesComponent } from './subcatagories/subcatagories.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  { path: 'about', component:AboutComponent },
  { path: 'history', component:HistoryComponent },
  { path: 'export-control-compliance', component:ExportControlComplianceComponent },
  { path: 'compliance-whistleblowing-scheme', component:WhistleblowingComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'news_and_events', component: NewsEventsComponent },
  { path: 'news_and_events/:id', component: NewsEventsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'catagory/:id', component: CatagoriesComponent },
  { path: 'subcatagory/:id', component: SubcatagoriesComponent },
  { path: 'sub-subcatagory/:id', component: SubSubCatagoryComponent },
  { path: 'product/:id', component: ProductsComponent },
  {path:'event' , component:EventsComponent},
  {path:'contact' , component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
