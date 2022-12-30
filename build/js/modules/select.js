const select = document.querySelector('.select');
const selectSelected = select.querySelector('.select__selected');
const selectResult = select.querySelector('.select__result');
const selectList = select.querySelector('.select__list');
const selectInput = select.querySelector('.select__input');

const watchNames = {
  casio: 'Casio',
  tissot: 'Tissot',
  edox: 'Edox',
  nika: 'Ника',
};

const watchPrice = {
  casio: 'от 500 до 700',
  tissot: 'от 700 до 1200',
  edox: 'от 900 до 1200',
  nika: 'от 700 до 1200',
};

const createWatchList = () => {
  Object.keys(watchNames).forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add('select__item');
    listItem.setAttribute('id', item);
    listItem.textContent = watchNames[item];
    selectList.appendChild(listItem);
  });
};
createWatchList();

selectList.addEventListener('click', (evt) => {
  selectInput.value = evt.target.id;
  selectSelected.textContent = evt.target.textContent;
});

select.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (watchPrice[selectInput.value]) {
    selectResult.textContent = watchPrice[selectInput.value];
  }
});

//# sourceMappingURL=select.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL3NlbGVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0Jyk7XHJcbmNvbnN0IHNlbGVjdFNlbGVjdGVkID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX3NlbGVjdGVkJyk7XHJcbmNvbnN0IHNlbGVjdFJlc3VsdCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19yZXN1bHQnKTtcclxuY29uc3Qgc2VsZWN0TGlzdCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19saXN0Jyk7XHJcbmNvbnN0IHNlbGVjdElucHV0ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2lucHV0Jyk7XHJcblxyXG5jb25zdCB3YXRjaE5hbWVzID0ge1xyXG4gIGNhc2lvOiAnQ2FzaW8nLFxyXG4gIHRpc3NvdDogJ1Rpc3NvdCcsXHJcbiAgZWRveDogJ0Vkb3gnLFxyXG4gIG5pa2E6ICfQndC40LrQsCcsXHJcbn07XHJcblxyXG5jb25zdCB3YXRjaFByaWNlID0ge1xyXG4gIGNhc2lvOiAn0L7RgiA1MDAg0LTQviA3MDAnLFxyXG4gIHRpc3NvdDogJ9C+0YIgNzAwINC00L4gMTIwMCcsXHJcbiAgZWRveDogJ9C+0YIgOTAwINC00L4gMTIwMCcsXHJcbiAgbmlrYTogJ9C+0YIgNzAwINC00L4gMTIwMCcsXHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVXYXRjaExpc3QgPSAoKSA9PiB7XHJcbiAgT2JqZWN0LmtleXMod2F0Y2hOYW1lcykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0X19pdGVtJyk7XHJcbiAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgaXRlbSk7XHJcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IHdhdGNoTmFtZXNbaXRlbV07XHJcbiAgICBzZWxlY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuICB9KTtcclxufTtcclxuY3JlYXRlV2F0Y2hMaXN0KCk7XHJcblxyXG5zZWxlY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xyXG4gIHNlbGVjdElucHV0LnZhbHVlID0gZXZ0LnRhcmdldC5pZDtcclxuICBzZWxlY3RTZWxlY3RlZC50ZXh0Q29udGVudCA9IGV2dC50YXJnZXQudGV4dENvbnRlbnQ7XHJcbn0pO1xyXG5cclxuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcclxuICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAod2F0Y2hQcmljZVtzZWxlY3RJbnB1dC52YWx1ZV0pIHtcclxuICAgIHNlbGVjdFJlc3VsdC50ZXh0Q29udGVudCA9IHdhdGNoUHJpY2Vbc2VsZWN0SW5wdXQudmFsdWVdO1xyXG4gIH1cclxufSk7XHJcbiJdLCJmaWxlIjoic2VsZWN0LmpzIn0=
