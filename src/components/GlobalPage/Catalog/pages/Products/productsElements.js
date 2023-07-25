import c1 from './c1.png'
import c2 from './c2.png'
import c3 from './c3.png'
import c4 from './c4.png'
import c5 from './c5.png'
import c6 from './c6.png'
import c7 from './c7.png'


   class Card {
      constructor(mass, taste, price, title,image) {
         this.mass = mass;
         this.taste = taste;
         this.price = price;
         this.title = title;
         this.image = image;
      }
   }

   export default  [
      new Card(500, 'Курица', 700, 'PRO',c1),
      new Card(1000, 'Курица', 1000, 'PRO',c2),
      new Card(500, 'Рыба', 700, 'PRO',c3),
      new Card(1000, 'Рыба', 1000, 'PRO',c4),
      new Card(500, 'Гречка', 400, 'SLIM',c5),
      new Card(1000, 'Гречка', 700, 'SLIM',c6),
      new Card(500, 'Рис', 500, 'SLIM',c7),
   ]
