



import {Component} from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireDatabase]
})

export class AppComponent {
  title = 'app';
  description = 'Angular4-Firebase Demo';

  itemValue = '';
  items: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
    this.items.push({content: 4});
    this.items = db.list('/items').valueChanges();
  

  }



  onSubmit() {

    this.items.push({content: this.itemValue});
    this.itemValue = '';
  }
}
