var app = new Vue({
  el: '#store',
  data: {
    stores: [{
        id: 1,
        tag: ['sembako', 'makanan'],
        name: 'Toko Raffa',
        description: 'Sembako dan aneka kue',
        cover_image: 'assets/img/aneka-kue.jpg',
        seller_name: 'Mega',
        mobile_numbers: ['082110873440'],
        whatsapp: 'https://wa.me/62821108734401',
        instagram: 'https://www.instagram.com/r3_kitchen'
      },
      {
        id: 2,
        tag: ['sembako'],
        name: 'Toko Eza Mitra Usaha',
        description: 'Sembako dan pampers',
        cover_image: 'assets/img/sembako.jpg',
        seller_name: 'Ajo',
        mobile_numbers: ['087885727559'],
        whatsapp: 'https://wa.me/6287885727559'
      },
      {
        id: 3,
        tag: ['sembako'],
        name: 'Toko Kosama',
        description: 'Air mineral dan sembako',
        cover_image: 'assets/img/galon.jpg',
        seller_name: 'Saleh',
        mobile_numbers: ['081210971405'],
        whatsapp: 'https://wa.me/6281210971405'
      },
      {
        id: 4,
        tag: ['kesehatan'],
        name: 'Toko Galeri Madina',
        description: 'Madu dan herbal',
        cover_image: 'assets/img/madu.jpg',
        seller_name: 'Arif (E3.18)',
        mobile_numbers: ['085624969749'],
        whatsapp: 'https://wa.me/6285624969749'
      },
      {
        id: 5,
        tag: ['makanan'],
        name: 'Ozora Dimsum Kuliner',
        description: 'Dimsum',
        cover_image: 'assets/img/dimsum.jpg',
        seller_name: 'Franky',
        mobile_numbers: ['085214929500'],
        whatsapp: 'https://wa.me/6285214929500'
      },
      {
        id: 6,
        tag: ['makanan'],
        name: 'Ezra Celullar',
        description: 'Ayam Bahar (Kuliner Ayam Bakar)',
        cover_image: 'assets/img/ayam-bakar.jpg',
        seller_name: 'Bahar',
        mobile_numbers: ['081295450548', '085591401909'],
        whatsapp: 'https://wa.me/6281295450548'
      },
      {
        id: 7,
        tag: ['makanan', 'sembako'],
        name: 'Toko Juli',
        description: 'Kuliner Mie ayam & sambal bawang, Aqua & Telur Ayam',
        cover_image: 'assets/img/mie-ayam.jpg',
        seller_name: 'Ibu Juli',
        mobile_numbers: ['081287308995'],
        whatsapp: 'https://wa.me/6281287308995'
      },
      {
        id: 8,
        tag: ['makanan', 'frozen'],
        name: 'Pia, bakso, ikan dori, kentang frozen, kue dan kue kering',
        description: 'Pia, bakso,ikan dori,kentang Frozen,kue dan kue kering',
        cover_image: 'assets/img/pia.jpg',
        seller_name: '[]',
        mobile_numbers: ['081315779438'],
        whatsapp: 'https://wa.me/6281315779438'
      },
      {
        id: 9,
        tag: ['makanan', 'kesehatan'],
        name: 'Kios SK',
        description: 'Sambal kacang pecel Madiun, kebab & Dettol cair antiseptik',
        cover_image: 'assets/img/pecel.jpg',
        seller_name: 'Ibu Daniel',
        mobile_numbers: ['085776452036'],
        whatsapp: 'https://wa.me/6285776452036'
      },
      {
        id: 10,
        tag: ['makanan', 'sembako'],
        name: 'Murni / Mustofa',
        description: 'jual aneka menu takjilan, kripik pisang dan Telur ayam',
        cover_image: 'assets/img/keripik-pisang.jpg',
        seller_name: 'Murni / Mustofa',
        mobile_numbers: ['081382107077', '081398650908'],
        whatsapp: 'https://wa.me/6281382107077'
      },
      {
        id: 11,
        tag: ['sembako'],
        name: 'Toko Yuni',
        description: 'Sembako & Aqua & Gas',
        cover_image: 'assets/img/sembako.jpg',
        seller_name: 'Yuni',
        mobile_numbers: ['085782886686'],
        whatsapp: 'https://wa.me/6285782886686'
      },
      {
        id: 12,
        tag: ['daging', 'frozen', 'sayur'],
        name: 'Toko Az-Zahra',
        description: 'Jual ayam segar, bawang merah, bawang putih, bawang bombay, aneka frozen food',
        cover_image: 'assets/img/ayam-segar.jpg',
        seller_name: '[]',
        mobile_numbers: ['081212370829'],
        whatsapp: 'https://wa.me/6281212370829'
      },
      {
        id: 13,
        tag: ['makanan'],
        name: 'Mullia kitchen',
        description: 'Gado2, bekakak, ayam, tahu jelotot & sintiling singkong',
        cover_image: 'assets/img/gado.jpg',
        seller_name: 'Ibu Wiwi D7 no 23',
        mobile_numbers: ['081290206000'],
        whatsapp: 'https://wa.me/6281290206000'
      },
      {
        id: 14,
        tag: ['makanan'],
        name: 'Dapoer Bang Doel',
        description: 'Nasgor biasa/seafood, bawang goreng, aneka sambal',
        cover_image: 'assets/img/nasgor.jpg',
        seller_name: 'Blok C2',
        mobile_numbers: ['081285124995', '085939137261'],
        whatsapp: 'https://wa.me/6281285124995'
      },
      {
        id: 15,
        tag: ['makanan', 'daging', 'minuman', 'sayur'],
        name: 'Toko Ibrahim',
        description: 'Slice beef, cabe keriting, cabe merah, kue putri salju, keripik bawang dan minuman lemon',
        cover_image: 'assets/img/slice-beef.jpg',
        seller_name: 'Ibrahim',
        mobile_numbers: ['081212370829'],
        whatsapp: 'https://wa.me/6281212370829'
      },
      {
        id: 16,
        tag: ['sayur', 'makanan'],
        name: 'Toko Akbar',
        description: 'Menyediakan sayur mayur, singkong, ubi (ungu/merah/kuning), pisang dan bahan2 rujakan jg ada',
        cover_image: 'assets/img/sayur.jpg',
        seller_name: 'Akbar',
        mobile_numbers: ['081210417724'],
        whatsapp: 'https://wa.me/6281210417724'
      },
      {
        id: 17,
        tag: ['fashion', 'tas'],
        name: 'Maritza branded',
        description: 'Menjual tas branded second import Monza',
        cover_image: 'assets/img/monza.jpg',
        seller_name: 'Maritza Blok C no. 48',
        mobile_numbers: ['081388451199'],
        whatsapp: 'https://wa.me/6281388451199'
      },
      {
        id: 18,
        tag: ['minuman'],
        name: 'Teh Tarik Jelly',
        description: 'Teh Tarik Jelly. Tanpa Pengawet, Gula Asli, Ada Izin Dinkes',
        cover_image: 'assets/img/teh-tarik.jpg',
        seller_name: 'Blok C no 48',
        mobile_numbers: ['081382601912'],
        whatsapp: 'https://wa.me/6281382601912'
      },
      {
        id: 19,
        tag: ['keperluan rumah', 'kamar tidur'],
        name: 'YangUniQ',
        description: 'Custom ukuran sprei, bedcover, quilt cover, chussion cover, babynest, bansui, alas stroller dll',
        cover_image: 'assets/img/sprei.jpg',
        seller_name: 'B 26',
        mobile_numbers: ['083133990199'],
        whatsapp: 'https://wa.me/6283133990199'
      },
      {
        id: 20,
        tag: ['makanan', 'frozen'],
        name: 'Bakso dan Sosis Pak Joko',
        description: 'Bakso asli daging sapi pak Joko dan sosis solo',
        cover_image: 'assets/img/bakso.jpeg',
        seller_name: 'Pak Joko',
        mobile_numbers: ['081318999998'],
        whatsapp: 'https://wa.me/6281318999998'
      },
      {
        id: 21,
        tag: ['makanan'],
        name: 'Joyo Family catering',
        description: 'paru ungkep, ayam ungkep, krupuk bangka, krupuk tengriri, empal goreng, sambel ROA, sambel hijau',
        cover_image: 'assets/img/ayam-ungkep.jpg',
        seller_name: 'Joyo',
        mobile_numbers: ['081298611611'],
        whatsapp: 'https://wa.me/6281298611611'
      },
      {
        id: 22,
        tag: ['makanan'],
        name: 'JFC Aneka makanan',
        description: 'Aneka makanan',
        cover_image: 'assets/img/aneka-makanan.jpg',
        seller_name: 'JFC',
        mobile_numbers: ['081310655656'],
        whatsapp: 'https://wa.me/6281310655656',
        instagram: 'https://www.instagram.com/joyofamilycatring'
      },
      {
        id: 23,
        tag: ['makanan', 'frozen'],
        name: 'Pempek Palembang AKA 252',
        description: 'Aneka kuliner khas Palembang dlm bentuk frozen food dan siap santap, seperti: aneka pempek, tekwan, model ikan, laksan, celimpungan. Aneka kue basah: maksuba, kojo, engkak ketan, srikaya ketan. Aneka masakan: pindang patin, pindang tulang, brengkes patin tempoyak. Menerima pesanan menu prasmanan maupun nasi kotak.',
        cover_image: 'assets/img/aneka-ikan.jpg',
        seller_name: 'Ibu Mike',
        mobile_numbers: ['+6287885170561'],
        whatsapp: 'https://wa.me/6287885170561'
      },
      {
        id: 24,
        tag: ['makanan', 'buah'],
        name: 'Toko buah Shila',
        description: 'Menjual bermacam-macam buah segar',
        cover_image: 'assets/img/buah-segar.jpg',
        seller_name: 'Shila Blok D7 no 3',
        mobile_numbers: ['081211379215'],
        whatsapp: 'https://wa.me/6281211379215'
      },
      {
        id: 25,
        tag: ['makanan'],
        name: 'Pawon Ira Solo',
        description: 'aneka makanan',
        cover_image: 'assets/img/aneka-makanan.jpeg',
        seller_name: '[]',
        mobile_numbers: ['081298611611'],
        whatsapp: 'https://wa.me/6281298611611'
      },
      {
        id: 26,
        tag: ['makanan'],
        name: 'Toko Kue Mama Aqila',
        description: 'Menu: Nastar, putri salju, kastengel, choco cookies. Menerima pesanan: macaroni schotel, cilok bumbu kacang, cilok kuah pedas, pisang lumer, ceker mercon.',
        cover_image: 'assets/img/makotel.jpg',
        seller_name: 'Mama Aqila',
        mobile_numbers: ['087852034227'],
        whatsapp: 'https://wa.me/6287852034227'
      },
      {
        id: 27,
        tag: ['makanan', 'baju', 'buku'],
        name: 'Dapur Melet & Elnoah',
        description: 'Keripik tempe, cookies n cake, buku, baju muslim anak',
        cover_image: 'assets/img/cookie-cake.jpg',
        seller_name: '[]',
        mobile_numbers: ['085776297569', '087783077299'],
        whatsapp: 'https://wa.me/6285776297569',
        instagram: 'https://instagram.com/dapurmelet'
      },
      {
        id: 28,
        tag: ['fashion', 'kecantikan'],
        name: 'Indah Istianah C-41',
        description: 'Menjual & menerima reseller product Oriflame : Skincare, Parfume Pria & Wanita, Personal Care, Make up, Wellbeing',
        cover_image: 'assets/img/oriflame.jpg',
        seller_name: 'Indah Istianah C-41',
        mobile_numbers: ['081392006176',],
        whatsapp: 'https://wa.me/6281392006176'
      },
      {
        id: 29,
        tag: ['optik', 'kesehatan'],
        name: 'Optik Cendrawasih',
        description: 'Periksa mata dan terima resep dokter',
        cover_image: 'assets/img/optik.jpg',
        seller_name: 'Yoyoh',
        mobile_numbers: ['087886666109',],
        whatsapp: 'https://wa.me/6287886666109'
      },
      {
        id: 30,
        tag: ['jasa', 'reparasi'],
        name: 'Garasi Bang Dzakha',
        description: 'Reparasi sepeda, komputer/PC, service dan maintenance',
        cover_image: 'assets/img/reparasi-sepeda.jpg',
        seller_name: 'Ardi Blok E',
        mobile_numbers: ['082111109222',],
        whatsapp: 'https://wa.me/6282111109222'
      },
    ]
  }
});
