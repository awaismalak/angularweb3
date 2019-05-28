import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 pageTitle:string ="Product List";
 imgWidth:number =50;
 imgHeight:number=50;
 showImage:boolean=false;
products: any[] = [
  {
  productId:1,
  productName:"Grand Cart",
  productCode:"GDN-00677",
  releaseDate:"18 Mar 2019",
  descripton:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  price:5464,
  starRating:4.3,
  imageUrl:"https://estarelektro.nl/image/cache/data/RENNSTEIG/102_6948--0101_N-525x525.gif"
},
{
  productId:2,
  productName:"Hammar",
  productCode:"GDN-9489",
  releaseDate:"18 Mar 2017",
  descripton:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  price:5655,
  starRating:3.3,
  imageUrl:"https://images-na.ssl-images-amazon.com/images/I/81u7Z4TdueL._SL1500_.jpg"
}
]









  constructor() { }

  ngOnInit() {
  }
  showHide(): void {
    this.showImage = !this.showImage;
  }
}
