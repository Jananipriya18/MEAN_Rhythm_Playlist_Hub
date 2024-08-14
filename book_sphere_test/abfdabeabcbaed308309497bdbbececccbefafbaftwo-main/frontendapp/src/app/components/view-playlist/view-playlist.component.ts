import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service'; // Assuming you have a playlist service

@Component({
  selector: 'app-view-playlist',
  templateUrl: './view-playlist.component.html',
  styleUrls: ['./view-playlist.component.css'],
})
export class ViewPlaylistComponent implements OnInit {
  editingIndex: number | null = null;
  editedPlaylist: any = {}; // Adjust the type accordingly
  playlists: any[] = [];
  allPlaylists: any[] = []; // Store all playlists for search/reset functionality
  userRole: string | null = null;
  allUsers: any[] = []; // To store all users if needed
  searchText: string = ''; // For search functionality
  sortValue: string = ''; // For sorting functionality

  constructor(private playlistService: PlaylistService) {}

  ngOnInit() {
    this.userRole = localStorage.getItem('userRole');

    if (this.userRole === 'PlaylistAdministrator') {
      this.fetchPlaylistsForAdmin();
    } else {
      this.fetchAllPlaylistsWithAuthors();
    }
  }

  // Fetch playlists for Playlist Administrator
  fetchPlaylistsForAdmin() {
    this.playlistService.getPlaylistsByUserId().subscribe(
      (data) => {
        this.playlists = data;
        this.allPlaylists = data;
        console.log('Playlists fetched successfully for Playlist Administrator', data);
      },
      (error) => {
        console.error('Error fetching playlists for Playlist Administrator', error);
      }
    );
  }

  // Fetch all playlists and author information
  fetchAllPlaylistsWithAuthors() {
    this.playlistService.getAllPlaylists().subscribe(
      (playlistsData) => {
        this.playlists = playlistsData;
        this.allPlaylists = playlistsData;

        // Fetch all users to map to playlists
        this.playlistService.getAllUsers().subscribe(
          (usersData) => {
            this.allUsers = usersData;
            this.mapAuthorsToPlaylists();
            console.log('Authors fetched successfully', usersData);
          },
          (error) => {
            console.error('Error fetching authors', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching playlists', error);
      }
    );
  }

  // Map authors to their respective playlists
  mapAuthorsToPlaylists() {
    this.playlists = this.playlists.map((playlist) => {
      const matchingUser = this.allUsers.find((user) => user._id === playlist.userId);
      if (matchingUser) {
        playlist.authorInfo = {
          _id: matchingUser._id,
          firstName: matchingUser.firstName,
          lastName: matchingUser.lastName,
          // Add other user properties as needed
        };
      }
      return playlist;
    });
    console.log(this.playlists);
  }

  // Search playlists by the searchText
  searchPlaylists() {
    if (this.searchText) {
      this.playlistService.searchPlaylists(this.searchText).subscribe(
        (data) => {
          this.playlists = data;
          this.mapAuthorsToPlaylists();
          console.log('Playlists fetched successfully', data);
        },
        (error) => {
          console.error('Error searching playlists', error);
        }
      );
    } else {
      this.playlists = [...this.allPlaylists]; // Reset to all playlists if search is cleared
    }
  }

  // Sort playlists by the sortValue
  sortPlaylists() {
    this.playlistService.sortPlaylists(this.sortValue).subscribe(
      (data) => {
        this.playlists = data;
        this.mapAuthorsToPlaylists();
        console.log('Playlists sorted successfully', data);
      },
      (error) => {
        console.error('Error sorting playlists', error);
      }
    );
  }

  // Edit playlist functionality
  editPlaylist(index: number): void {
    this.editingIndex = index;
    this.editedPlaylist = { ...this.playlists[index] }; // Clone the playlist to edit
  }

  // Update playlist functionality
  updatePlaylist(index: number): void {
    this.playlists[index] = { ...this.editedPlaylist };
    this.playlistService.updatePlaylist(this.editedPlaylist).subscribe(
      (response) => {
        console.log('Playlist updated successfully', response);
        this.editingIndex = null;
      },
      (error) => {
        console.error('Error updating playlist', error);
      }
    );
  }

  // Cancel edit operation
  cancelEdit(): void {
    this.editingIndex = null;
  }

  // Delete playlist functionality
  deletePlaylist(index: number): void {
    const playlist = this.playlists[index];
    this.playlistService.deletePlaylist(playlist).subscribe(
      (response) => {
        console.log('Playlist deleted successfully', response);
        this.playlists.splice(index, 1); // Remove playlist from the array
      },
      (error) => {
        console.error('Error deleting playlist', error);
      }
    );
  }
}
