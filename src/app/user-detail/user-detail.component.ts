import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User }         from '../user';
import {Apartment }         from '../apartment';
import { UserService }  from '../user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: [ './user-detail.component.css' ]
})
export class UserDetailComponent implements OnInit {
  //user: User;//https://angular.io/tutorial/toh-pt3#users-component-template You used a property binding to give the parent UsersComponent control over the child UserDetailComponent.
  users:User[];
  apartments: Apartment[];
  nameEditable = true;
  formSubmitted =true;
  interval: any;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.getApartments();
    this.interval = setInterval(() => {  // Refresh apaprtment Data in Realtime
        this.getApartments();
    }, 5000);
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('personID');//Route parameters are always strings. The JavaScript (+) operator converts the string to a number
    this.userService.getUser(id)
      .subscribe(users => this.users = users);// two addresses
  }



  getApartments(): void {
    this.userService.getApartments()
    .subscribe(apartments => this.apartments = apartments);
  }




/*
  goBack(): void {
    this.location.back();
  }
*/
/*
 save(): void {
    this.userService.updateUser(this.user)
      .subscribe(() => this.goBack());
  }
*/


/*
  add(form: NgForm): void {
    this.userService.addUser(form.value)
      .subscribe();
  }
  */

}
