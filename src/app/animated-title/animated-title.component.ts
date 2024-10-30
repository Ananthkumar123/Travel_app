// src/app/animated-title/animated-title.component.ts
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-animated-title',
  templateUrl: './animated-title.component.html',
  styleUrls: ['./animated-title.component.css'],
  animations: [
    trigger('letterAnimation', [
      transition('* => *', [
        animate(
          '1s',
          keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 1, offset: 0.1 }),
            style({ opacity: 0.5, offset: 0.2 }),
            style({ opacity: 1, offset: 0.3 }),
          ])
        )
      ])
    ])
  ]
})
export class AnimatedTitleComponent implements OnInit {
  languageVariants: string[][] = [
    ['A', 'अ', 'С', 'Σ', 'С', 'A', 'ס', 'A', 'স', 'అ'], // Variants for "S"
    ['N', 'न', 'Х', 'Η', 'Х', 'N', 'ח', 'N', 'হ', 'న'], // Variants for "H"
    ['A', 'अ', 'А', 'Α', 'А', 'A', 'א', 'A', 'আ', 'అ'], // Variants for "A"
    ['N', 'न', 'Н', 'Ν', 'Н', 'N', 'נ', 'N', 'ন', 'న'], // Variants for "N"
    ['T', 'क', 'К', 'Κ', 'К', 'T', 'כ', 'T', 'ক', 'o'], // Variants for "K"
    ['H', 'अ', 'А', 'Α', 'А', 'H', 'א', 'H', 'আ', 'అ'], // Variants for "A"
    ['K', 'र', 'Р', 'Ρ', 'k', 'K', 'ר', 'k', 'র', 'क'], // Variants for "R"
    ['U', 'र', 'Р', 'Ρ', 'U', 'U', 'ר', 'u', 'র', 'क'],
    ['M', 'र', 'Р', 'Ρ', 'M', 'M', 'ר', 'm', 'র', 'क'],
    ['A', 'र', 'Р', 'Ρ', 'A', 'A', 'ר', 'A', 'র', 'क'],
    ['R', 'र', 'Р', 'Ρ', 'R', 'R', 'ר', 'R', 'র', 'क'],

  ];

  letters: string[] = []; // To hold the letters as they are fixed
  currentLetter: string = ''; // To display the current animating letter

  ngOnInit(): void {
    this.startAnimation(0);
  }

  startAnimation(index: number): void {
    if (index >= this.languageVariants.length) return;

    const maxVariants = this.languageVariants[index].length;
    let currentVariant = 0;

    const intervalId = setInterval(() => {
      if (currentVariant < maxVariants) {
        this.currentLetter = this.languageVariants[index][currentVariant];
        currentVariant++;
      } else {
        clearInterval(intervalId);
        this.letters.push(this.languageVariants[index][0]); // Fix the first letter in English
        this.currentLetter = ''; // Clear currentLetter once the letter is fixed
        this.startAnimation(index + 1); // Move to the next letter
      }
    }, 70); // 70ms interval for each language change
  }
}
