import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { APP_CONFIG } from './app.config-data';

type GameMode = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  className: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  readonly config = APP_CONFIG;
  menuOpen = false;

  readonly logoUrl = '/assets/images/logo.png';
  readonly homeScreenshotUrl = '/assets/images/home.jpg';
  readonly matchScreenshotUrl = '/assets/images/home.jpg';

  readonly modes: GameMode[] = [
    {
      number: '01',
      title: 'American Pool',
      subtitle: 'BIDA LỖ KIỂU MỸ',
      description: 'Theo dõi điểm số trong những trận American Pool với thao tác ghi điểm thuận tiện.',
      className: 'american',
      image: '/assets/images/gametype1.jpg',
      imageWidth: 2000,
      imageHeight: 924
    },
    {
      number: '02',
      title: 'Chinese Pool',
      subtitle: 'CHINESE POOL',
      description: 'Hỗ trợ ghi điểm cho thể thức Chinese Pool, để bạn tập trung vào từng đường cơ.',
      className: 'chinese',
      image: '/assets/images/gametype2.jpg',
      imageWidth: 924,
      imageHeight: 2000
    },
    {
      number: '03',
      title: 'Đánh đền',
      subtitle: 'THỂ THỨC ĐÁNH ĐỀN',
      description: 'Ghi nhận điểm số trong trận đấu đánh đền một cách rõ ràng, dễ theo dõi.',
      className: 'den',
      image: '/assets/images/gametype3.jpg',
      imageWidth: 2000,
      imageHeight: 924
    }
  ];

  get hasGooglePlay(): boolean {
    return this.isValidUrl(this.config.googlePlayUrl);
  }

  get hasApk(): boolean {
    return this.config.apkDownloadUrl.length > 0;
  }

  get hasPrivacyPolicy(): boolean {
    return this.isValidUrl(this.config.privacyPolicyUrl);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.closeMenu();
  }

  private isValidUrl(value: string): boolean {
    return /^https?:\/\/\S+$/i.test(value);
  }
}
