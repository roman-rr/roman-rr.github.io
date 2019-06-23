import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePage } from './home/home.page';
import { PickerPage } from './picker/picker.page';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: HomePage },
  { path: 'picker', component: PickerPage }
];

@NgModule({
  declarations: [AppComponent, HomePage, PickerPage],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      // mode: 'ios'
    }),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
