// view-product.component.ts

import { Component, OnInit } from '@angular/core';
import { PublisherService } from 'src/app/services/publisher.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  editingIndex: number | null = null;
  editedProduct: any = {}; // Adjust the type accordingly

  constructor(private publisherService: PublisherService) {}

  products: any[] = [];
  allProducts: any[] = []; // Declare the allProducts variable
  userRole: string | null = null;
  allusers: any[] = [];
  ngOnInit() {
    //include authorProducts method in ngOnInit

    this.userRole = localStorage.getItem('userRole');
    if (this.userRole == 'Publisher') {
      this.publisherService.getProductsByUserId().subscribe(
        (data) => {
          console.log(data);
          this.products = data;
          this.allProducts = data; // Store all products
          console.log('Products fetched successfully for publisher', data);
        },
        (error) => {
          console.error('Error fetching products for publisher', error);
        }
      );
    } else {
      let productdata = [];

      // Fetch all books
      this.publisherService.getAllBooks().subscribe(
        (booksData) => {
          this.products = booksData;
          this.allProducts = booksData;
          // Assign data to productdata if needed
          productdata = booksData;

          // Fetch author products
          this.publisherService.authorProducts().subscribe(
            (authorsData) => {
              this.allusers = authorsData;
              console.log('Authors fetched successfully', authorsData);

              // Manipulate the arrays and check with userId
              this.products = this.products.map((product) => {
                const matchingUser = this.allusers.find(
                  (user) => user._id === product.userId
                );
                if (matchingUser) {
                  product.authorInfo = {
                    _id: matchingUser._id,
                    firstName: matchingUser.firstName,
                    lastName: matchingUser.lastName,
                    // Add other user properties as needed
                  };
                }
                return product;
              });
              console.log(this.products);
              // Now this.products contains additional information from this.allusers
            },
            (authorsError) => {
              console.error('Error fetching authors', authorsError);
            }
          );
        },
        (booksError) => {
          console.error('Error fetching books', booksError);
        }
      );
    }
  }

  searchText: string = ''; // Declare the searchText property

  searchProducts() {
    if (this.searchText) {
      this.publisherService.searchProducts(this.searchText).subscribe(
        (data) => {
          this.products = data;
          console.log('Products fetched successfully', data);
          // Manipulate the arrays and check with userId
          this.products = this.products.map((product) => {
            const matchingUser = this.allusers.find(
              (user) => user._id === product.userId
            );
            if (matchingUser) {
              product.authorInfo = {
                _id: matchingUser._id,
                firstName: matchingUser.firstName,
                lastName: matchingUser.lastName,
                // Add other user properties as needed
              };
            }
            return product;
          });
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      this.products = [...this.allProducts]; // Display all products when search input is cleared
    }
  }

  sortValue: string = ''; // Declare the sortValue property

  sortProducts() {
    this.publisherService.sortProducts(this.sortValue).subscribe(
      (data) => {
        this.products = data;
        // Manipulate the arrays and check with userId
        this.products = this.products.map((product) => {
          const matchingUser = this.allusers.find(
            (user) => user._id === product.userId
          );
          if (matchingUser) {
            product.authorInfo = {
              _id: matchingUser._id,
              firstName: matchingUser.firstName,
              lastName: matchingUser.lastName,
              // Add other user properties as needed
            };
          }
          return product;
        });
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  editProduct(index: number): void {
    this.editingIndex = index;
    // Initialize the edited product with the current product data
    this.editedProduct = { ...this.products[index] };
  }

  updateProduct(index: number): void {
    // Update the product in the list with the edited data
    this.products[index] = { ...this.editedProduct };
    // Save the updated product to the server using your service method
    this.publisherService.updateProduct(this.editedProduct).subscribe(
      (response) => {
        console.log('Product updated successfully', response);
        this.editingIndex = null;
      },
      (error) => {
        console.error('Error updating product', error);
      }
    );
  }

  cancelEdit(): void {
    this.editingIndex = null;
  }

  deleteProduct(index: number): void {
    const product = this.products[index];
    this.publisherService.deleteProduct(product).subscribe(
      (response) => {
        console.log('Product deleted successfully', response);
        // Remove the deleted product from the products list
        this.products.splice(index, 1);
      },
      (error) => {
        console.error('Error deleting product', error);
      }
    );
  }
}
