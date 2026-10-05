import { Component, inject } from '@angular/core';
import { Card } from '../../../../../shared/components/card/card';
import { Router } from '@angular/router';

@Component({
  imports: [Card],
  selector: 'app-home-page',
  templateUrl: './home-page.html',
})
export class HomePage {
  private router = inject(Router)
  cards = [
    {
      id: 1,
      title: 'Card 1',
      description: 'This is Card 1',
      isFavorite: true
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'This is Card 2',
      isFavorite: false
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'This is Card 3',
      isFavorite: true
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'This is Card 4',
      isFavorite: false
    },
    {
      id: 5,
      title: 'Card 5',
      description: 'This is Card 5',
      isFavorite: false
    }
  ];

  onToggleFavorite(id: number) {
    const card = this.cards.find(card => card.id == id)
    if (!card) return
    card.isFavorite = !card.isFavorite
  }

  onShowDetails(id: number) {
    this.router.navigate(['/home-details', id])
  }
}
