const products = [
  {
      id: "a4f94d94-0b08-4dc3-ae8c-d97f0a81608e",
      name: "Teclado mecánico Corsair K95 RGB Platinum",
      description: "Teclado mecánico de alto rendimiento con retroiluminación RGB",
      quantity: 50,
      image: "https://m.media-amazon.com/images/I/710Z0Dt47EL._AC_UF894,1000_QL80_.jpg",
      price: 149.99,
      category: "Teclados"
  },
  {
      id: "2dc1e7e6-6b27-4b0b-b378-22d424201f18",
      name: "Mouse inalámbrico Logitech MX Master 3",
      description: "Mouse ergonómico de alta precisión con conectividad inalámbrica",
      quantity: 30,
      image: "https://m.media-amazon.com/images/I/31-FCheQpwL.jpg",
      price: 99.99,
      category: "Ratones"
  },
  {
      id: "5febf3a0-3b6f-40e4-8915-2eaae1cf8a23",
      name: "Monitor ASUS ROG Swift PG279Q",
      description: "Monitor gaming de 27 pulgadas con resolución WQHD y frecuencia de actualización de 144Hz",
      quantity: 20,
      image: "https://m.media-amazon.com/images/I/81Ti9ezZJoL._AC_UF894,1000_QL80_.jpg",
      price: 699.99,
      category: "Monitores"
  },
  {
      id: "4faa6d92-1b63-44af-bfa7-8e6c46b6b396",
      name: "Auriculares SteelSeries Arctis Pro Wireless",
      description: "Auriculares inalámbricos de alta fidelidad con sonido envolvente",
      quantity: 25,
      image: "https://m.media-amazon.com/images/I/81NJcT5E81L.jpg",
      price: 329.99,
      category: "Auriculares"
  },
  {
      id: "bfb39c52-50e4-4fc0-9e11-1e63639d54d3",
      name: "Impresora multifunción HP OfficeJet Pro 9015",
      description: "Impresora multifunción a color con conectividad WiFi y Ethernet",
      quantity: 15,
      image: "https://m.media-amazon.com/images/I/51Dqu1VGN8L._SL1500_.jpg",
      price: 229.99,
      category: "Impresoras"
  },
  {
      id: "7614290e-7ff3-49d8-a1e7-757a874d2441",
      name: "Webcam Logitech C920 HD Pro",
      description: "Cámara web HD con micrófono integrado para videollamadas",
      quantity: 40,
      image: "https://m.media-amazon.com/images/I/71iNwni9TsL.jpg",
      price: 79.99,
      category: "Cámaras web"
  },
  {
      id: "c52026ac-95b8-4c8a-8a7d-1cf3400a4cc1",
      name: "Disco duro externo Seagate Backup Plus Portable",
      description: "Disco duro externo portátil con capacidad de 2TB y conexión USB 3.0",
      quantity: 35,
      image: "https://m.media-amazon.com/images/I/9178I-zCAlL.jpg",
      price: 79.99,
      category: "Almacenamiento"
  },
  {
      id: "ff1d657a-4a9f-46a8-b6aa-00dbd5b8dfaa",
      name: "Tarjeta gráfica NVIDIA GeForce RTX 3080",
      description: "Tarjeta gráfica de última generación con arquitectura Ampere para gaming de alta gama",
      quantity: 10,
      image: "https://m.media-amazon.com/images/I/81SzNmM27EL.jpg",
      price: 799.99,
      category: "Componentes PC"
  },
  {
      id: "ea40e8f0-6e78-4e49-81af-8e9b1ec0b781",
      name: "Teclado inalámbrico Apple Magic Keyboard",
      description: "Teclado inalámbrico ultra delgado con tecnología Bluetooth",
      quantity: 20,
      image: "https://www.cyberpuerta.mx/img/product/M/CP-APPLE-MK2A3EA-2fdc9b.jpg",
      price: 99.99,
      category: "Teclados"
  },
  {
      id: "5e3f2cf7-3655-4f53-b880-b75d1fc312cb",
      name: "Monitor LG 34GN850-B Ultragear",
      description: "Monitor gaming ultrawide de 34 pulgadas con resolución QHD y frecuencia de actualización de 144Hz",
      quantity: 15,
      image: "https://www.lg.com/mx/images/monitores/md07507972/gallery/1600-4.jpg",
      price: 899.99,
      category: "Monitores"
  },
  {
      id: "cd2c5823-0be7-48c8-8b84-2d94b6a6a4c6",
      name: "Auriculares Bose QuietComfort 35 II",
      description: "Auriculares inalámbricos con cancelación de ruido y asistente de voz integrado",
      quantity: 25,
      image: "https://m.media-amazon.com/images/I/71RRAtLj53L.jpg",
      price: 299.99,
      category: "Auriculares"
  },
  {
      id: "f9ecb0f1-3be0-4f12-9972-18be0e356463",
      name: "Altavoces Bluetooth JBL Charge 4",
      description: "Altavoz portátil resistente al agua con batería de larga duración",
      quantity: 30,
      image: "https://m.media-amazon.com/images/I/31USOuSigCL.jpg",
      price: 149.99,
      category: "Altavoces"
  },
 
  {
      id: "71f4dab9-34f4-4bc3-8458-59cb8601c1f8",
      name: "Impresora láser Brother HL-L2350DW",
      description: "Impresora láser monocromática con impresión dúplex automática y WiFi",
      quantity: 15,
      image: "https://http2.mlstatic.com/D_NQ_NP_712506-MLA74221448483_012024-O.webp",
      price: 129.99,
      category: "Impresoras"
  },
  {
      id: "72b0c916-78ad-49a8-af0b-d9eb1f491d80",
      name: "Teclado Razer BlackWidow Elite",
      description: "Teclado mecánico diseñado para gaming con retroiluminación personalizable",
      quantity: 40,
      image: "https://cdn.gameplanet.com/wp-content/uploads/2022/12/17130252/810056140090-razer-teclado-blackwidow-v3-1.jpg",
      price: 129.99,
      category: "Teclados"
  },
  {
      id: "45c348ed-d20d-4a58-89f5-053bfcc8d5f7",
      name: "Monitor Dell UltraSharp U2719D",
      description: "Monitor de 27 pulgadas con resolución QHD y diseño sin bordes",
      quantity: 20,
      image: "https://m.media-amazon.com/images/I/81uQWDo3VOL.jpg",
      price: 349.99,
      category: "Monitores"
  },
  {
      id: "a06e27eb-2d87-4ed9-889d-f80c39e24878",
      name: "Auriculares HyperX Cloud Alpha",
      description: "Auriculares gaming con sonido envolvente y micrófono desmontable",
      quantity: 30,
      image: "https://m.media-amazon.com/images/I/71OSODnSJjL._AC_UF1000,1000_QL80_.jpg",
      price: 99.99,
      category: "Auriculares"
  },
  {
      id: "59be0c27-43db-4421-81a9-d3aa8e20b6af",
      name: "Ratón gaming Razer DeathAdder Elite",
      description: "Ratón gaming con sensor óptico de 16,000 DPI y switches mecánicos Razer",
      quantity: 25,
      image: "https://powerpc.mx/cdn/shop/files/RazerDeathAdderEliteEdicionDestiny2-02_1200x1200.png?v=1683948005",
      price: 69.99,
      category: "Ratones"
  }
];

const soon=[
  {
      id: "1d40a3e5-69cb-4a10-b456-af098d9e5d37",
      name: "Teclado mecánico HyperX Alloy Origins 60",
      image: "https://i.blogs.es/82b791/hyperx-alloy-origins-60/1366_2000.jpeg"
  },
  {
      id: "7b62d97a-208b-44f1-85d3-d714f6ac914d",
      name: "Ratón inalámbrico Logitech G Pro X Superlight",
      image: "https://gamersrd.com/wp-content/uploads/2022/08/Logitech-G-Pro-X-Superlight-Wireless-Gaming-Mouse-Review-GamersRD122.jpg"
  },
  {
      id: "91e6f91f-23cc-45d6-94d4-ee1c1c342c1d",
      name: "Monitor ASUS ROG Swift PG32UQX",
      image: "https://rog.asus.com/media/1578306578100.webp"
  },
  {
      id: "f52e80a4-cf62-468d-9462-52aa517779d2",
      name: "Auriculares Corsair HS80 RGB Wireless",
      image: "https://http2.mlstatic.com/D_NQ_NP_872608-MLM52592859896_112022-O.webp"
  },
  {
      id: "5a70d9c1-3f9b-4bdc-9f7e-6d400f0cf32e",
      name: "Webcam Razer Kiyo Pro",
      image: "https://i.ytimg.com/vi/oyoZ_rXQCXM/maxresdefault.jpg"
  },
  {
      id: "9be78a5f-0b88-4a68-b17f-39c36c464142",
      name: "Teclado Logitech G Pro X Mechanical TKL",
      image: "https://content.abt.com/image.php?image=/images/video/thumbnail/AV-6443249e9a1c9d20fe174c48d67cf063-16-9.jpg"
  }
];


      

module.exports ={
    products,
    soon
};