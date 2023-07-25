import icon1 from './icon1.svg';
import icon2 from './icon2.svg';
import icon3 from './icon3.svg';
import icon4 from './icon4.svg';

function getProsElemnts() {
   const prosTexts = [`Функциональное питание
   содержит только полезные
   питательные вещества.`,
      `Выпускается в виде порошка, 
   который нужно лишь залить 
   кипятком и готово.`,
      `Замените один-два приема 
   обычной еды на наше 
   функциональное питание.`,
      `Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!`
   ]
   const prosImgs = [icon1, icon2, icon3, icon4]

   return new Array(prosTexts.length).fill('').map((_, i) => ({ img: prosImgs[i], text: prosTexts[i] }))
}


export default getProsElemnts;