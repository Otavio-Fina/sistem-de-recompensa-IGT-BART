import { Component, signal } from '@angular/core';
import { BackCards, ProfitAndLoose } from './profit-and-loose';

@Component({
  selector: 'app-igt',
  imports: [],
  templateUrl: './igt.component.html',
  styleUrl: './igt.component.scss'
})
export class IGTComponent {
  constructor() {
    this.getRandomBackImg()
  }

  ProfitAndLooseConst = ProfitAndLoose
  img = signal([
    this.ProfitAndLooseConst.PROFIT[2],
    this.ProfitAndLooseConst.PROFIT[2],
    this.ProfitAndLooseConst.PROFIT[2],
    this.ProfitAndLooseConst.PROFIT[2],
  ])

  valorCostasDasCartas = signal('back')

  getRandomBackImg(){
    const index = Math.floor(Math.random() * BackCards.length);
    this.img.update(img => img.map(() => BackCards[index])) 
    console.log(this.img())
  }

  getSelectedValue(indexClicado: number) {
    if(this.valorCostasDasCartas() === 'back'){
      this.img.update((value) => {
      return value.map(() => {
        let randomNumber = Math.floor(Math.random() * 10) + 2;
        let isProofitOrLoose = Math.floor(Math.random() * 10) + 1;
        if (isProofitOrLoose < 4) {
          return this.ProfitAndLooseConst.LOOSE[randomNumber];
        } else {
          return this.ProfitAndLooseConst.PROFIT[randomNumber];
        }
      })
      })  
      this.valorCostasDasCartas.set('front')
    } else {
      this.getRandomBackImg()
      this.valorCostasDasCartas.set('back')
    }
    console.log(this.img())
  }
  
}
