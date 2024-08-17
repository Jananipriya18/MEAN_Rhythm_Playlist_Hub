import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.css']
})
export class AddPlaylistComponent {

  playlistForm: FormGroup;

  constructor(private fb: FormBuilder, private playlistService: PlaylistService) {
    this.playlistForm = this.fb.group({
      songName: ['', Validators.required],
      genre: ['', Validators.required],
      authorName: ['', Validators.required],
      songMovieName: ['', Validators.required],
      createdDate: [new Date(), Validators.required],
      userId: [localStorage.getItem('userId'), Validators.required]
    });
  }

  onSubmit() {
    if (this.playlistForm.valid) {
      console.log(this.playlistForm.value);
      
      this.playlistForm.value.userId = localStorage.getItem('userId');
      this.playlistService.addPlaylist(this.playlistForm.value).subscribe(
        (response) => {
          // Handle success if needed
          console.log('Playlist added successfully', response);
          this.playlistForm.reset(); // Reset the form
          this.playlistForm.controls['createdDate'].setValue(new Date()); // Reset createdDate to current date
          this.router.navigate(['/view-playlist']); // Redirect after successful submission
        },
        (error) => {
          // Handle error if needed
          console.error('Error adding playlist', error);
        }
      );
    }
  }
}
