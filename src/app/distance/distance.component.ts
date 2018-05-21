import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Housing} from '../models/housing';

import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css'],
  providers: [AngularFireDatabase]
})
export class DistanceComponent implements OnInit {
  displayedColumns = ['Address', 'Work Distance', 'Work Duration',
  'School Distance', 'School Duration', "Rent"];
 // dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  housingArr = [];


  dataSource = new MatTableDataSource<Housing>(this.housingArr);

  @ViewChild(MatSort) sort: MatSort;
  //items: AngularFireList<any[]>;
  //apartments: AngularFireObject<any>;
  //apts = [];

  items: Observable<any[]>;


  constructor(db: AngularFireDatabase) {
  //this.apts = new Array();
    this.items = db.list('apartments').valueChanges();

    this.items.subscribe(data => {


      for (let user of data) {
        this.housingArr.push(
          {
            address: user.address,
            work_distance: user.work_distance,
            work_duration: user.work_duration,
            school_distance: user.school_distance,
            school_duration: user.school_duration,
            rent:Math.floor( 1000 + 1000*Math.random()),

          }
        );
      }
      this.dataSource = new MatTableDataSource(this.housingArr);
    });

    console.log(this.housingArr);
  //  this.dataSource = new MatTableDataSource(this.housingArr);
    console.log(db.object('/apartments').valueChanges().subscribe({
      next(num){
        //  console.log(num);
         // this.apts.push(num);
      }}

    ));

   }



  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}

/*
const housingArr: Housing[] = [
    new Housing('https://www.zillow.com/homes/for_rent/New-Brunswick-NJ-08901/5Y2YXC_bldg/61245_rid/featured_sort/40.535133,-74.379416,40.440349,-74.503012_rect/12_zm/', '5 Dennis St, New Brunswick, NJ 08901', 34.9, 44, 48.3, 56, 1600),
    new Housing('https://www.zillow.com/homes/for_rent/New-Brunswick-NJ-08901/5Xt3fR_bldg/61245_rid/featured_sort/40.529784,-74.375639,40.445706,-74.50696_rect/12_zm/', '10 Commercial Ave, New Brunswick, NJ', 34.5, 43, 47.9, 55, 1945),
    new Housing('google.com', '10 Landing Ln, New Brunswick, NJ', 36.6, 46, 50, 58, 1270),
    new Housing('google.com', '110 Somerset St, New Brunswick, NJ 08901', 35.7, 46, 49.1, 58, 1954),
    new Housing('google.com', '1 Richmond St, New Brunswick, NJ', 34.9, 44, 48.3, 56, 2062)


]
*/
