import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-batatabit',
  templateUrl: './batatabit.component.html',
  styleUrls: ['./batatabit.component.css']
})
export class BatatabitComponent implements OnInit {

  data: any[]=[];
  allCoin: any [] = [];

  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.consultarCoinID();
    this.consultarTodasCoin();
  }

  consultarCoinID(){
    this.apiService.getDataCoin("").subscribe(data => {      
      this.data = data;      
      console.log(this.data);
    })
  }

  consultarTodasCoin(){
    this.apiService.getDataAllCoin().subscribe(allCoin => {      
      this.allCoin = allCoin;      
      console.log(this.allCoin);
    })
  }

}
