import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
    drinkList = [
  {
    sr: 1,
    name: 'Orange',
    juice: 'Orange Juice',
    flavor: 'Guava Flavor',
    image: 'https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg'
  },
  {
    sr: 2,
    name: 'Apple',
    juice: 'Apple Juice',
    flavor: 'Mint Flavor',
    image: 'https://github.com/singhps18/admin-pannel/blob/main/src/assets/pngtree-imported-wine-bottle-image_1246181-removebg-preview.png'
  },
  {
    sr: 3,
    name: 'Grape',
    juice: 'Grape Juice',
    flavor: 'Berry Flavor',
    image: 'https://media.istockphoto.com/id/1226073441/photo/purple-lavender-field-of-provence-at-sunset.jpg?s=612x612&w=0&k=20&c=CuOQiydv-xkvFANdUkUM_BOXc0oL3CIKDHBlo6yeQ5U='
  },
  {
    sr: 4,
    name: 'Pineapple',
    juice: 'Pineapple Juice',
    flavor: 'Lime Flavor',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzohDi40SXZ2Q9LFd-DMX1o4VJfHA4l4pQw&s'
  }
];



 getDrinks() {
    return this.drinkList;
  }
}
