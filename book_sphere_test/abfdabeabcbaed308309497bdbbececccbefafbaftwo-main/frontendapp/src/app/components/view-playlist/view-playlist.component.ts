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

  constructor(private playlistService: PlaylistService) {}

  playlists: any[] = [];
  allPlaylists: any[] = []; // Declare the allPlaylists variable
  userRole: string | null = null;
  allUsers: any[] = []; // Updated variable name to allUsers

  ngOnInit() {
    // include authorPlaylists method in ngOnInit
    this.userRole = localStorage.getItem('userRole');
    if (this.userRole == 'PlaylistAdministrator') {
      this.playlistService.getPlaylistsByUserId().subscribe(
        (data) => {
          console.log(data);
          this.playlists = data;
          this.allPlaylists = data; // Store all playlists
          console.log('Playlists fetched successfully for Playlist Administrator', data);
        },
        (error) => {
          console.error('Error fetching playlists for Playlist Administrator', error);
        }
      );
    } else {
      let playlistData = [];

      // Fetch all playlists
      this.playlistService.getAllPlaylists().subscribe(
        (playlistsData) => {
          this.playlists = playlistsData;
          this.allPlaylists = playlistsData;
          // Assign data to playlistData if needed
          playlistData = playlistsData;

          // Fetch author information
          this.playlistService.getAuthors().subscribe(
            (authorsData) => {
              this.allUsers = authorsData;
              console.log('Authors fetched successfully', authorsData);

              // Manipulate the arrays and check with userId
              this.playlists = this.playlists.map((playlist) => {
                const matchingUser = this.allUsers.find(
                  (user) => user._id === playlist.userId
                );
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
              // Now this.playlists contains additional information from this.allUsers
            },
            (authorsError) => {
              console.error('Error fetching authors', authorsError);
            }
          );
        },
        (playlistsError) => {
          console.error('Error fetching playlists', playlistsError);
        }
      );
    }
  }

  searchText: string = ''; // Declare the searchText property

  searchPlaylists() {
    if (this.searchText) {
      this.playlistService.searchPlaylists(this.searchText).subscribe(
        (data) => {
          this.playlists = data;
          console.log('Playlists fetched successfully', data);
          // Manipulate the arrays and check with userId
          this.playlists = this.playlists.map((playlist) => {
            const matchingUser = this.allUsers.find(
              (user) => user._id === playlist.userId
            );
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
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      this.playlists = [...this.allPlaylists]; // Display all playlists when search input is cleared
    }
  }

  sortValue: string = ''; // Declare the sortValue property

  sortPlaylists() {
    this.playlistService.sortPlaylists(this.sortValue).subscribe(
      (data) => {
        this.playlists = data;
        // Manipulate the arrays and check with userId
        this.playlists = this.playlists.map((playlist) => {
          const matchingUser = this.allUsers.find(
            (user) => user._id === playlist.userId
          );
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
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  editPlaylist(index: number): void {
    this.editingIndex = index;
    // Initialize the edited playlist with the current playlist data
    this.editedPlaylist = { ...this.playlists[index] };
  }

  updatePlaylist(index: number): void {
    // Update the playlist in the list with the edited data
    this.playlists[index] = { ...this.editedPlaylist };
    // Save the updated playlist to the server using your service method
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

  cancelEdit(): void {
    this.editingIndex = null;
  }

  deletePlaylist(index: number): void {
    const playlist = this.playlists[index];
    this.playlistService.deletePlaylist(playlist).subscribe(
      (response) => {
        console.log('Playlist deleted successfully', response);
        // Remove the deleted playlist from the playlists list
        this.playlists.splice(index, 1);
      },
      (error) => {
        console.error('Error deleting playlist', error);
      }
    );
  }
}
