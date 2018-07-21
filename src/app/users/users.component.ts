import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  //clickCreate = false;
  //buttonText = "Create New User";

  //user: User | null;
  constructor(
  private userService: UserService,
  private router: Router

) { }

  ngOnInit() {
    this.getUsers();
  }

/*
  button():void{
    if (this.clickCreate == false){
    this.clickCreate=true;
    this.buttonText = "Create Later";

  }else{
    this.clickCreate=false;
    this.buttonText = "Create New User";
  }

  }
  */
  btnClick= function () {
          this.router.navigateByUrl('/userform');
  };


  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

/*
  add2(username: string): void {

    username = username.trim();
    if (!username) { return; }
    //this.user = new User();
    //this.user.name = name;
    //this.users.push(this.user);
    this.userService.addUser({username} as User)
      .subscribe(user => {
        this.users.push(user);
        //console.log(this.users);
      });
  }


add(form: NgForm): void {
  this.userService.addUser(form.value)
    .subscribe( user => {
        this.users.push(user);
      //  console.log(this.users);
    });
}

*/



  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user).subscribe();
  }

}
