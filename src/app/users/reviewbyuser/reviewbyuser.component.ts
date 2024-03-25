import { Component, inject } from '@angular/core';
import review from '../../model/review';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReviewService } from '../../service/reiew.service';

@Component({
  selector: 'app-reviewbyuser',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reviewbyuser.component.html',
  styleUrl: './reviewbyuser.component.css'
})
export class ReviewbyuserComponent {


  review :review = new review('')
  reviewForm: FormGroup
  reviewService = inject(ReviewService)

  constructor(private fb: FormBuilder) {
    // TODO Include form valdiation
    this.reviewForm = fb.group({
      // fullname: new FormControl(''),
      // username: new FormControl(''),
      // email: new FormControl(''),
      feedback: ['', Validators.required]
      
      // password: new FormControl('')
    })
  }

  userreview() {
    // TODO The submit button must be disabled till the action is complete
    // TODO Once the task is complete the user needs to be updated about that
    this.review = this.reviewForm.value as review
    console.log(this.review)
    // TODO Hash the password so that the password is not stored as plain text
    this.reviewService.userreview(this.review).subscribe(response => console.log(response))
  }
  

}
