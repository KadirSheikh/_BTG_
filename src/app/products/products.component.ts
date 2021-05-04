import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productName: String;
  catName: String;
  subCatName: String;
  productId;
  showProductDeatil: boolean = true
  mekProducts: any = [
    {
      id: 1, name: 'MEK-2300 Consistency Transmitter',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      photoURL: '../../../assets/mek/mek-2300.png'
    },
    {
      id: 2, name: 'MEK-2400 Consistency Transmitter',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      photoURL: '../../../assets/mek/mek2400.png'
    },
    {
      id: 3, name: 'MEK-2500 Consistency Transmitter',
      description: `Rotating shear force transmitter for fiber consistency from 1 – 16%
      <br>
      The MEK-2500 RotoForceTM inline transmitter measures fiber consistency of pulp suspensions in the range of 1 – 16%. This rotating shear force transmitter works practically in every measuring position in pulping, bleaching and papermaking application.
      `,
      photoURL: '../../../assets/mek/mek-2500.png'
    },
    {
      id: 4, name: 'MEK-3000 Consistency Transmitter',
      description: `Rotating shear force transmitter for fiber consistency from 1 – 16%
      <br>
      The MEK-30000 TwinTorqueTM inline transmitter measures fiber consistency of pulp suspensions in the range of 1 – 16%. This rotating shear force transmitter works practically in every measuring position in pulping, bleaching and papermaking applications.`,
      photoURL: '../../../assets/mek/mek3000.png'
    }
  ];

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      this.productName = params['pname'];
      this.catName = params['catname'];
      this.subCatName = params['subname'];
      this.productId = params['id'];
    })

    if (this.productName != 'MEK') {
      this.showProductDeatil = false
    }
  }

}
