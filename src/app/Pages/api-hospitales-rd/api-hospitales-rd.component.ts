import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-api-hospitales-rd',
  templateUrl: './api-hospitales-rd.component.html',
  styleUrls: ['./api-hospitales-rd.component.css']
})
export class ApiHospitalesRDComponent implements OnInit {

  constructor() {
    $(document).ready(function(){
      $(window).scrollTop(0);
  });
  }

  ngOnInit(): void {

  }

}
