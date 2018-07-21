import { Component, OnInit } from '@angular/core';
import { User }    from '../user';
import { USERS }    from '../mock-users';

import {NgForm} from '@angular/forms';
import { EventEmitter, Input, Output } from '@angular/core';
import { UserService }  from '../user.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent{

    homeAddress = "Home";
    workAddress = "Work";

    // get data from parent component user-detail and assign to variable model
    @Input()  model: User[];
    // send data of variable formData to parent component user-detail
    //@Output() formData = new EventEmitter<NgForm>();//https://angular.io/guide/component-interaction#parent-listens-for-child-event


    //@Input() createNew = false;
    @Input() submitted = false;
    @Input() editUser = false;
    //@Input() showForm = true;

    constructor(

      private userService: UserService,
      private location: Location



    ) {
      this.model = USERS;
    }








    onSubmit(form: NgForm) {
      this.submitted = true;
      if(this.editUser == false){
      this.add(form);

    }else{
      // edit existing user
      this.update(form);
      this.editUser = false;
        }
    }


    update(form: NgForm): void {
     this.userService.updateUser(form.value).subscribe(); // need subscribe() to make this call work
   }

    add(form: NgForm): void {
      this.userService.addUser(form.value).subscribe();
    }


    goBack(): void {
      this.location.back();
    }

    /*
        onSubmit(form: NgForm) {
          this.submitted = true;
          if(this.editUser == false){
          //this.formData.emit(form); // send new user data
          this.createNew = false;
        }else{
          //this.user = new User(133,form.value.name,'','','','');
          // edit existing user
          this.userService.updateUser(form.value).subscribe(); // need subscribe() to make this call work

          this.editUser = false;
        }

        //console.log(form.value.name)

        }
    */
/*
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    newUser() {
      this.model = new User(42, '', '');
    }

    skyDog(): User {
      let myUser =  new User(42, 'SkyDog',
                             'Fetch any object at any distance',
                             'Leslie Rollover');
      console.log('My hero is called ' + myUser.name); // "My user is called SkyDog"
      return myUser;
    }
*/
    //////// NOT SHOWN IN DOCS ////////

    // Reveal in html:
    //   Name via form.controls = {{showFormControls(heroForm)}}
    showFormControls(form: any) {
      return form && form.controls['username'] &&
      form.controls['username'].value; // Dr. IQ
    }

    /////////////////////////////
}
