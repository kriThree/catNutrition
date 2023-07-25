
class Card {
   constructor(name, size, price) {
      this.name = name;
      this.size = size;
      this.price = price;
   }
}

export default [
   new Card('Сахарозаменитель', '1 упаковка (100 г)', 200),
   new Card('питьевая вода', '5 литров', 50),
   new Card('молоко', '1 литр', 100),
   new Card('витамины', '1 упаковка (30 г)', 300),
]