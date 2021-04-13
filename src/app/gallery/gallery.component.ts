import { Component, OnInit } from '@angular/core';
import { Gallery } from 'angular-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  word = 0;

  constructor(private gallery: Gallery) { }
imagesArray = [
  {path:'assets/images/image-folder/images/tobe.png', index:0},
  {path:'assets/images/image-folder/images/irregular.jpg', index:1},
  {path:'assets/images/image-folder/images/plural.jpg', index:2},
  {path:'assets/images/image-folder/images/plural2.jpg', index:3},
  {path:'assets/images/image-folder/images/phrases5.jpg', index:4},
  {path:'assets/images/image-folder/images/slang.png', index:5},
  {path:'assets/images/image-folder/images/br1.png', index:6},
  {path:'assets/images/image-folder/images/br2.png', index:7},
  {path:'assets/images/image-folder/images/frml.png', index:8},
  {path:'assets/images/image-folder/images/phrasal1.png', index:9},
]

  ngOnInit(): void {
  }
  showGallery(index: number){
    let prop = {
      images: [
        {path:'assets/images/image-folder/images/tobe.png', index:0},
        {path:'assets/images/image-folder/images/irregular.jpg', index:1},
        {path:'assets/images/image-folder/images/plural.jpg', index:2},
        {path:'assets/images/image-folder/images/plural2.jpg', index:3},
        {path:'assets/images/image-folder/images/phrases5.jpg', index:4},
        {path:'assets/images/image-folder/images/slang.png', index:5},
        {path:'assets/images/image-folder/images/br1.png', index:6},
        {path:'assets/images/image-folder/images/br2.png', index:7},
        {path:'assets/images/image-folder/images/frml.png', index:8},
        {path:'assets/images/image-folder/images/phrasal1.png', index:9},
      ],
      index
    };
    this.gallery.load (prop);
  }

}
