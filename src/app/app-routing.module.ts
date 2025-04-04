import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { AdminDashboardComponent } from './features/dashboards/admin-dashboard/admin-dashboard.component';
import { CashierDashboardComponent } from './features/dashboards/cashier-dashboard/cashier-dashboard.component';
import { InventoryComponent } from './features/dashboards/cashier-dashboard/inventory/inventory.component';
import { NewOrderStep1Component } from './features/dashboards/cashier-dashboard/new-order/new-order-step-1/new-order-step-1.component';
import { NewOrderStep2Component } from './features/dashboards/cashier-dashboard/new-order/new-order-step-2/new-order-step-2.component';
import { NewOrderStep3Component } from './features/dashboards/cashier-dashboard/new-order/new-order-step-3/new-order-step-3.component';
import { NewOrderComponent } from './features/dashboards/cashier-dashboard/new-order/new-order.component';
import { PaymentSuccessComponent } from './features/dashboards/cashier-dashboard/new-order/payment-success/payment-success.component';
import { PaymentFailComponent } from './features/dashboards/cashier-dashboard/new-order/payment-fail/payment-fail.component';
import { AnalyticsComponent } from './features/dashboards/admin-dashboard/analytics/analytics.component';
import { ManageInventoryComponent } from './features/dashboards/admin-dashboard/manage-inventory/manage-inventory.component';
import { ManageUsersComponent } from './features/dashboards/admin-dashboard/manage-users/manage-users.component';
import { ProductEditComponent } from './features/dashboards/admin-dashboard/manage-inventory/product-edit/product-edit.component';



const routes: Routes = [
  {path:"", component:LoginPageComponent},
  {path:"login", component:LoginPageComponent},
  {path:"portal/admin", component:AdminDashboardComponent, children:
    [
      {path:"analytics",component:AnalyticsComponent},
      {path:"inventory",component:ManageInventoryComponent},
      {path:"edit-product", component:ProductEditComponent},
      {path:"users", component:ManageUsersComponent}
    ]
  },
  {path:"portal/cashier", component:CashierDashboardComponent, children:[
    {path:"inventory", component:InventoryComponent},
    {path:"new-order", component:NewOrderComponent,children:[
      {path:"step-1", component:NewOrderStep1Component},
      {path:"step-2", component:NewOrderStep2Component},
      {path:"step-3", component:NewOrderStep3Component},
      {path:"success", component:PaymentSuccessComponent},
      {path:"fail", component:PaymentFailComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
