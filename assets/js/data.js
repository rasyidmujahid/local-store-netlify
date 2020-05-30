var app = new Vue({
  el: '#store',
  data: {
    stores: [{
        id: 1,
        tag: ['sembako', 'makanan'],
        name: 'Toko Raffa',
        description: 'Sembako dan aneka kue',
        cover_image: 'assets/img/sembako.jpg',
        seller_name: 'Mega',
        mobile_no: '082110873440',
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
        mobile_no: '087885727559',
        whatsapp: 'https://wa.me/6287885727559'
      },
      {
        id: 3,
        tag: ['sembako'],
        name: 'Toko Kosama',
        description: 'Air mineral dan sembako',
        cover_image: 'assets/img/galon.jpg',
        seller_name: 'Saleh',
        mobile_no: '081210971405',
        whatsapp: 'https://wa.me/6281210971405'
      },
      {
        id: 5,
        tag: ['kesehatan'],
        name: 'Toko Galeri Madina (E3.18)',
        description: 'Madu dan herbal',
        cover_image: 'assets/img/madu.jpg',
        seller_name: 'Arif',
        mobile_no: '085624969749',
        whatsapp: 'https://wa.me/6285624969749'
      },
      {
        id: 5,
        tag: ['food'],
        name: 'Ozora Dimsum Kuliner',
        description: '',
        cover_image: 'assets/img/dimsum.jpg',
        seller_name: 'Franky',
        mobile_no: '085214929500',
        whatsapp: 'https://wa.me/6285214929500'
      }
    ]
  }
});