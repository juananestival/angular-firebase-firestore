import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { Product } from '../models/product'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsCollection:AngularFirestoreCollection<Product>
  products: Observable<Product[]>;


  constructor(
    private afs:AngularFirestore,

    ) { 
    this.productsCollection = this.afs.collection('products', ref => ref.orderBy('owner', 'asc'))
  }

  
  listProducts():Observable<Product[]> {
    // Get the clients with the id
    this.products = this.productsCollection.snapshotChanges().pipe(
      map(changes => { 
        return changes.map(action => {
          const data = action.payload.doc.data() as Product
          data.id = action.payload.doc['id']
          console.log(`Product data from firestore ${data.brand}`)
          return data
        })
      })
    )
    return this.products

  }

  


  }

