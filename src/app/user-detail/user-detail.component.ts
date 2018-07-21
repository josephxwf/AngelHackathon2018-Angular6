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
  calResult:any;
  calResult2:any;



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


// internal page link direct
  onClick(apartment:Apartment){
      let x = document.querySelector("#result");
      if (x){
          x.scrollIntoView(true);
      }
      var work_address = this.users[1].address + ", " + this.users[1].city + ", " + this.users[1].state + " " + this.users[1].zipcode;
      var home_address = this.users[0].address + ", " + this.users[0].city + ", " + this.users[0].state + " " + this.users[0].zipcode;
      this.getCal(home_address , work_address);
      this.getCal2(apartment.address, work_address);


  }


  //calculate the distance and time from curr apart to dest
  getCal(addrStart: string, addrEnd: string): void {
    this.userService.getCalResult(addrStart, addrEnd)
    .subscribe(
       //x => console.log(x)
        x => this.calResult = x

    );
  }

//calculate the distance and time from new apart to dest
  getCal2(addrStart: string, addrEnd: string): void {
    this.userService.getCalResult(addrStart, addrEnd)
    .subscribe(
       //x => console.log(x)
        x => this.calResult2 = x

    );
  }








/*
onSubmit(): void {
  const uri = 'https://maps.googleapis.com/maps/api/geocode/json?';
  const apiKey = 'AIzaSyC0EThKVAaVkOIO47l21JFdmUeIEWEwBCA';

  var work_address = "350 W Broadway, New York, NY 10013"
  var address = "100 W Broadway, New York, NY 10013"

  var url = "https://maps.googleapis.com/maps/api/directions/json?origin="+address+"&destination="+work_address+"&key=AIzaSyC0EThKVAaVkOIO47l21JFdmUeIEWEwBCA";

  var xhr2 = new XMLHttpRequest();

  var duration;
  var dist;

  xhr2.open("GET", url, false);
  xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr2.onreadystatechange = function receiveResponse() {
   if (this.readyState == 4) {
       if (this.status == 200) {
           //console.log(this.response);
           var res = JSON.parse(this.response);
           dist = res.routes[0].legs[0].distance.text;
           console.log(dist);
           //document.querySelector("result").innerHTML = this.responseText;
           duration = res.routes[0].legs[0].duration.text;
       } else if (!isValid(this.response) && this.status == 0) {
           alert("The computer appears to be offline.");
       }
   }
  };
  xhr2.send();

}
*/




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
