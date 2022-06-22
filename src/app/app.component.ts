import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 12;
  }

  title = 'material-demo';
  notifications:number=0;
  showSpinner:boolean=false;
  opened:boolean= false;


  breakpoint:number;

  loadData(){
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }

  log(state){
    console.log(state);
  }

  onResize(event) {

    console.log("resizing" + event.target.innerWidth);

    let actualWidth:number =  event.target.innerWidth;

    console.log(actualWidth);
    if(actualWidth <= 1200){
      this.breakpoint = 6;
    }else{
      this.breakpoint = 12;
    }
    // this.breakpoint = ( <= 400) ? 1 : 12;
  }
}
