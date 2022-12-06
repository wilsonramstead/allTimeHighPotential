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
    this.pricesDictionary = { 
      'Amazon': [186.57, 0, 'AMZN', 'Jul 08, 2021'], 
      'Apple': [180.96, 0, 'AAPL', 'Jan 03, 2022'], 
      'Atom': [44.45, 0, 'X:ATOMUSD', 'Jan 17, 2022'], 
      'Avalanche': [144.96, 0, 'X:AVAXUSD', 'Nov 21, 2021'],
      'Bitcoin': [69044.77, 0, 'X:BTCUSD', 'Nov 10, 2021'], 
      'BITW': [136, 0, 'BITW', 'Feb 19, 2021'], 
      'Cardano': [3.09, 0, 'X:ADAUSD', 'Sep 02, 2021'], 
      'Chainlink': [52.70, 0, 'X:LINKUSD', 'Nov 21, 2021'],
      'Decentraland': [5.85, 0, 'X:MANAUSD', 'Nov 25, 2021'],
      'DOGE': [0.731578, 0, 'X:DOGEUSD', 'May 08, 2021'],
      'Ethereum': [4878.26, 0, 'X:ETHUSD', 'Nov 10, 2021'],
      'Facebook': [382.18, 0, 'META', 'Sep 07, 2021'], 
      'Fantom': [3.46, 0, 'X:FTMUSD', 'Oct 28, 2021'],
      'Google': [150.71, 0, 'GOOG', 'Nov 18, 2021'], 
      'Litecoin': [410.26, 0, 'X:LTCUSD', 'May 10, 2021 '],
      'Matterport': [33.05, 0, 'MTTR', 'Nov 29, 2021'], 
      'Microsoft': [339.89, 0, 'MSFT', 'Nov 19, 2021'], 
      'Nike': [114.18, 0, 'NKE', 'Nov 05, 2021'],
      'Nvidia': [333.49, 0, 'NVDA', 'Nov 29, 2021'], 
      'Polkadot': [54.98, 0, 'X:DOTUSD', 'Nov 04, 2021'],
      'Polygon': [2.92, 0, 'X:MATICUSD', 'Dec 27, 2021'],
      'QQQ': [403.48, 0, 'QQQ', 'Dec 27, 2021'],
      'Roblox': [134.72, 0, 'RBLX', 'Nov 19, 2021'], 
      'Sand': [8.40, 0, 'X:SANDUSD', 'Nov 25, 2021'], 
      'SHIB': [0.00008616, 0, 'X:SHIBUSD', 'Oct 28, 2021'],
      'Solana': [259.96, 0, 'X:SOLUSD', 'Nov 06, 2021'], 
      'SPY': [477.71, 0, 'SPY', 'Jan 3, 2021'],
      'Starbucks': [122.13, 0, 'SBUX', 'Jul 26, 2021'],
      'Target': [260.99, 0, 'TGT', 'Nov 16, 2021'],
      'Tesla': [409.97, 0, 'TSLA', 'Nov 04, 2021'], 
      'Tron': [0.231673, 0, 'X:TRXUSD', 'Jan 05, 2018'],
      'Unity': [201.12, 0, 'U', 'Nov 18, 2021'], 
      'Vechain': [0.280991, 0, 'X:VETUSD', 'Apr 19, 2021'],
      'VOO': [439.25, 0, 'VOO', 'Jan 3, 2021'],
      'XRP': [3.40, 0, 'X:XRPUSD', 'Jan 07, 2018']
    }
    this.newAsset = { 'assetName': '', 'assetAmount': 0, 'todayValue': 0, 'previousATHvalue': 0,}
  }
  addAsset() {
    this.newAsset.previousATHvalue = parseFloat(String(Number(this.newAsset.assetAmount) * Number(this.pricesDictionary[this.newAsset.assetName][0]))).toFixed(2);
    this.totalATHvalue = parseFloat(String(Number(this.totalATHvalue) + Number(this.newAsset.previousATHvalue))).toFixed(2);
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
   removeAsset(index, currentValue, potentialValue) {
    this.totalCurrentValue = parseFloat(String(Number(this.totalCurrentValue) - Number(currentValue))).toFixed(2);
    this.totalATHvalue = parseFloat(String(Number(this.totalATHvalue) - Number(potentialValue))).toFixed(2);
    this.allAssets.splice(index,1);
   }
}
