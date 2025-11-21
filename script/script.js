const catalogo = [
  {
    id: crypto.randomUUID(),
    name: "Laptop",
    prezzo: 850,
    categoria: "Elettronica",
    imageUrl:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Smartphone",
    prezzo: 650,
    categoria: "Elettronica",
    imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Cuffie Wireless",
    prezzo: 120,
    categoria: "Elettronica",
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: 'Monitor 27"',
    prezzo: 280,
    categoria: "Elettronica",
    imageUrl:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Tastiera Meccanica",
    prezzo: 95,
    categoria: "Elettronica",
    imageUrl:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Mouse Gaming",
    prezzo: 65,
    categoria: "Elettronica",
    imageUrl:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Tablet",
    prezzo: 450,
    categoria: "Elettronica",
    imageUrl:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Smartwatch",
    prezzo: 220,
    categoria: "Elettronica",
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Fotocamera Digitale",
    prezzo: 780,
    categoria: "Elettronica",
    imageUrl:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Speaker Bluetooth",
    prezzo: 85,
    categoria: "Elettronica",
    imageUrl:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Divano 3 posti",
    prezzo: 650,
    categoria: "Casa",
    imageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Tavolo da pranzo",
    prezzo: 380,
    categoria: "Casa",
    imageUrl:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Lampada da tavolo",
    prezzo: 45,
    categoria: "Casa",
    imageUrl:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Libreria",
    prezzo: 180,
    categoria: "Casa",
    imageUrl:
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Tappeto",
    prezzo: 120,
    categoria: "Casa",
    imageUrl:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Sedia da ufficio",
    prezzo: 150,
    categoria: "Casa",
    imageUrl:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Comodino",
    prezzo: 85,
    categoria: "Casa",
    imageUrl:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Specchio",
    prezzo: 95,
    categoria: "Casa",
    imageUrl:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Scrivania",
    prezzo: 220,
    categoria: "Casa",
    imageUrl:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Set di pentole",
    prezzo: 140,
    categoria: "Casa",
    imageUrl:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Rastrello",
    prezzo: 25,
    categoria: "Giardino",
    imageUrl:
      "https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Annaffiatoio",
    prezzo: 18,
    categoria: "Giardino",
    imageUrl:
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Tosaerba",
    prezzo: 320,
    categoria: "Giardino",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Set da giardinaggio",
    prezzo: 45,
    categoria: "Giardino",
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Vasi decorativi",
    prezzo: 35,
    categoria: "Giardino",
    imageUrl:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Ombrellone",
    prezzo: 110,
    categoria: "Giardino",
    imageUrl:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Set mobili giardino",
    prezzo: 450,
    categoria: "Giardino",
    imageUrl:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Barbecue",
    prezzo: 280,
    categoria: "Giardino",
    imageUrl:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Fontana decorativa",
    prezzo: 195,
    categoria: "Giardino",
    imageUrl:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop",
  },
  {
    id: crypto.randomUUID(),
    name: "Luci da esterno",
    prezzo: 75,
    categoria: "Giardino",
    imageUrl:
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=400&h=300&fit=crop",
  },
];

const container = document.getElementById("container");
catalogo.forEach((prodotto) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
        <img src="${prodotto.imageUrl}" alt="${prodotto.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${prodotto.name}</h3>
                    <span class="product-category">${prodotto.categoria}</span>
                    <p class="product-price">€${prodotto.prezzo}</p>
                </div>
    `;
  container.appendChild(card);
});
