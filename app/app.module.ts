import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {BookComponent} from './system/book/book.component';
import {TestComponent} from './system/test/test.component';
import {AboutComponent} from './system/about/about.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {QuestionsService} from './system/test/questions.service';


const routes: Routes = [
     { path: '', component: BookComponent},
    { path: 'book', component: BookComponent },
    { path: 'test', component: TestComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BookComponent,
    TestComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserModule,
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
