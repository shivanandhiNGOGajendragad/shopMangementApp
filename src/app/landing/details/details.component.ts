import { Component, Injectable, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingService } from 'src/services/services.service';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() details;
  myData = null;
  constructor(private shoppingService:ShoppingService,private location:Location,private route:Router) { }
  
  ngOnInit(): void {
    //@ts-ignore
    this.myData = this.location.getState().data;
    this.myData == null? this.route.navigate(['/']): '';
  }

  getSelectedValue() {
    this.shoppingService.getWeather().subscribe(ele=> this.myData = ele);
  }
}
