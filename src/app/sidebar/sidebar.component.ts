import { Component } from '@angular/core';
import { Sidebar } from '../services/sidebar.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
    constructor(public sidebar: Sidebar){}

    toggleSidebar(){
      this.sidebar.toggleSidebar();
      console.log("visiblity check")
    }
}
