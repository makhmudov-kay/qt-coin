import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* NG-ZORRO */
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { BannerComponent } from './components/banner/banner.component';
import { ChartComponent } from './components/chart/chart.component';
import { GuideComponent } from './components/guide/guide.component';
import { AboutComponent } from './components/about/about.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { SafetyComponent } from './components/safety/safety.component';
import { RequestComponent } from './components/request/request.component';
import { FaqComponent } from './components/faq/faq.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { EllipseComponent } from './components/ellipse/ellipse.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from './helpers/http-loader-factory';

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ChartComponent,
    GuideComponent,
    AboutComponent,
    AdvantagesComponent,
    SafetyComponent,
    RequestComponent,
    FaqComponent,
    EllipseComponent,
  ],
  imports: [
    /**
     * NGX-TRANSLATE
     */
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      }
    }),

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    /* NG-ZORRO */
    NzLayoutModule,
    NzGridModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    NzTypographyModule,
    NzFormModule,
    NzInputModule,
    NzSliderModule,
    NzCheckboxModule,
    NzCardModule,
    NzCollapseModule,
    NzModalModule,
    NzSpinModule,
    NzBackTopModule,
    NzDividerModule,
    NzStepsModule,
    NzCarouselModule,
    NzTagModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent],
})
export class AppModule {}
