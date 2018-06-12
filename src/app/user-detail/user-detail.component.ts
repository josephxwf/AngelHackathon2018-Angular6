import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User }         from '../user';
import { UserService }  from '../user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: [ './user-detail.component.css' ]
})
export class UserDetailComponent implements OnInit {
  user: User;//https://angular.io/tutorial/toh-pt3#users-component-template You used a property binding to give the parent UsersComponent control over the child UserDetailComponent.
  users:User[];
  nameEditable = true;
  formSubmitted =true;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');//Route parameters are always strings. The JavaScript (+) operator converts the string to a number
    this.userService.getUser(id)
      .subscribe(user => this.users = user);
  }

  goBack(): void {
    this.location.back();
  }
/*
 save(): void {
    this.userService.updateUser(this.user)
      .subscribe(() => this.goBack());
  }
*/

  //user:User;

  add(form: NgForm): void {

    /*var username = form.value.username.trim();
    if (!username ) { return; }
    this.userService.addUser({username} as User)
      .subscribe();
    */

    this.userService.addUser(form.value)
      .subscribe();



  }

}
