import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UniversitylistComponent } from './universitylist/universitylist.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleuniversityComponent } from './singleuniversity/singleuniversity.component';
const appRoutes: Routes = [
  {
    path: 'universitylist/:id',
    component: UniversitylistComponent
  },
  {
    path: 'singleuniversity/:id',
    component: SingleuniversityComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    UniversitylistComponent,
    HomeComponent,
    SingleuniversityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
