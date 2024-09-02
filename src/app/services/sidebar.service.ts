import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class Sidebar {
    private isVisible: boolean = false;

    constructor(){}

    toggleSidebar(): void {
        this.isVisible = !this.isVisible;
    }

    isSidebarVisible(): boolean {
        return this.isVisible;
    }
}