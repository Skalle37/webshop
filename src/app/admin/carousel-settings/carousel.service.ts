import { Injectable } from '@angular/core';
import { CarouselImage } from 'src/app/models/carousel-image.model';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  images: CarouselImage[] = [
    { url: "https://picsum.photos/id/700/900/500", text: "Esimese pildi tekst", header: "Esimese pildi pealkiri", alt: "Siin on esimene pilt" },
    { url: "https://picsum.photos/id/533/900/500", text: "Teise pildi tekst", header: "Teise pildi pealkiri", alt: "Siin on teine pilt" },
    { url: "https://picsum.photos/id/807/900/500", text: "Kolmanda pildi tekst", header: "Kolmanda pildi pealkiri", alt: "Siin on kolmas pilt" },
    { url: "https://picsum.photos/id/124/900/500", text: "Neljanda pildi tekst", header: "Neljanda pildi pealkiri", alt: "Siin on neljas pilt" }
  ];

  carouselSettings: any = { 
    interval: 1000,
    wrap: true,
    keyboard: true,
    pauseOnHover: true  
  };

  constructor() { }
}
