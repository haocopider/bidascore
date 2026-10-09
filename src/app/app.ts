import { Component } from '@angular/core';

interface GameMode {
  number: string;
  name: string;
  detail: string;
  accent: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly playStoreUrl = 'https://play.google.com/store/apps/details?id=com.bidascore.app';

  protected readonly gameModes: GameMode[] = [
    {
      number: '01',
      name: 'American Pool',
      detail: 'Race hoặc Set',
      accent: 'lime',
    },
    {
      number: '02',
      name: 'Chinese Pool',
      detail: 'Theo dõi từng ván đấu',
      accent: 'orange',
    },
    {
      number: '03',
      name: 'Đánh đền Việt Nam',
      detail: '369 · 579',
      accent: 'blue',
    },
  ];
}
