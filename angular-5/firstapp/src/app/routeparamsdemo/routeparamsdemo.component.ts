import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routeparamsdemo',
  templateUrl: './routeparamsdemo.component.html',
  styleUrls: ['./routeparamsdemo.component.css']
})
export class RouteparamsdemoComponent implements OnInit {

  id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
