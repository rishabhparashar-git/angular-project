import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  prod = {
    id: '1x1FfN0HGEfxe8ALBfeH',
    category: 'headphone',
    title: 'Boult Audio Airbass Z20 TWS',
    colors: [
      {
        name: 'olive',
        code: '#1f3627',
        image: 'https://m.media-amazon.com/images/I/61yEaTpcHTL._SX522_.jpg',
      },
      {
        name: 'black',
        code: '#000000',
        image: 'https://m.media-amazon.com/images/I/71zqydP677L._SX522_.jpg',
      },
    ],
    offers: [],
    boxContains:
      '1 Charging Case, 2 True Wireless Earbuds, 2 Extra Earbuds, Charging Cable, Instruction Manual',
    price: 5499,
    brandName: 'boult audio',
    brandLogo:
      'https://i0.wp.com/www.itvoice.in/wp-content/uploads/2019/07/Boult-Audio-LOGO.jpg?ssl=1',
    techSpecs: [
      ['Model Name', 'airbass y1 wireless earphones'],
      ['Headphone Type', 'True Wireless'],
      ['Inline Remote', 'Yes'],
      ['Headphone Design', 'Earbud'],
      ['Wireless Type', 'Bluetooth'],
      ['Wireless Range', '10 m'],
      ['Battery Type', 'Lithium Ion'],
      ['Domestic Warranty', '1 Year'],
      ['Covered in Warranty', 'Manufacturing Defects'],
      ['Not Covered in, Warranty', 'Physical Damage'],
    ],
    description: [
      'Offers playback time of up to 10 hours for every charge. Carrying case can give 4 additional charges to the earbuds making total play-time of up to 40 Hours.Note : If the size of the earbud tips does not match the size of your ear canals or the headset is not worn properly in your ears, you may not obtain the correct sound qualities or call performance. Change the earbud tips to ones that fit more snugly in your ears',
      'Touch Controls & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls. Voice assistant function lets you access Siri/Google Assistant.',
      'Automatically pair with your device as soon as you take them out of the case. No need to manually pair to your device each time',
      'IPX5 Water Resistant - Can comfortably be used in the outdoors or in the gym.',
    ],
    displayImages: [
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/d4f86081-5034-40d5-a792-b8a901e043b6.__CR0,0,970,600_PT0_SX970_V1___.jpg',
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/609e588d-404d-4f6b-ab51-9fca831a14e5.__CR0,0,970,600_PT0_SX970_V1___.jpg',
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/bd71782e-712c-4628-be2d-fe6cb3fb5f15.__CR0,0,970,600_PT0_SX970_V1___.jpg',
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/dc8149fb-d420-4ec6-8618-1a4b9ef49a67.__CR0,0,970,600_PT0_SX970_V1___.jpg',
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/20003d5f-dc1c-4c97-90c4-8f3c08275fea.__CR0,0,970,600_PT0_SX970_V1___.jpg',
    ],
  };

  selectedImage = this.prod.colors[0].image;
  selectedImageAlt = this.prod.title + ' ' + this.prod.colors[0].name;
  selectedColorCode = this.prod.colors[0].code;
  discountedPrice = Math.floor((this.prod.price / 100) * 75);
  constructor() {
    console.log(this.selectedColorCode);
  }

  ngOnInit(): void {}
}
