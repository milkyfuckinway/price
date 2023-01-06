// const watchNames = {
//   adriatica: 'Adriatica',
//   anneklein: 'Anne Klein',
//   armaniexchange: 'Armani Exchange',
//   sunlight: 'Sunlight',
//   casio: 'Casio',
//   tissot: 'Tissot',
//   edox: 'Edox',
//   nika: 'Ника',
// };

const watchBrands = {
  adriatica: {
    name: 'Adriatica',
    key: 'adriatica',
    canBePrecious: false,
    price: 'от 500 до 700',
    priceChronograph: 'от 700 до 900',
    priceSilver: false,
    priceSilverChronograph: false,
    priceGold: false,
    priceGoldChronogpaph: false,
  },

  anneklein: {
    name: 'Anne Klein',
    key: 'anneklein',
    canBePrecious: false,
    price: 'от 500 до 700',
    priceChronograph: 'от 700 до 900',
    priceSilver: false,
    priceSilverChronograph: false,
    priceGold: false,
    priceGoldChronogpaph: false,
  },

  casio: {
    name: 'Casio',
    key: 'casio',
    canBePrecious: false,
    price: 'от 500 до 700',
    priceChronograph: 'от 700 до 900',
    priceSilver: false,
    priceSilverChronograph: false,
    priceGold: false,
    priceGoldChronogpaph: false,
  },

  nika: {
    name: 'Ника',
    key: 'nika',
    canBePrecious: true,
    price: 'от 700 до 900',
    priceChronograph: 'от 700 до 900',
    priceSilver: 'от 700 до 900',
    priceSilverChronograph: 'от 700 до 900',
    priceGold: 'от 900 до 1200',
    priceGoldChronogpaph: 'от 900 до 1500',
  },
};

export { watchBrands };

//# sourceMappingURL=brands.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL2JyYW5kcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCB3YXRjaE5hbWVzID0ge1xyXG4vLyAgIGFkcmlhdGljYTogJ0FkcmlhdGljYScsXHJcbi8vICAgYW5uZWtsZWluOiAnQW5uZSBLbGVpbicsXHJcbi8vICAgYXJtYW5pZXhjaGFuZ2U6ICdBcm1hbmkgRXhjaGFuZ2UnLFxyXG4vLyAgIHN1bmxpZ2h0OiAnU3VubGlnaHQnLFxyXG4vLyAgIGNhc2lvOiAnQ2FzaW8nLFxyXG4vLyAgIHRpc3NvdDogJ1Rpc3NvdCcsXHJcbi8vICAgZWRveDogJ0Vkb3gnLFxyXG4vLyAgIG5pa2E6ICfQndC40LrQsCcsXHJcbi8vIH07XHJcblxyXG5jb25zdCB3YXRjaEJyYW5kcyA9IHtcclxuICBhZHJpYXRpY2E6IHtcclxuICAgIG5hbWU6ICdBZHJpYXRpY2EnLFxyXG4gICAga2V5OiAnYWRyaWF0aWNhJyxcclxuICAgIGNhbkJlUHJlY2lvdXM6IGZhbHNlLFxyXG4gICAgcHJpY2U6ICfQvtGCIDUwMCDQtNC+IDcwMCcsXHJcbiAgICBwcmljZUNocm9ub2dyYXBoOiAn0L7RgiA3MDAg0LTQviA5MDAnLFxyXG4gICAgcHJpY2VTaWx2ZXI6IGZhbHNlLFxyXG4gICAgcHJpY2VTaWx2ZXJDaHJvbm9ncmFwaDogZmFsc2UsXHJcbiAgICBwcmljZUdvbGQ6IGZhbHNlLFxyXG4gICAgcHJpY2VHb2xkQ2hyb25vZ3BhcGg6IGZhbHNlLFxyXG4gIH0sXHJcblxyXG4gIGFubmVrbGVpbjoge1xyXG4gICAgbmFtZTogJ0FubmUgS2xlaW4nLFxyXG4gICAga2V5OiAnYW5uZWtsZWluJyxcclxuICAgIGNhbkJlUHJlY2lvdXM6IGZhbHNlLFxyXG4gICAgcHJpY2U6ICfQvtGCIDUwMCDQtNC+IDcwMCcsXHJcbiAgICBwcmljZUNocm9ub2dyYXBoOiAn0L7RgiA3MDAg0LTQviA5MDAnLFxyXG4gICAgcHJpY2VTaWx2ZXI6IGZhbHNlLFxyXG4gICAgcHJpY2VTaWx2ZXJDaHJvbm9ncmFwaDogZmFsc2UsXHJcbiAgICBwcmljZUdvbGQ6IGZhbHNlLFxyXG4gICAgcHJpY2VHb2xkQ2hyb25vZ3BhcGg6IGZhbHNlLFxyXG4gIH0sXHJcblxyXG4gIGNhc2lvOiB7XHJcbiAgICBuYW1lOiAnQ2FzaW8nLFxyXG4gICAga2V5OiAnY2FzaW8nLFxyXG4gICAgY2FuQmVQcmVjaW91czogZmFsc2UsXHJcbiAgICBwcmljZTogJ9C+0YIgNTAwINC00L4gNzAwJyxcclxuICAgIHByaWNlQ2hyb25vZ3JhcGg6ICfQvtGCIDcwMCDQtNC+IDkwMCcsXHJcbiAgICBwcmljZVNpbHZlcjogZmFsc2UsXHJcbiAgICBwcmljZVNpbHZlckNocm9ub2dyYXBoOiBmYWxzZSxcclxuICAgIHByaWNlR29sZDogZmFsc2UsXHJcbiAgICBwcmljZUdvbGRDaHJvbm9ncGFwaDogZmFsc2UsXHJcbiAgfSxcclxuXHJcbiAgbmlrYToge1xyXG4gICAgbmFtZTogJ9Cd0LjQutCwJyxcclxuICAgIGtleTogJ25pa2EnLFxyXG4gICAgY2FuQmVQcmVjaW91czogdHJ1ZSxcclxuICAgIHByaWNlOiAn0L7RgiA3MDAg0LTQviA5MDAnLFxyXG4gICAgcHJpY2VDaHJvbm9ncmFwaDogJ9C+0YIgNzAwINC00L4gOTAwJyxcclxuICAgIHByaWNlU2lsdmVyOiAn0L7RgiA3MDAg0LTQviA5MDAnLFxyXG4gICAgcHJpY2VTaWx2ZXJDaHJvbm9ncmFwaDogJ9C+0YIgNzAwINC00L4gOTAwJyxcclxuICAgIHByaWNlR29sZDogJ9C+0YIgOTAwINC00L4gMTIwMCcsXHJcbiAgICBwcmljZUdvbGRDaHJvbm9ncGFwaDogJ9C+0YIgOTAwINC00L4gMTUwMCcsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IHdhdGNoQnJhbmRzIH07XHJcbiJdLCJmaWxlIjoiYnJhbmRzLmpzIn0=
