import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-api-centros-educativos-rd',
  templateUrl: './api-centros-educativos-rd.component.html',
  styleUrls: ['./api-centros-educativos-rd.component.css']
})
export class ApiCentrosEducativosRDComponent implements OnInit {

  constructor() {
    $(document).ready(function(){
      $(window).scrollTop(0);
  });
  }

  ngOnInit(): void {
  }

}
