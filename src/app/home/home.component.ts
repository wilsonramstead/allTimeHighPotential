import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { __await } from 'tslib';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mobile: any;
  screenHeight: number;
  screenWidth: number;
  allAssets: any;
  newAsset: any;
  pricesDictionary: any;
  totalCurrentValue: any;
  totalATHvalue: any;
  assetType: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getScreenSize();
    this.assetType = 'stock';
    this.allAssets = [];
    this.totalCurrentValue = 0;
    this.totalATHvalue = 0;
    this.pricesDictionary = { 'Apple': [180.96, 0, 'AAPL'], 'atom': [44.45, 0], 'Avalanche': [144.96, 0, 'X:AVAXUSD'], 'Bitcoin': [69044.77, 0, 'X:BTCUSD'], 'Cardano': [3.09, 0, 'X:ADAUSD'], 'Ethereum': [4878.26, 0, 'X:ETHUSD'], 'Facebook': [382.18, 0, 'META'], 'Microsoft': [339.89, 0, 'MSFT'], 'Nvidia': [333.49, 0, 'NVDA'], 'Polygon': [2.92, 0, 'X:MATICUSD'], 'Solana': [259.96, 0, 'X:SOLUSD'], 'Sand': [8.40, 0, 'X:SANDUSD'], 'Tesla': [409.97, 0, 'TSLA'], 'Unity': [201.12, 0, 'U'], 'Vechain': [0.280991, 0, 'X:VETUSD']}
    this.newAsset = { 'assetName': '', 'assetAmount': 0, 'todayValue': 0, 'previousATHvalue': 0,}
  }
  addAsset() {
    this.newAsset.previousALTvalue = parseFloat(String(Number(this.newAsset.assetAmount) * Number(this.pricesDictionary[this.newAsset.assetName][0]))).toFixed(2);
    this.totalATHvalue = parseFloat(String(Number(this.totalATHvalue) + Number(this.newAsset.previousALTvalue))).toFixed(2);
    this.newAsset.todayAssetPrice = parseFloat(String(this.pricesDictionary[this.newAsset.assetName][1])).toFixed(2);
    this.newAsset.todayValue = parseFloat(String(this.newAsset.assetAmount * this.pricesDictionary[this.newAsset.assetName][1])).toFixed(2);
    this.totalCurrentValue = parseFloat(String(Number(this.totalCurrentValue) + Number(this.newAsset.todayValue))).toFixed(2);
    this.allAssets.push(this.newAsset);
    this.newAsset = { 'assetName': '', 'assetAmount': 0, 'todayValue': 0, 'previousATHvalue': 0,}
  }
  changeAssetType(input) {
    this.assetType = input;
  }
  clearAssets() {
    this.allAssets = [];
    this.totalCurrentValue = 0;
    this.totalATHvalue = 0;
  }
  getPriceInfo(selectedOption) {
    this.http.get<any>('https://api.polygon.io/v2/aggs/ticker/' + this.pricesDictionary[selectedOption][2] + '/prev?adjusted=true&apiKey=ZniEFUGxWV3dk4HeEpD5vQoVE2J56qbc', {}).subscribe(data => {
      this.pricesDictionary[selectedOption][1] = data.results[0]['c']; // this is returning the close price of previous day close price, api reference: https://polygon.io/docs/crypto/get_v2_aggs_ticker__cryptoticker__prev
    });
   }
   @HostListener('window:resize', ['$event'])
   getScreenSize(event?) {
         this.screenHeight = window.innerHeight;
         this.screenWidth = window.innerWidth;
         if(this.screenWidth >= 641) {
           this.mobile = 'no'
         } else {
           this.mobile = 'yes'
         }
   }
}
