import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  imports: [NgClass],
  selector: 'app-card',
  templateUrl: './card.html',
})
export class Card {
  id = input.required<number>()
  image = input<string>()
  title = input<string>()
  description = input<string>()
  isFavorite = input<boolean>(false)
  onToggleFavorite = output<number>()
  onShowProduct = output<number>()
}
