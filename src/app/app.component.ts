import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-bootstrap';
  imageList: string[] = [];

  constructor() {
    this.imageList.push('a');
    this.imageList.push('a');
    this.imageList.push('a');
    this.imageList.push('a');
    this.imageList.push('a');
    this.imageList.push('a');
    this.imageList.push('a');
    this.imageList.push('a');
  }

  onScroll(event: any) {
    // visible height + pixel scrolled >= total height
    if (
      event.target.offsetHeight + event.target.scrollTop >=
      event.target.scrollHeight
    ) {
      console.log('End');
      setTimeout(() => {
        this.addData();
      }, 1000);
    }
  }

  addData() {
    this.imageList.push('a');
    this.imageList.push('a');
    this.imageList.push('a');
    this.imageList.push('a');
    this.imageList.push('a');
    this.imageList.push('a');
    this.imageList.push('a');
    this.imageList.push('a');
  }
}
