import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const chillRoutes: Routes =[
    {path:'',component:HomeComponent},
    {path: 'home', component:HomeComponent}
]

@NgModule({
    imports: [RouterModule.forChild(chillRoutes)],
    exports: [RouterModule],
    
})
export class RouterChildModule { }
