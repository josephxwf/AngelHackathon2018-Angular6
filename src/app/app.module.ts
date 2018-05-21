import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DistanceComponent } from './distance/distance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { MaterialModule } from './my-module/my-module.module';
import { FormsModule} from '@angular/forms';
import { AngularFireModule  } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireDatabase} from "angularfire2/database";
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [

  { path: '', component: LandingComponent },
  { path: 'distance', component: DistanceComponent },
  { path: 'about', component: AboutComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    DistanceComponent,
    LandingComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
