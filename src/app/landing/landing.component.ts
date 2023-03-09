import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingService } from 'src/services/services.service';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  $prodcuts:any;
  $cloudreport;
  selectedItem;
  constructor(private shopingService: ShoppingService,private route:Router,
    public detailComponent:DetailsComponent) { }

  ngOnInit(): void {
   this.$prodcuts = this.shopingService.getData();
   this.shopingService.getWeatherReport().subscribe((ele:any)=> {
    this.$cloudreport = ele.days;
    console.log( this.$cloudreport)
   });
  }

  weatherdetails(index) {
    debugger;
    this.selectedItem = this.$cloudreport.filter((ele,i)=> i == index);
    const sendData = {
      state: {
        data: this.selectedItem[0],
      },
    };
    this.route.navigate(['/weather-details'],sendData);
    this.shopingService.setWeather(this.selectedItem);
  }
}
