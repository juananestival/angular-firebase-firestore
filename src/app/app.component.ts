import { Component,OnInit } from '@angular/core';
import { Product } from '../app/models/product'
import { ProductService} from '../app/services/products.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-firebase-firestore';
  products: Product[] = [] 
  constructor(private productService:ProductService){

  }
  ngOnInit(): void {
    this.productService.listProducts().subscribe(products => this.products = products);
    console.log(`this ${this.products}`)
      
  }
}
