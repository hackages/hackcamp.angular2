import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'bs-sidebar',
    templateUrl: 'sidebar.template.html'
})
export class SidebarComponent {
    @Output() sidebarHasBeenToggled;
    @Output() searchTermChanged = new EventEmitter();
    
    navClosed: boolean = true;

    toggleSideBar(): void {
        this.navClosed = !this.navClosed;
        this.sidebarHasBeenToggled.emit(this.navClosed);
    }

    search(searchTerm) {
    }
}