import { Component } from '@angular/core';
import { ActionItem } from '../shared/dashboard-sidebar/dashboard-sidebar.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  
  actionItems:ActionItem[]= [
    {
      logo:"/assets/images/dashboard/admin/actions/Analytics.svg",
      link:"/portal/admin/analytics",
      text:"Analytics",
      isActive:true
    },
    {
      logo:"/assets/images/dashboard/admin/actions/ManageInventory.svg",
      link:"/portal/admin/inventory",
      text:"Manage Inventory",
      isActive:false
    },
    {
      logo:"/assets/images/dashboard/admin/actions/ManageUsers.svg",
      link:"/portal/admin/users",
      text:"Manage Users",
      isActive:false
    },
  ]
}

