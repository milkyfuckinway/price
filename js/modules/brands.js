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
    price: 'от 500 до 700',
    priceChronograph: 'от 700 до 900',
    canBePrecious: false,
  },

  anneklein: {
    name: 'Anne Klein',
    key: 'anneklein',
    price: 'от 500 до 700',
    priceChronograph: 'от 700 до 900',
    canBePrecious: false,
  },

  casio: {
    name: 'Casio',
    key: 'casio',
    price: 'от 500 до 700',
    priceChronograph: 'от 700 до 900',
    canBePrecious: false,
  },

  edox: {
    name: 'Edox',
    key: 'edox',
    price: 'от 700 до 900',
    priceChronograph: 'от 900 до 1200',
    canBePrecious: true,
    priceSilver: 'от 900 до 1200',
    priceSilverChronograph: 'от 900 до 1200',
    priceGold: 'от 1200 до 1500',
    priceGoldChronogpaph: 'от 1200 до 1500',
  },

  nika: {
    name: 'Ника',
    key: 'nika',
    price: 'от 700 до 900',
    priceChronograph: 'от 700 до 900',
    canBePrecious: true,
    priceSilver: 'от 700 до 900',
    priceSilverChronograph: 'от 700 до 900',
    priceGold: 'от 900 до 1200',
    priceGoldChronogpaph: 'от 900 до 1500',
  },
};

export { watchBrands };

//# sourceMappingURL=brands.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL2JyYW5kcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCB3YXRjaE5hbWVzID0ge1xyXG4vLyAgIGFkcmlhdGljYTogJ0FkcmlhdGljYScsXHJcbi8vICAgYW5uZWtsZWluOiAnQW5uZSBLbGVpbicsXHJcbi8vICAgYXJtYW5pZXhjaGFuZ2U6ICdBcm1hbmkgRXhjaGFuZ2UnLFxyXG4vLyAgIHN1bmxpZ2h0OiAnU3VubGlnaHQnLFxyXG4vLyAgIGNhc2lvOiAnQ2FzaW8nLFxyXG4vLyAgIHRpc3NvdDogJ1Rpc3NvdCcsXHJcbi8vICAgZWRveDogJ0Vkb3gnLFxyXG4vLyAgIG5pa2E6ICfQndC40LrQsCcsXHJcbi8vIH07XHJcblxyXG5jb25zdCB3YXRjaEJyYW5kcyA9IHtcclxuICBhZHJpYXRpY2E6IHtcclxuICAgIG5hbWU6ICdBZHJpYXRpY2EnLFxyXG4gICAga2V5OiAnYWRyaWF0aWNhJyxcclxuICAgIHByaWNlOiAn0L7RgiA1MDAg0LTQviA3MDAnLFxyXG4gICAgcHJpY2VDaHJvbm9ncmFwaDogJ9C+0YIgNzAwINC00L4gOTAwJyxcclxuICAgIGNhbkJlUHJlY2lvdXM6IGZhbHNlLFxyXG4gIH0sXHJcblxyXG4gIGFubmVrbGVpbjoge1xyXG4gICAgbmFtZTogJ0FubmUgS2xlaW4nLFxyXG4gICAga2V5OiAnYW5uZWtsZWluJyxcclxuICAgIHByaWNlOiAn0L7RgiA1MDAg0LTQviA3MDAnLFxyXG4gICAgcHJpY2VDaHJvbm9ncmFwaDogJ9C+0YIgNzAwINC00L4gOTAwJyxcclxuICAgIGNhbkJlUHJlY2lvdXM6IGZhbHNlLFxyXG4gIH0sXHJcblxyXG4gIGNhc2lvOiB7XHJcbiAgICBuYW1lOiAnQ2FzaW8nLFxyXG4gICAga2V5OiAnY2FzaW8nLFxyXG4gICAgcHJpY2U6ICfQvtGCIDUwMCDQtNC+IDcwMCcsXHJcbiAgICBwcmljZUNocm9ub2dyYXBoOiAn0L7RgiA3MDAg0LTQviA5MDAnLFxyXG4gICAgY2FuQmVQcmVjaW91czogZmFsc2UsXHJcbiAgfSxcclxuXHJcbiAgZWRveDoge1xyXG4gICAgbmFtZTogJ0Vkb3gnLFxyXG4gICAga2V5OiAnZWRveCcsXHJcbiAgICBwcmljZTogJ9C+0YIgNzAwINC00L4gOTAwJyxcclxuICAgIHByaWNlQ2hyb25vZ3JhcGg6ICfQvtGCIDkwMCDQtNC+IDEyMDAnLFxyXG4gICAgY2FuQmVQcmVjaW91czogdHJ1ZSxcclxuICAgIHByaWNlU2lsdmVyOiAn0L7RgiA5MDAg0LTQviAxMjAwJyxcclxuICAgIHByaWNlU2lsdmVyQ2hyb25vZ3JhcGg6ICfQvtGCIDkwMCDQtNC+IDEyMDAnLFxyXG4gICAgcHJpY2VHb2xkOiAn0L7RgiAxMjAwINC00L4gMTUwMCcsXHJcbiAgICBwcmljZUdvbGRDaHJvbm9ncGFwaDogJ9C+0YIgMTIwMCDQtNC+IDE1MDAnLFxyXG4gIH0sXHJcblxyXG4gIG5pa2E6IHtcclxuICAgIG5hbWU6ICfQndC40LrQsCcsXHJcbiAgICBrZXk6ICduaWthJyxcclxuICAgIHByaWNlOiAn0L7RgiA3MDAg0LTQviA5MDAnLFxyXG4gICAgcHJpY2VDaHJvbm9ncmFwaDogJ9C+0YIgNzAwINC00L4gOTAwJyxcclxuICAgIGNhbkJlUHJlY2lvdXM6IHRydWUsXHJcbiAgICBwcmljZVNpbHZlcjogJ9C+0YIgNzAwINC00L4gOTAwJyxcclxuICAgIHByaWNlU2lsdmVyQ2hyb25vZ3JhcGg6ICfQvtGCIDcwMCDQtNC+IDkwMCcsXHJcbiAgICBwcmljZUdvbGQ6ICfQvtGCIDkwMCDQtNC+IDEyMDAnLFxyXG4gICAgcHJpY2VHb2xkQ2hyb25vZ3BhcGg6ICfQvtGCIDkwMCDQtNC+IDE1MDAnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgeyB3YXRjaEJyYW5kcyB9O1xyXG4iXSwiZmlsZSI6ImJyYW5kcy5qcyJ9
