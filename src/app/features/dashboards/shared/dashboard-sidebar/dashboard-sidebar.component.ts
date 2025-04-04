import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface ActionItem{
  logo:string,
  text:string,
  link:string,
  isActive:boolean
}

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent {
  @Input() headerImageSrc:string = "";
  @Input() actionItems:ActionItem[] = [];

  constructor(private router:Router){}

  onActionSelect:Function = (selectedItem:ActionItem):void => {
    this.actionItems.map(item => item.isActive = false);
    selectedItem.isActive = true;
    this.router.navigateByUrl(selectedItem.link);
  }
}
