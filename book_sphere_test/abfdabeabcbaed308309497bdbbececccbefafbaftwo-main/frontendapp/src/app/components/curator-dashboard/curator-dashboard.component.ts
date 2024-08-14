import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curator-dashboard',
  templateUrl: './curator-dashboard.component.html',
  styleUrls: ['./curator-dashboard.component.css']
})
export class CuratorDashboardComponent {

  logout(): void {
    // Perform logout logic here
    // For example, clear user authentication, navigate to the login page, etc.
    console.log('Logout clicked');
    // For demonstration purposes, let's navigate to the login page
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    window.location.href = '/login';
  }

}
