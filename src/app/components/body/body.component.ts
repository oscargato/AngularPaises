import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  paises: any[] = [];

  constructor(private http:HttpClient){ 
  		this.http.get('https://restcountries.eu/rest/v2/lang/es')
  		         .subscribe((data:any)=> {
  		         	this.paises = data;
  		         	console.log(data);
  		         })
  }
}
