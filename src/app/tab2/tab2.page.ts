import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  angka = Math.floor(Math.random() * 10);
  textjawaban;
  Tebak(){
    if(this.textjawaban == this.angka){
      document.getElementById("tempatFoto").innerHTML="<img src='../assets/unnamed.png' height='250px' width='250px'>";
    }
    else alert("Jawabanmu Salah!");
  }
}
