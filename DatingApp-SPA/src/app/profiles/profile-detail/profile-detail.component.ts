import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
//import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { UserService } from 'src/app/_service/user.service';


@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})

export class ProfileDetailComponent implements OnInit {
  user!: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data=>{
      this.user = data['user'];
    });
    this.galleryOptions = [
      {
        width:'500px',
        height:'500px',
        imagePercent:100,
        thumbnailsColumns :4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];
    this.galleryImages= this.getImages();
  
   
  }
  getImages(){
    const ImageUrls= [];
    for (const photo of this.user.photos) {
      ImageUrls.push({
        small:photo.url,
        medium:photo.url,
        big:photo.url,
        description:photo.description,
      });
    }
    return ImageUrls;
  }
  
}
