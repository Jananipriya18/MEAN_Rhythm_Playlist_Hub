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
        },
        (error) => {
          // Handle error if needed
          console.error('Error adding playlist', error);
        }
      );
    }
  }
}

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { PublisherService } from 'src/app/services/playlist.service';

// @Component({
//   selector: 'app-add-product',
//   templateUrl: './add-product.component.html',
//   styleUrls: ['./add-product.component.css']
// })
// export class AddProductComponent {

//   productForm: FormGroup;

//   constructor(private fb: FormBuilder, private publisherService: PublisherService) {
//     this.productForm = this.fb.group({
//       title: ['', Validators.required],
//       genre: ['', Validators.required],
//       description: ['', Validators.required],
//       publicationYear: [null, [Validators.required, Validators.min(1900)]],
//       pageCount: [null, [Validators.required, Validators.min(1)]],
//       availableCopies: [null, [Validators.required, Validators.min(0)]],
//     });
//   }

//   onSubmit() {
//     if (this.productForm.valid) {
//       // Call the service method to post the product
//       console.log(this.productForm.value);
//       //pass userid from local storage
//       this.productForm.value.userId=localStorage.getItem('userId');
//       this.publisherService.addProduct(this.productForm.value).subscribe(
//         (response) => {
//           // Handle success if needed
//           console.log('Product added successfully', response);
//           this.productForm.reset(); // Reset the form
//         },
//         (error) => {
//           // Handle error if needed
//           console.error('Error adding product', error);
//         }
//       );
//     }
//   }
// }
