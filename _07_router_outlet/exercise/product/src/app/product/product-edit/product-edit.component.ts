import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/product';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });
  categorys: Category[];
  product: Product;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllCategory().subscribe(
      value => {this.categorys = value; },
      error => {},
      () => {
        const id = Number(this.activatedRoute.snapshot.params.id);
        this.productService.findById(id).subscribe(
          value => {this.product = value; },
          error => {},
          () => this.productForm.setValue(this.product)
        );
      });
  }

  submit() {
    const product = this.productForm.value;
    console.log(product);
    this.productService.updateProduct(product).subscribe(
      value => {},
      error => {},
      () => {
        this.router.navigateByUrl('/');
      }
    );
  }
}
