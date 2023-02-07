import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
/////////////////////////////////////////
class Point {
  constructor(private x?: number, private y?: number) {}

  draw() {
    console.log('X:' + this.x + ', Y: ' + this.y);
  }
  getX() {
    return this.x;
  }
}
let point = new Point(1, 2);
console.log(point.getX());
point.draw();
