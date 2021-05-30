import { Location } from '@angular/common';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../service/dish.service';
import { Dish } from './../shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
})
export class DishdetailComponent implements OnInit {
 dish :Dish;
  constructor(private dishService:DishService,private location:Location,private route:ActivatedRoute) {
    const id=this.route.snapshot.params['id'];
    this.dish=this.dishService.getDish(id);
  }

  ngOnInit(): void {}
  goBack():void{
    this.location.back();
  }
  
}

