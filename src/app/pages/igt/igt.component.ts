import { AfterViewInit, Component, signal } from '@angular/core';
import { BackCards, ProfitAndLoose } from './profit-and-loose';
import { NgClass } from '@angular/common';
import { gsap } from 'gsap';
import JSConfetti from 'js-confetti';
import { emojiList } from './emojiList';

@Component({
  selector: 'app-igt',
  imports: [NgClass],
  templateUrl: './igt.component.html',
  styleUrl: './igt.component.scss'
})
export class IGTComponent implements AfterViewInit {
  constructor() {
    this.getRandomBackImg()
  }

  private jsConfetti!: JSConfetti;

  ngAfterViewInit() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      this.jsConfetti = new JSConfetti();
    }
  }

  ProfitAndLooseConst = ProfitAndLoose
  img = signal([
    this.ProfitAndLooseConst.PROFIT[2],
    this.ProfitAndLooseConst.PROFIT[2],
    this.ProfitAndLooseConst.PROFIT[2],
    this.ProfitAndLooseConst.PROFIT[2],
  ])

  valorCostasDasCartas = signal('back')
  perdasOuGanhos = signal({
    ganhos: 0,
    perdas: 0
  })

  animarClasse = (elemento: any,classeAdd: string, classeRemove: string) => {
    gsap.to(elemento, {
      duration: 0.5,
      onStart: () => {
        elemento.classList.add(classeAdd);
        elemento.classList.remove(classeRemove);
      }
    });

    gsap.to(elemento, {
      duration: 0.5,
      delay: 1.5,
      onStart: () => {
        elemento.classList.add(classeRemove);
        elemento.classList.remove(classeAdd);
      }
    });
  };

  animarClasse1valor = (elemento: any,classe: string) => {
    gsap.to(elemento, {
      duration: 0.5,
      onStart: () => {
        elemento.classList.add(classe);
      }
    });

    gsap.to(elemento, {
      duration: 0.5,
      delay: 1,
      onStart: () => {
        elemento.classList.remove(classe);
      }
    });
  };

  dispararConfete(emojiList: Array<any>) {
    this.jsConfetti.addConfetti({
    emojis: emojiList,
    emojiSize: 100,
    confettiNumber: 4
  });
  }


  getRandomBackImg(){
    const index = Math.floor(Math.random() * BackCards.length);
    this.img.update(img => img.map(() => BackCards[index])) 
    console.log(this.img())
  }

 getSelectedValue(indexClicado: number) {
  if (this.valorCostasDasCartas() === 'back') {
    this.img.update((value) => {
      return value.map((_, indexDaImg) => {
        const randomNumber = Math.floor(Math.random() * 10) + 2;
        const isProofitOrLoose = Math.floor(Math.random() * 10) + 1;
        const imgElemento = document.querySelector('.img' + (indexDaImg + 1)) as HTMLElement;
        const glowElemento = document.querySelector('.glow') as HTMLElement;

        



        if (isProofitOrLoose <= 5) {
          // Perda
          this.animarClasse(imgElemento,'border-card-opaco-loose', 'border-card-opaco');

          if (indexDaImg === indexClicado) {
            this.animarClasse(glowElemento, 'glow-effect-loose', 'glow-effect');
            this.animarClasse(imgElemento, '!scale-110', 'scale-100');
            this.perdasOuGanhos.update(valor => ({
              ganhos: valor.ganhos,
              perdas: valor.perdas + (randomNumber * 100)
            }));
          }

          return this.ProfitAndLooseConst.LOOSE[randomNumber];
        } else {
          // Ganho
          this.animarClasse(imgElemento, 'border-card-opaco-gain', 'border-card-opaco');

          if (indexDaImg === indexClicado) {
            let emoji = emojiList.gain[Math.floor(Math.random() * emojiList.gain.length)];
            this.dispararConfete(emoji);
            this.animarClasse(glowElemento, 'glow-effect-gain', 'glow-effect');
            this.animarClasse(imgElemento, '!scale-110', 'scale-100');
            this.perdasOuGanhos.update(valor => ({
              ganhos: valor.ganhos + (randomNumber * 100),
              perdas: valor.perdas
            }));
          }

          return this.ProfitAndLooseConst.PROFIT[randomNumber];
        }
      });
    });

    this.valorCostasDasCartas.set('front');
  } else {
    this.getRandomBackImg();
    this.valorCostasDasCartas.set('back');
  }
}
  
}
