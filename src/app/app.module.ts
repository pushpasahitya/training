import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';

import { PowerbiComponent } from './powerbi/powerbi.component';
import { PythonComponent } from './python/python.component';
import { SapComponent } from './sap/sap.component';
import { DevopsComponent } from './devops/devops.component';
import { AwsComponent } from './aws/aws.component';
import { DigitalComponent } from './digital/digital.component';
import { MicroComponent } from './micro/micro.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { DjangoComponent } from './django/django.component';
import { FicoComponent } from './fico/fico.component';
import { MmComponent } from './mm/mm.component';
import { AbapComponent } from './abap/abap.component';
import { SdComponent } from './sd/sd.component';
import { HanaComponent } from './hana/hana.component';
import { PpComponent } from './pp/pp.component';
import { GrcComponent } from './grc/grc.component';
import { BasisComponent } from './basis/basis.component';
import { CourseComponent } from './course/course.component';
import { FirstComponent } from './first/first.component';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    AboutusComponent,
    GalleryComponent,
    PowerbiComponent,
    PythonComponent,
    SapComponent,
    DevopsComponent,
    AwsComponent,
    DigitalComponent,
    MicroComponent,
    ContactComponent,
    DjangoComponent,
    FicoComponent,
    MmComponent,
    AbapComponent,
    SdComponent,
    HanaComponent,
    PpComponent,
    GrcComponent,
    BasisComponent,
    CourseComponent,
    FirstComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
