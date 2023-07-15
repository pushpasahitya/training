import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';


import { AboutusComponent } from './aboutus/aboutus.component';

import { PowerbiComponent } from './powerbi/powerbi.component';
import { PythonComponent } from './python/python.component';
import { SapComponent } from './sap/sap.component';
import { AwsComponent } from './aws/aws.component';
import { AzureComponent } from './azure/azure.component';
import { DevopsComponent } from './devops/devops.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DigitalComponent } from './digital/digital.component';
import { MicroComponent } from './micro/micro.component';
import { ContactComponent } from './contact/contact.component';
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


const routes: Routes = [
  {path:'first',redirectTo:'first',pathMatch:'full'},
  {path:'mainpage',redirectTo:'mainpage',pathMatch:'full'},
  {path:'first',component:FirstComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contact',component:ContactComponent},
  {path:'powerbi',component:PowerbiComponent},
  {path:'python',component:PythonComponent},
  {path:'sap',component:SapComponent},
  {path:'aws',component:AwsComponent},
  {path:'azure',component:AzureComponent},
  {path:'devops',component:DevopsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'digital',component:DigitalComponent},
  {path:'micro',component:MicroComponent},
  {path:'django',component:DjangoComponent},
  {path:'fico',component:FicoComponent},
  {path:'mm',component:MmComponent},
  {path:'abap',component:AbapComponent},
  {path:'basis',component:BasisComponent},
  {path:'sd',component:SdComponent},
  {path:'hana',component:HanaComponent},
  {path:'pp',component:PpComponent},
  {path:'grc',component:GrcComponent},
  {path:'courses',component:CourseComponent},
    {path:'**',component:MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
