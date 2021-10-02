import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-inicio',
  templateUrl: './navbar-inicio.component.html',
  styleUrls: ['./navbar-inicio.component.css']
})
export class NavbarInicioComponent implements OnInit {
  uid
  constructor(private aRoute: ActivatedRoute, private router: Router) {
    this.uid = this.aRoute.snapshot.paramMap
    console.log(this.uid)
   }

  ngOnInit(): void {

  }

}
