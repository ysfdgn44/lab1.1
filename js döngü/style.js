// let i = 1;
// while (i <= 11) {
//   console.log(`${i} merhaba`);
//   i += 1;
// }
// const say = Number(prompt("sayı giriniz"));?prime number
// i = 2;
// while (i < say) {
//   if (say % i === 0) {
//     console.log(`${say}is naot a prime`);

//     console.log(i);
//     break;
//   }
//   i += 1;
//   if (i == say) {
//     console.log(`${say} is a prime number`);
//     break;
//   }
// }
// let toplam = 0;?faktöriyel
// for (i = 1; i <= say; i += 1) {
//   toplam += i;
// }
// console.log(toplam);
// for (i = 1; i <= 10; i += 1) {
//   console.log(`${i} nci sayı:` + (number = Math.random(0, 1) * 100));
//   console.log(Math.floor(number));
// }
//  ? for ile prime number
// const say = Number(prompt("sayı giriniz"));
// for (i = 2; i < say; i += 1) {
//   if (say % i === 0) {
//     console.log(`${say} is not a prime number`);
//     break;
//   }
//   if (i == say - 1) {
//     console.log(`${say} is a prime number`);
//     break;
//   }
// }
// let i = 1;
// while (i <= 10) {
//   console.log(`${i} merhaba`);
//   i++;
// }
// ? while ile 0 -100 arası sayı girme
// let tamam = true;
// while (tamam) {
//   const say = Number(prompt("sayı giriniz"));
//   if (0 <= say && say <= 100) {
//     console.log(`${say} 0 ile 100 arasındadır. Başarılı giriş`);
//     tamam = false;
//   } else {
//     console.log("lütfen tekrar deneyiniz");
//   }
// }
// ? do while ile 10 tekrar merhaba
// i = 1;
// do {
//   console.log(`${i} merhaba`);
//   i++;
// } while (i <= 10);
// ? 0 ile 100 arası sayı girme
// let tamam = true;
// do {
//   const say = Number(prompt("sayı giriniz"));
//   if (0 <= say && say <= 100) {
//     console.log(`${say} 0 ile 100 arasındadır. Başarılı giriş`);
//     tamam = false;
//   } else {
//     console.log("lütfen tekrar deneyiniz");
//   }
// } while (tamam);
// ?ortalama alma işlemi
// let nottoplam = 0;
// let i = 0;
// let durum = true;
// do {
//   giriş = prompt("not giriniz");
//   if (giriş !== "q" && giriş !== "Q") {
//     nottoplam += +giriş;
//   } else {
//     durum = false;
//   }
//   i += 1;
// } while (durum);
// console.log("ortalamanız = " + nottoplam / (i - 1));
// ? SAYI TAHMİNİ
// const say = Math.floor(Math.random() * 100);
// let tahmin;
// let i = 1;
// do {
//   tahmin = Number(prompt("tahmin giriniz: "));
//   if (tahmin == say) {
//     console.log(`${i}nci tahminde bildin bravo sayı= ${say}`);
//     break;
//   } else if (tahmin < say && i < 5) {
//     console.log("lütfen arttırın");
//   } else if (tahmin > say && i < 5) {
//     console.log("lütfen azaltın");
//   } else if (i == 5) {
//     console.log("malesef bilemediniz hakkınız kalmadı");
//     break;
//   }
//   console.log(`${5 - i} hakkınız kaldı`);
//   i++;
// } while (i < 6);
let say = Number(prompt("sayı giriniz"));
const num = say;
let counter = 0;
// let num;
while (say !== 0) {
  say = Math.trunc(say / 10);
  counter = counter + 1;
  //   console.log(say);
}
console.log(`${num} ${counter} basamaklıdır`);
