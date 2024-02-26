import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import {CoinI} from '../../modelos/coin.interface';

@Component({
  selector: 'app-batatabit',
  templateUrl: './batatabit.component.html',
  styleUrls: ['./batatabit.component.css']
})
export class BatatabitComponent implements OnInit {

  data: any[]=[];
  allCoin: any [] = [];
  listCoin1: CoinI []= [];
  listCoin: any;
  OcultarCard: boolean = true;
  isModalOpen: boolean = false;

  constructor(private apiService:ApiService, private router:Router) { }

  
  ngOnInit(): void {
    this.consultarTodasCoin();
  }

  consultarCoinID(idCon: any){
    this.apiService.getDataCoin(idCon).subscribe(Data => {      
      this.data = Data[0];      
      this.listCoin=this.data;
      const cardTitle = document.getElementById("cardTitle");
      const valorCoin = document.getElementById("valorCoin");
      const rankCoin = document.getElementById("rankCoin");
      const simboloCoin = document.getElementById("simboloCoin");

      if (cardTitle){
        cardTitle.innerHTML=this.listCoin.name;
      } 
      if (valorCoin){
        valorCoin.innerHTML=this.listCoin.price_usd + ' USD';
      }
      if (rankCoin){
        rankCoin.innerHTML=this.listCoin.rank;
      } 
      if (simboloCoin){
        simboloCoin.innerHTML=this.listCoin.symbol;
      } 

      this.OcultarCard=false;
    })
  }

  consultarTodasCoin(){
    this.apiService.getDataAllCoin().subscribe(allCoin => { 
      this.allCoin = allCoin.data ;   
    })
  }

  verCoin(idCon: any){    
    this.consultarCoinID(idCon);
    this.isModalOpen = true;
  }

  openModal() {
    debugger
    this.isModalOpen = true;
    
  }

  closeModal() {
    debugger
    this.isModalOpen = false;
  }

}
