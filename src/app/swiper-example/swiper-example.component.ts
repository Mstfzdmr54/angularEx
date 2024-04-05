import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-swiper-example',
  templateUrl: './swiper-example.component.html',
  styleUrls: ['./swiper-example.component.scss']
})
export class SwiperExampleComponent implements AfterViewInit {

  @ViewChild('swiper') swiper: ElementRef

  //https://swiperjs.com/swiper-api#events

  ngAfterViewInit() {
      if(this.swiper) {
        const options= {
          navigation: true,
          autoplay: {
            delay: 1000
          },
          breakpoints: {
             1200: {
               slidesPerView: 2
             }
          },
          on: {
            init: () => {
              console.log('swiper initialized')
            }
          }
        }
        Object.assign(this.swiper.nativeElement, options)
        setTimeout( () => {
          this.swiper.nativeElement.initialize()
        }, 3000)

      }
  }
}
