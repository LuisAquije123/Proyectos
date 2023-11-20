import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';  // Importar NgForm
import { Footwear } from '../../models/footwear';
import { FootwearService } from '../../services/footwear.service';
import { AuthenticationService } from "../../services/authentication.service";
import { ReviewService } from "../../services/review.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  selectedFootwear: Footwear | null = null;

  selectedRating: number | null = null;
  reviewComment: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private footwearService: FootwearService,
    private authService: AuthenticationService,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const footwearId = params.get('id');
      this.getFootwearById(footwearId);
    });
  }

  goBack(): void {
    this.router.navigate(['/productos']);
  }

  private getFootwearById(id: string | null): void {
    if (id) {
      this.footwearService.getFootwearById(id).subscribe(
        (footwear: Footwear) => {
          this.selectedFootwear = footwear;
        },
        error => {
          console.error('Error al obtener el calzado:', error);
        }
      );
    }
  }

  getLoggedInUser(): string | null {
    return this.authService.getLoggedInUser();
  }

  onSubmitReview(reviewForm: NgForm): void {
    if (this.selectedFootwear && this.selectedRating !== null && this.reviewComment) {
      const reviewData = {
        user: this.getLoggedInUser() || '',
        rating: this.selectedRating,
        comment: this.reviewComment || ''
      };

      this.reviewService.submitReview(this.selectedFootwear.id, reviewData).subscribe(
        (newReview: any) => {
          if (this.selectedFootwear) {
            if (!this.selectedFootwear.reviews) {
              this.selectedFootwear.reviews = [];
            }
            this.selectedFootwear.reviews.push(newReview);
          }
          // Restablecer el formulario después de enviar la reseña
          reviewForm.resetForm();
        },
        error => {
          console.error('Error al agregar reseña:', error);
        }
      );
    }
  }
}
