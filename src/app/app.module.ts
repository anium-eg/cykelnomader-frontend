import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputFieldComponent } from './shared/ui/input-field/input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './shared/ui/button/button.component';

import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/core/interceptors/auth.service';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { LoginPanelComponent } from './features/login-page/components/login-panel/login-panel.component';
import { TextToggleSliderComponent } from './features/login-page/components/role-toggle-slider/text-toggle-slider.component';
import { AdminDashboardComponent } from './features/dashboards/admin-dashboard/admin-dashboard.component';
import { DashboardSidebarComponent } from './features/dashboards/shared/dashboard-sidebar/dashboard-sidebar.component';
import { ProductCardComponent } from './features/dashboards/cashier-dashboard/inventory/components/product-card/product-card.component';
import { InventoryComponent } from './features/dashboards/cashier-dashboard/inventory/inventory.component';
import { CashierDashboardComponent } from './features/dashboards/cashier-dashboard/cashier-dashboard.component';
import { NewOrderComponent } from './features/dashboards/cashier-dashboard/new-order/new-order.component';
import { NewOrderStep1Component } from './features/dashboards/cashier-dashboard/new-order/new-order-step-1/new-order-step-1.component';
import { NewOrderStep2Component } from './features/dashboards/cashier-dashboard/new-order/new-order-step-2/new-order-step-2.component';
import { NewOrderStep3Component } from './features/dashboards/cashier-dashboard/new-order/new-order-step-3/new-order-step-3.component';
import { DropdownFieldComponent } from './shared/ui/dropdown-field/dropdown-field.component';
import { PaymentSuccessComponent } from './features/dashboards/cashier-dashboard/new-order/payment-success/payment-success.component';
import { PaymentFailComponent } from './features/dashboards/cashier-dashboard/new-order/payment-fail/payment-fail.component';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './features/dashboards/admin-dashboard/analytics/analytics.component';
import { ManageInventoryComponent } from './features/dashboards/admin-dashboard/manage-inventory/manage-inventory.component';
import { ManageUsersComponent } from './features/dashboards/admin-dashboard/manage-users/manage-users.component';
import { AdminInventoryProductCardComponent } from './features/dashboards/admin-dashboard/manage-inventory/components/admin-inventory-product-card/admin-inventory-product-card.component';
import { ProductEditComponent } from './features/dashboards/admin-dashboard/manage-inventory/product-edit/product-edit.component';




@NgModule({
  declarations: [

    AppComponent,
    LoginPageComponent,
    LoginPanelComponent,
    InputFieldComponent,
    ButtonComponent,
    TextToggleSliderComponent,
    AdminDashboardComponent,
    CashierDashboardComponent,
    DashboardSidebarComponent,
    ProductCardComponent,
    InventoryComponent,
    NewOrderComponent,
    NewOrderStep1Component,
    NewOrderStep2Component,
    NewOrderStep3Component,
    DropdownFieldComponent,
    PaymentSuccessComponent,
    PaymentFailComponent,
    AnalyticsComponent,
    ManageInventoryComponent,
    ManageUsersComponent,
    AdminInventoryProductCardComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
