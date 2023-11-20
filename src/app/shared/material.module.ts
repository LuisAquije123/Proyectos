import {NgModule} from "@angular/core";
import {AppComponent} from "../app.component";
import {FooterComponent} from "../components/footer/footer.component";
import {HomeComponent} from "../components/home/home.component";
import {LoginComponent} from "../components/login/login.component";
import {ProductDetailsComponent} from "../components/product-details/product-details.component";
import {ProductsComponent} from "../components/products/products.component";
import {RegisterComponent} from "../components/register/register.component";
import {ToolbarComponent} from "../components/toolbar/toolbar.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule,
    MatSelectModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule,
    MatSelectModule
  ]
})
export class MaterialModule { }

