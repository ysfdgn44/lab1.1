// const sayı = Number(prompt("sayı giriniz"));
// if (sayı % 2 === 0) {
//   console.log(`${sayı} çifttir`);
// } else {
//   console.log(`${sayı} tektir`);
// }
// const sayı = Number(prompt("sayı giriniz"));
// sayı < 18 ? console.log("küçüksün") : console.log("tamamdır");
// switch (sayı) {
//   case 1:
//     console.log("pazartesi");
//     break;
//   case 2:
//     console.log("psalı");
//     break;
//   case 3:
//     console.log("çarşamba");
//     break;
//   case 4:
//     console.log("adsai");
//     break;
//   case 5:
//     console.log("pasdfdsfi");
//     break;
//   case 6:
//     console.log("pazartessdfsi");
//     break;
//   case 7:
//     console.log("pazsdfsdartesi");
//     break;

//   default:
//     console.log("yürügit");
//     break;
// }
// sayı <= 100 && sayı >= 90
//   ? console.log("aa")
//   : sayı < 90 && sayı >= 80
//   ? console.log("ba")
//   : sayı >= 70 && sayı < 80
//   ? console.log("bb")
//   : sayı >= 60 && sayı < 70
//   ? console.log("cc")
//   : sayı >= 50 && sayı < 60
//   ? console.log("dc")
//   : sayı >= 45 && sayı < 50
//   ? console.log("dd")
//   : sayı < 45
//   ? console.log("f")
//   : console.log("hatalı değer");
// ?! artık yıl hesabı
const yıl = Number(prompt("yılı giriniz"));
// if ((yıl % 4 == 0 && yıl % 100 != 0) || yıl % 400 == 0) {
//   console.log(`${yıl} artık yıldır`);
// } else {
//   console.log(`${yıl} artık değildir`);
// }

let değer = true;
let ay;
do {
  ay = Number(prompt("ayı giriniz"));
  if (ay < 1 || ay > 12) {
    değer = true;
    // let ay = Number(prompt(" lütfen ayı doğru giriniz"));
  } else {
    değer = false;
  }
} while (değer);
let gün;
if (((yıl % 4 == 0 && yıl % 100 != 0) || yıl % 400 == 0) && ay == 2) {
  console.log(
    `${yıl} yılının şubat ayı 29 çekmektedir. Ve bu yıl artık yıl olarak adlandırılmaktadır.`
  );
} else {
  switch (ay) {
    case 1:
      gün = 31;
      ay = "ocak";
      break;
    case 2:
      gün = 28;
      ay = "şubat";
      break;
    case 3:
      gün = 31;
      ay = "mart";
      break;
    case 4:
      gün = 30;
      ay = "nisan";
      break;
    case 5:
      gün = 31;
      ay = "mayıs";
      break;
    case 6:
      gün = 30;
      ay = "haziran";
      break;
    case 7:
      gün = 31;
      ay = "temmuz";
      break;
    case 8:
      gün = 30;
      ay = "ağustos";
      break;
    case 9:
      gün = 31;
      ay = "eylül";
      break;
    case 10:
      gün = 30;
      ay = "ekim";
      break;
    case 11:
      gün = 31;
      ay = "kasım";
      break;
    case 12:
      gün = 30;
      ay = "aralık";
      break;

    default:
      console.log("lütfen ayı doğru giriniz");
      break;
  }
  console.log(`${yıl} yılının ${ay} ayı ${gün} gündür`);
}
