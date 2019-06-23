import { Component, isDevMode } from '@angular/core';
declare const fbq;

@Component({
  selector: 'app-picker',
  templateUrl: 'picker.page.html',
  styleUrls: ['picker.page.scss'],
})
export class PickerPage {

  public goalReached = false;
  public items = [
    {
      'id': 1,
      'title': 'Кофточка',
      'include': ['Пошаговое описание', 'Видео', 'Видеоматериал', 'Схемы'],
      'icon': 'img/picker/jacket-icon.png',
      'photo': 'assets/img/full.jpg',
      'background_size': '391%',
      'position_x': '265px',
      'position_y': '156px',
      disabled: false
    },
    {
      'id': 2,
      'title': 'Боди',
      'include': ['Пошаговое описание', 'Схемы', 'Видеоматериал', 'Видео'],
      'icon': 'img/picker/body-icon.png',
      'photo': 'assets/img/full.jpg',
      'background_size': '482%',
      'position_x': '100px',
      'position_y': '212px',
      disabled: false
    },
    {
      'id': 3,
      'title': 'Носочки',
      'include': ['Пошаговое описание', 'Видео', 'Видеоматериал', 'Схемы'],
      'icon': 'img/picker/socks-icon.png',
      'photo': 'assets/img/full.jpg',
      'background_size': '545%',
      'position_x': '198px',
      'position_y': '295px',
      disabled: false
    },
    {
      'id': 4,
      'title': 'Шапочка',
      'include': ['Пошаговое описание', 'Схемы', 'Видеоматериал', 'Видео'],
      'icon': 'img/picker/hat-icon.png',
      'photo': 'assets/img/full.jpg',
      'background_size': '444%',
      'position_x': '279px',
      'position_y': '277px',
      disabled: false
    },
    {
      'id': 5,
      'title': 'Штанишки',
      'include': ['Пошаговое описание', 'Видео', 'Видеоматериал', 'Схемы'],
      'icon': 'img/picker/pants-icon.png',
      'photo': 'assets/img/full-2.jpg',
      'background_size': '272%',
      'position_x': '138px',
      'position_y': '83px',
      disabled: false
    }
  ];
  constructor() {}
  
  goNext() {
    if (!this.goalReached && !isDevMode()) {
      // Metrika goal
      window['yaCounter52295947'].reachGoal('stepSecond');
      // Facebook goal
      if (typeof fbq !== 'undefined') {
        fbq('track', 'step2Done');
      }
      this.goalReached = true;
    }
  }
}
