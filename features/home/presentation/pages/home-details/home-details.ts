import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.html',
})
export class HomeDetails {
  private route = inject(ActivatedRoute)
  id = Number(this.route.snapshot.paramMap.get("id"))
}
