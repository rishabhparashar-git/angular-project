import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Color } from 'src/app/services/products/color';
import { ColorsService } from 'src/app/services/products/colors.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  colorForm!: FormGroup;
  colorObject: Color = {
    id: '',
    code: '',
  };
  colors: Color[] | null = null;

  constructor(private colorsService: ColorsService, private fb: FormBuilder) {
    this.colorForm = this.fb.group({
      code: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getAllColors();
  }

  addColor() {
    const { value } = this.colorForm;
    console.log(value);
    this.colorObject.code = value.code;
    this.colorsService.addColor(this.colorObject).then((color) => {
      if (color) {
        console.log('color added successfully');
      }
    });
  }

  getAllColors() {
    this.colorsService.getColors().subscribe((res: Color[]) => {
      this.colors = res;
    });
  }

  deleteColor(color: Color) {
    this.colorsService.deleteColor(color);
  }

  enableEdit(currentColor: Color) {
    this.colorObject = currentColor;
  }

  updateColor() {
    const { value } = this.colorForm;
    this.colorObject.code = value.code;
    this.colorsService.updateColor(this.colorObject).then(() => {});
  }
}
