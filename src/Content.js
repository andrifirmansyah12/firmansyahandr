// import images
import Hero_person from "./assets/images/Andri/hero1.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Projects/1.jpg";
import services_logo2 from "./assets/images/Projects/2.jpg";
import services_logo3 from "./assets/images/Projects/3.jpg";
import services_logo4 from "./assets/images/Projects/4.jpg";
import services_logo5 from "./assets/images/Projects/5.jpg";
import services_logo6 from "./assets/images/Projects/6.jpg";
import services_logo7 from "./assets/images/Projects/7.jpg";
import services_logo8 from "./assets/images/Projects/8.jpg";

import project1 from "./assets/images/Andri/1.jpg";
import project2 from "./assets/images/Andri/20.jpeg";
import project3 from "./assets/images/Andri/19.jpeg";
import project4 from "./assets/images/Andri/6.jpg";
import project5 from "./assets/images/Andri/10.jpg";
import project6 from "./assets/images/Andri/23.jpeg";
import person_project from "./assets/images/Andri/hero2.png";

import avatar1 from "./assets/images/Testimonials/2.jpg";
import avatar2 from "./assets/images/Testimonials/2.jpg";
import avatar3 from "./assets/images/Testimonials/2.jpg";
import avatar4 from "./assets/images/Testimonials/2.jpg";

import Hireme_person from "./assets/images/Hireme/2.png";
import Hireme_person2 from "./assets/images/Hireme/1.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Andri Firmansyah",
    firstName: "MY",
    LastName: "BLOG",
    btnText: "firmansyahandr",
    icon: BsInstagram,
    image: Hero_person,
    hero_content: [
      {
        count: "277",
        text: "Juta lebih penduduk indonesia, yang menarik cuma kamu doang chuakss",
      },
      {
        count: "252",
        text: "Angka yang bakalan keluar nanti malam",
      },
    ],
  },
  skills: {
    title: "Zodiak",
    subtitle: "DEFINISI ZODIAK",
    skills_content: [
      {
        name: "Aries",
        para: "Zodiak Aries dimiliki oleh orang yang lahir pada tanggal 21 Maret - 19 April",
        logo: "Ari",
        text: "Zodiak Aries dimiliki oleh orang yang lahir pada tanggal 21 Maret - 19 April. Lambang dari zodiak Aries adalah domba jantan yang dapat diartikan sebagai memiliki energi yang besar dan suka dengan tantangan. Domba jantan dapat merupakan simbol kepemimpinan yang memiliki keberanian dan berjiwa petualang. Zodiak Aries memiliki sifat kejujuran, percaya diri, dan berani. Namun, dibalik semua sifat itu, Aries memiliki sifat yang mudah marah atau tempramental, selalu terburu-buru atau tidak sabar, dan impulsif.",
      },
      {
        name: "Taurus",
        para: "Zodiak Taurus dimiliki oleh orang yang lahir pada tanggal 20 April – 20 Mei",
        logo: "Tau",
        text: "Zodiak Taurus dimiliki oleh orang yang lahir pada tanggal 20 April – 20 Mei. Zodiak Taurus memiliki lambang banteng. Sama seperti banteng, orang berzodiak Taurus mempunyai jiwa yang tenang, tetapi jika diganggu akan marah. Ketenangan yang dimiliki Taurus jangan coba-coba diganggu. Orang berzodiak Taurus memiliki kepribadian yang bertanggung jawab, sabar dalam segala hal, dan handal dalam melakukan sesuatu. Namun, Taurus memiliki kepribadian yang dapat merugikan yaitu keras kepala, susah untuk diajak kompromi, dan posesif.",
      },
      {
        name: "Gemini",
        para: "Zodiak Gemini dimiliki oleh orang yang lahir pada tanggal 21 Mei – 20 Juni",
        logo: "Gem",
        text: "Orang yang lahir antara tanggal 21 Mei – 20 Juni merupakan bagian dari zodiak Gemini. Zodiak Gemini mempunyai lambang anak kembar yang dapat diartikan sebagai kurang suka melakukan segala sesuatu sendirian atau bisa dibilang minta diperhatikan. Seperti arti dari lambangnya bahwa orang berzodiak Gemini sangat mudah beradaptasi dengan hal yang baru, mempunyai kemampuan belajar yang cepat, dan memiliki sifat yang lembut dan penyayang. Dibalik sifat mudah beradaptasi, Gemini memiliki sifat yang gugup atau mudah grogi. Sementara, dibalik sifat cepat belajarnya, Gemini suka tidak konsisten dalam melakukan sesuatu.",
      },
      {
        name: "Cancer",
        para: "Zodiak Cancer dimiliki oleh orang yang lahir pada tanggal 21 Juni – 22 Juli",
        logo: "Can",
        text: "Zodiak Cancer dimiliki oleh orang yang lahir antara tanggal 21 Juni – 22 Juli. Lambang dari zodiak Cancer adalah kepiting. Hewan yang memiliki capit ini selalu membawa cangkangnya saat berpindah-pindah tempat. Lambang zodiak ini dapat diartikan orang berzodiak Cancer akan selalu ingat dengan keluarga dan teman-temannya kemanapun ia pergi. Cancer ini punya sifat simpati yang tinggi, setia, dan persuasif. Meskipun punya sifat persuasif, tetapi Cancer memiliki sifat manipulatif, Suka curiga pada seseorang, dan moody atau melakukan sesuatu harus mengikuti kata hati.",
      },
      {
        name: "Leo",
        para: "Zodiak Leo dimiliki oleh orang yang lahir pada tanggal 23 Juli – 22 Agustus",
        logo: "Leo",
        text: "Orang yang lahir antara tanggal 23 Juli – 22 Agustus merupakan bagian dari zodiak Leo. Singa atau si raja hutan merupakan lambang yang dimiliki oleh zodiak Leo. Si raja hutan merupakan gambaran seorang pemimpin yang percaya diri ketika menghadapi sesuatu. Sebagai pemimpin Leo selalu berinovasi agar selalu update, memiliki kepribadian yang ceria, dan mempunyai sifat yang lucu. Namun, Leo terkadang terlihat seperti arogan atau sombong, keras kepala, dan tidak fleksibel. Sifat-sifat kurang baik yang dimiliki Leo harus dikendalikan agar tidak merupak Leo dalam melakukan sesuatu.",
      },
      {
        name: "Virgo",
        para: "Zodiak Virgo dimiliki oleh orang yang lahir pada tanggal 23 Agustus – 22 September ",
        logo: "Vir",
        text: "Orang yang lahir antara tanggal 23 Agustus – 22 September merupakan bagian dari zodiak Virgo. Perempuan menjadi lambang dari zodiak Virgo. Lambang perempuan ini dapat diartikan sebagai tampak tenang dari luar, tetapi banyak hal dipikirkan. Virgo ini baik hati dan suka membantu keluarga, saudara, atau teman-temannya. Bukan hanya itu, Virgo juga memiliki kepribadian pekerja keras atau pantang menyerah. Namun, Virgo mempunyai kepribadian pemalu, rasa khawatir yang terkadang berlebih, dan terlalu sibuk mengomentari diri sendiri.",
      },
      {
        name: "Libra",
        para: "Zodiak Libra dimiliki oleh orang yang lahir pada tanggal 23 September – 22 Oktober",
        logo: "Lib",
        text: "Orang yang lahir antara tanggal 23 September – 22 Oktober merupakan bagian dari zodiak Libra. Lambang dari zodiak Libra adalah timbangan. Timbangan ini dapat digambarkan segala sesuatu harus seimbang seperti kesehatan fisik dan batin harus seimbang dan antara pekerjaan dan kehidupan pribadi juga harus seimbang. Libra selalu menghindari konflik. Libra sangat suka membantu, tetapi jangan terlalu lama berpikir kalau ingin membantu. Suka bersosialisasi, tetapi jangan terlalu sering mengasihani diri sendiri.",
      },
      {
        name: "Scorpio",
        para: "Zodiak Scorpio dimiliki oleh orang yang lahir pada tanggal 23 Oktober – 21 November",
        logo: "Sco",
        text: "Zodiak Scorpio dimiliki oleh orang yang lahir antara tanggal 23 Oktober – 21 November. Kalajengking merupakan lambang dari zodiak Scorpio. Kalajengking memiliki racun yang sewaktu-waktu dapat digunakan untuk menyerang lawannya. Jadi jangan sekali-kali mengganggu ketenangan dari Scorpio. Cerdas, berani, tetapi jangan cemburu, dan tertutup. Kepribadian semangat dapat dilakukan untuk memimpin sebuah tim. Kalau sudah menjadi pemimpin jangan diikuti dengan sifat kasar.",
      },
      {
        name: "Sagitarius",
        para: "Zodiak Sagitarius dimiliki oleh orang yang lahir pada tanggal 22 November – 21 Desember",
        logo: "Sag",
        text: "Zodiak Sagitarius dimiliki oleh orang yang lahir antara tanggal 22 November – 21 Desember. Zodiak Sagitarius mempunyai lambang manusia setengah kuda membawa panah. Manusia setengah kuda membawa panah merupakan makhluk mitologi dari Yunani yang bernama centaur. Kemanapun panah itu diarahkan centaur akan mengikutinya. Lambang ini dapat diartikan sebagai kebebasan atau tidak suka dengan rutinitas. Sagitarius suka dengan hal-hal yang baru dan suka bertemu dengan orang-orang baru. Namun, Sagitarius mempunyai sifat tidak sabaran yang dapat membuat salah mengambil keputusan.",
      },
      {
        name: "Capricon",
        para: "Zodiak Capricon dimiliki oleh orang yang lahir pada tanggal 22 Desember – 19 Januari",
        logo: "Cap",
        text: "Zodiak Capricorn dimiliki oleh orang yang lahir antara tanggal 22 Desember – 19 Januari. Zodiak Capricorn mempunyai lambang kambing gunung, hewan yang terus menaiki gunung sampai puncak. Lambang kambing gunung dapat diartikan sebagai pekerja keras dan teguh pada keinginannya agar tercapai. Bagi Capricorn pencapaian adalah segalanya. Manajemen dan disiplin yang bagus dapat mempermudah keinginan tercapai. Namun, Capricorn kurang memperhatikan keadaan sekitar. Jadi, perlu memperhatikan keadaan sekitar agar semua usaha yang dilakukan tidak gagal.",
      },
      {
        name: "Aquarius",
        para: "Zodiak Aquarius dimiliki oleh orang yang lahir pada tanggal 20 Januari – 18 Februari",
        logo: "Aqu",
        text: "Orang yang lahir antara tanggal 20 Januari – 18 Februari merupakan bagian dari zodiak Aquarius. Aquarium tumpah adalah lambang dari zodiak Aquarius. Aquarium tumpah dapat diartikan sebagai orang yang dermawan dan mau merelakan waktunya untuk keluarga dan teman-temannya. Sifat ramah yang dimiliki dapat menemukan teman-teman baru, mempunyai sifat mandiri. Namun disisi lain Aquarius memiliki sifat mudah marah yang terkadang pendapatnya jadi tidak didengar.",
      },
      {
        name: "Pisces",
        para: "Zodiak Pisces dimiliki oleh orang yang lahir pada tanggal 19 Februari – 20 Maret",
        logo: "Pis",
        text: "Orang yang lahir antara tanggal 19 Februari – 20 Maret merupakan bagian dari zodiak Pisces. Ikan merupakan lambang dari zodiak Pisces. Ikan dapat diartikan sebagai ketenangan. Oleh karena itu, Pisces selalu menjadi pendengar yang baik, berusaha memberikan ketenangan dan kesenangan pada orang yang sedang kesusahan. Namun, Pisces memiliki emosi yang mudah diubah-ubah. Dan terkadang sifat tenang ini membuat Pisces menjadi terlalu percaya sehingga bisa menjadi korban.",
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Postingan",
    subtitle: "POSTINGAN TEMA",
    service_content: [
      {
        title: "Web Development",
        para: "De l'argent",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "Voiture Rouge",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "Téléphone Fixe",
        logo: services_logo3,
      },
      {
        title: "PhotoShop Editing",
        para: "Décor",
        logo: services_logo4,
      },
      {
        title: "PhotoShop Editing",
        para: "Playboys",
        logo: services_logo5,
      },
      {
        title: "PhotoShop Editing",
        para: "Relaxer",
        logo: services_logo6,
      },
      {
        title: "PhotoShop Editing",
        para: "Armoire",
        logo: services_logo7,
      },
      {
        title: "PhotoShop Editing",
        para: "Rouge Et Blanc",
        logo: services_logo8,
      },
    ],
  },
  Projects: {
    title: "Galeri",
    subtitle: "GALERI SAYA",
    image: person_project,
    project_content: [
      {
        title: "Ini saya",
        image: project1,
        place: "Bandung, 2022",
      },
      {
        title: "Ini sama temen saya",
        image: project2,
        place: "Magelang, 2022",
      },
      {
        title: "Ini saya blur",
        image: project3,
        place: "Bandung, 2022",
      },
      {
        title: "Ini saya sedang main sepak bola",
        image: project4,
        place: "Indramayu, 2022",
      },
      {
        title: "Ini juga sama",
        image: project5,
        place: "Indramayu, 2022",
      },
      {
        title: "Ini tim puksal saya",
        image: project6,
        place: "Indramayu, 2022",
      },
    ],
  },
  Testimonials: {
    title: "Quotes",
    subtitle: "SEKADAR QUOTES",
    testimonials_content: [
      {
        review:
          "“Jika tulisanmu jelek, maka carilah orang yang bisa membacanya. Tapi ini bukan tentang tulisan.”",
        img: avatar1,
        name: "~af",
      },
      {
        review:
          "“Mulai lagi semangatnya, kurangi ngeluhnya. Kita butuh semangat yang panjang untuk perjalanan yang masih jauh.”",
        img: avatar4,
        name: "~af",
      },
      {
        review:
          "“Aku selalu menyukai semua tentang langit, mau saat dia cerah atau bahkan mendung sekalipun. Apapun cuacanya, aku akan tetap menyukainya. Tapi ini bukan tentang langit.”",
        img: avatar3,
        name: "~af",
      },
      {
        review:
          "“Ku kira ujianku terlalu berat, tapi ternyata sujudku yang terlalu singkat.”",
        img: avatar4,
        name: "~af",
      },
      {
        review:
          "“Seperti dibukakan pintu tetapi tidak diajak masuk. Tapi ini bukan tentang pintu.”",
        img: avatar2,
        name: "~af",
      },
      {
        review:
          "“Dia tidak menyukaimu, tapi dia hanya menghargaimu karena dia tau kamu mencintainya.”",
        img: avatar4,
        name: "~af",
      },
      {
        review:
          "“Tidak ada manusia yang baik baik saja didunia ini, semua sedang berjuang dengan ujiannya masing-masing.”",
        img: avatar4,
        name: "~af",
      },
      {
        review:
          "“Terlalu percaya diri sehingga tereliminasi oleh ekspetasi yang terlalu tinggi.”",
        img: avatar4,
        name: "~af",
      },
      {
        review:
          "“Sempat berpikir bahwa terkadang dunia memberikan hal-hal yang tidak habis pikir.”",
        img: avatar4,
        name: "~af",
      },
      {
        review:
          "“Ga akan ada seseorang yang selalu stay. People come n go, turunin ekspetasi karena semua orang itu bohong, right person itu omong kosong.”",
        img: avatar4,
        name: "~af",
      },
      {
        review:
          "“Udah bagus temenan, kamu malah nyatain perasaan, jadi asing kan sekarang.”",
        img: avatar4,
        name: "~af",
      },
      {
        review:
          "“Kita berhak menjauh dari semua hal yang membuat kita sakit.”",
        img: avatar4,
        name: "~af",
      },
      {
        review:
          "“Kalo kamu lagi ada masalah jangan dipendem sendiri ya, sini cerita aja sama aku gapapa.”",
        img: avatar4,
        name: "~af",
      },
    ],
  },
  Hireme: {
    title: "Biodata",
    subtitle: "TENTANG SAYA",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Hallo, nama saya Andri Firmansyah. Saya anak ke dua dari 3 bersaudara dan yang paling tua anak pertama itu bapak saya xixixi. Saya berdomisili dititik kordinat ini",
    link: "https://goo.gl/maps/dtQhGVLikpCVnWZi9",
    // text2: "Saling sayang dan kolaboratif",
    // text3: "Cukup sekian dari blog saya",
    // text4: "Moga mendapat kesan yang positif”",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Hubungi Saya",
    subtitle: "SUKA SUKA KALEAN",
    social_media: [
      {
        text: "firmansyahandr@gmail.com",
        icon: GrMail,
        // link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "08 (Dilanjut kamu ya, nanti kirim DM)",
        icon: MdCall,
        // link: "https://wa.me/1234567890",
      },
      {
        text: "firmansyahandr",
        icon: BsInstagram,
        link: "https://www.instagram.com/firmansyahandr/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
