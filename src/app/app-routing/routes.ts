import { Routes } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { FooterComponent } from "../footer/footer.component";
import { HomeComponent } from "../home/home.component";
import { MenuComponent } from "../menu/menu.component";
import { ContactComponent } from './../contact/contact.component';
import { DishdetailComponent } from './../dishdetail/dishdetail.component';

export const routes:Routes=[
    {path:'home',component:HomeComponent},
    {path:'menu',component:MenuComponent},
    {path:'',redirectTo: '/home',pathMatch:'full'},
    {path:'contactus',component:ContactComponent},
    {path:'about',component:AboutComponent},
    {path:'dishdetail/:id',component:DishdetailComponent },
    {
        path:'footer',
        component:FooterComponent
    }

]