import { Component, OnInit } from '@angular/core';
import { IProduct} from './product';


@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 pageTitle:string = "Product List";
 imgWidth:number =50;
 imgHeight:number=50;
 showImage:boolean=false;
 _listFilter:string;


 get listFilter(): string {
 return this._listFilter;
 }
 set listFilter(value: string) {
   this._listFilter=value;
   this.filteredProducts=this.listFilter ? this.performFilter(this.listFilter):this.products;
 }






filteredProducts: IProduct[];
products: IProduct[] = [
  {
  productId: 1,
  productName: "Grand Cart",
  productCode:"GDN-00677",
  releaseDate:"18 Mar 2019",
  descripton:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  price:5464,
  starRating:4.3,
  imageUrl:"https://estarelektro.nl/image/cache/data/RENNSTEIG/102_6948--0101_N-525x525.gif"
},
{
  productId:2,
  productName: "Hammar",
  productCode:"GDN-9489",
  releaseDate:"18 Mar 2017",
  descripton:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  price:5655,
  starRating:3.3,
  imageUrl:"https://images-na.ssl-images-amazon.com/images/I/81u7Z4TdueL._SL1500_.jpg"
}
]

  ngOnInit(): void {
    console.log("malik awais");
  }
  showHide(): void {
    this.showImage = !this.showImage;
  }
constructor () {
  this.filteredProducts =this.products;
  this.listFilter="cart";
}
onRatingClicked(message: string ): void{
  this.pageTitle ='Product List' +message;
}


performFilter(filterBy:string): IProduct[]{
  filterBy=filterBy.toLocaleLowerCase();
  return this.products.filter((product:IProduct)=>
  product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1)
}


}
