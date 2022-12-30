const select = document.querySelector('.select');
const selectSelected = select.querySelector('.select__selected');
const selectResult = select.querySelector('.select__result');
const selectList = select.querySelector('.select__list');
const selectInput = select.querySelector('.select__input');
const selectCheckboxes = select.querySelector('.select__checkboxes');
const selectOptions = select.querySelector('.select__options');

const chronograph = select.querySelector('.select__chronograph');
const argentum = select.querySelector('.select__silver');
const gold = select.querySelector('.select__gold');

const priceValues = {
  low: 'от 400 до 500',
  medium: 'от 500 до 700',
  high: 'от 700 до 900',
  highest: 'от 900 до 1200',
  priceless: 'от 1200 до 1500',
};

const watchNames = {
  adriatica: 'Adriatica',
  anneklein: 'Anne Klein',
  armaniexchange: 'Armani Exchange',
  sunlight: 'Sunlight',
  casio: 'Casio',
  tissot: 'Tissot',
  edox: 'Edox',
  nika: 'Ника',
};

const priceDefault = {
  adriatica: priceValues.medium,
  anneklein: priceValues.low,
  armaniexchange: priceValues.medium,
  sunlight: priceValues.low,
  casio: priceValues.low,
  tissot: priceValues.high,
  edox: priceValues.highest,
  nika: priceValues.high,
};

const priceChronograph = {
  adriatica: priceValues.high,
  anneklein: priceValues.medium,
  armaniexchange: priceValues.high,
  sunlight: priceValues.medium,
  casio: priceValues.medium,
  tissot: priceValues.highest,
  edox: priceValues.highest,
  nika: priceValues.high,
};

const priceSilver = {
  tissot: priceValues.priceless,
  edox: priceValues.priceless,
  nika: priceValues.high,
};

const priceGold = {
  tissot: priceValues.priceless,
  edox: priceValues.priceless,
  nika: priceValues.highest,
};

const silverChronographPrice = {
  tissot: priceValues.highest,
  edox: priceValues.highest,
  nika: priceValues.high,
};

const goldChronographPrice = {
  tissot: priceValues.highest,
  edox: priceValues.priceless,
  nika: priceValues.highest,
};

const canBePrecious = {
  tissot: true,
  edox: true,
  nika: true,
};

const checkParameter = () => {
  if (!chronograph.checked && !argentum.checked && !gold.checked) {
    return priceDefault[selectInput.value];
  } else if (chronograph.checked && !argentum.checked && !gold.checked) {
    return priceChronograph[selectInput.value];
  } else if (argentum.checked && !gold.checked && !chronograph.checked) {
    return priceSilver[selectInput.value];
  } else if (gold.checked && !chronograph.checked && !argentum.checked) {
    return priceGold[selectInput.value];
  } else if (chronograph.checked && argentum.checked && !gold.checked) {
    return silverChronographPrice[selectInput.value];
  } else if (chronograph.checked && gold.checked && !argentum.checked) {
    return goldChronographPrice[selectInput.value];
  } else {
    // eslint-disable-next-line no-alert
    alert('error in checkParameter Function');
  }
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

const allCheckboxes = selectCheckboxes.querySelectorAll('input[type=checkbox]');

const initialState = () => {
  selectInput.value = '';
  allCheckboxes.forEach((item) => {
    item.disabled = true;
    item.checked = false;
  });
};

const setEnabled = () => {
  allCheckboxes.forEach((item) => {
    item.disabled = false;
  });
};

initialState();

const uncheck = () => {
  allCheckboxes.forEach((item) => {
    item.checked = false;
  });
};

select.addEventListener('click', (evt) => {
  if (evt.target.closest('.select__options')) {
    selectList.classList.remove('select__list--hidden');
  }
  if (evt.target.closest('.select__list')) {
    selectList.classList.add('select__list--hidden');
    uncheck();
    selectInput.value = evt.target.id;
    selectSelected.textContent = evt.target.textContent;
    if (selectInput.value) {
      setEnabled();
    }
    if (canBePrecious[selectInput.value]) {
      argentum.disabled = false;
      gold.disabled = false;
    } else {
      argentum.disabled = true;
      gold.disabled = true;
    }
  }

  if (evt.target.closest('.selected__label') && canBePrecious[selectInput.value]) {
    if (argentum.checked) {
      gold.disabled = true;
    }
    if (gold.checked) {
      argentum.disabled = true;
    }
    if (!gold.checked && !argentum.checked) {
      argentum.disabled = false;
      gold.disabled = false;
    }
  }
  if (priceDefault[selectInput.value]) {
    selectResult.textContent = checkParameter();
  }
});

//# sourceMappingURL=select.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL3NlbGVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0Jyk7XHJcbmNvbnN0IHNlbGVjdFNlbGVjdGVkID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX3NlbGVjdGVkJyk7XHJcbmNvbnN0IHNlbGVjdFJlc3VsdCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19yZXN1bHQnKTtcclxuY29uc3Qgc2VsZWN0TGlzdCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19saXN0Jyk7XHJcbmNvbnN0IHNlbGVjdElucHV0ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2lucHV0Jyk7XHJcbmNvbnN0IHNlbGVjdENoZWNrYm94ZXMgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fY2hlY2tib3hlcycpO1xyXG5jb25zdCBzZWxlY3RPcHRpb25zID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX29wdGlvbnMnKTtcclxuXHJcbmNvbnN0IGNocm9ub2dyYXBoID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2Nocm9ub2dyYXBoJyk7XHJcbmNvbnN0IGFyZ2VudHVtID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX3NpbHZlcicpO1xyXG5jb25zdCBnb2xkID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2dvbGQnKTtcclxuXHJcbmNvbnN0IHByaWNlVmFsdWVzID0ge1xyXG4gIGxvdzogJ9C+0YIgNDAwINC00L4gNTAwJyxcclxuICBtZWRpdW06ICfQvtGCIDUwMCDQtNC+IDcwMCcsXHJcbiAgaGlnaDogJ9C+0YIgNzAwINC00L4gOTAwJyxcclxuICBoaWdoZXN0OiAn0L7RgiA5MDAg0LTQviAxMjAwJyxcclxuICBwcmljZWxlc3M6ICfQvtGCIDEyMDAg0LTQviAxNTAwJyxcclxufTtcclxuXHJcbmNvbnN0IHdhdGNoTmFtZXMgPSB7XHJcbiAgYWRyaWF0aWNhOiAnQWRyaWF0aWNhJyxcclxuICBhbm5la2xlaW46ICdBbm5lIEtsZWluJyxcclxuICBhcm1hbmlleGNoYW5nZTogJ0FybWFuaSBFeGNoYW5nZScsXHJcbiAgc3VubGlnaHQ6ICdTdW5saWdodCcsXHJcbiAgY2FzaW86ICdDYXNpbycsXHJcbiAgdGlzc290OiAnVGlzc290JyxcclxuICBlZG94OiAnRWRveCcsXHJcbiAgbmlrYTogJ9Cd0LjQutCwJyxcclxufTtcclxuXHJcbmNvbnN0IHByaWNlRGVmYXVsdCA9IHtcclxuICBhZHJpYXRpY2E6IHByaWNlVmFsdWVzLm1lZGl1bSxcclxuICBhbm5la2xlaW46IHByaWNlVmFsdWVzLmxvdyxcclxuICBhcm1hbmlleGNoYW5nZTogcHJpY2VWYWx1ZXMubWVkaXVtLFxyXG4gIHN1bmxpZ2h0OiBwcmljZVZhbHVlcy5sb3csXHJcbiAgY2FzaW86IHByaWNlVmFsdWVzLmxvdyxcclxuICB0aXNzb3Q6IHByaWNlVmFsdWVzLmhpZ2gsXHJcbiAgZWRveDogcHJpY2VWYWx1ZXMuaGlnaGVzdCxcclxuICBuaWthOiBwcmljZVZhbHVlcy5oaWdoLFxyXG59O1xyXG5cclxuY29uc3QgcHJpY2VDaHJvbm9ncmFwaCA9IHtcclxuICBhZHJpYXRpY2E6IHByaWNlVmFsdWVzLmhpZ2gsXHJcbiAgYW5uZWtsZWluOiBwcmljZVZhbHVlcy5tZWRpdW0sXHJcbiAgYXJtYW5pZXhjaGFuZ2U6IHByaWNlVmFsdWVzLmhpZ2gsXHJcbiAgc3VubGlnaHQ6IHByaWNlVmFsdWVzLm1lZGl1bSxcclxuICBjYXNpbzogcHJpY2VWYWx1ZXMubWVkaXVtLFxyXG4gIHRpc3NvdDogcHJpY2VWYWx1ZXMuaGlnaGVzdCxcclxuICBlZG94OiBwcmljZVZhbHVlcy5oaWdoZXN0LFxyXG4gIG5pa2E6IHByaWNlVmFsdWVzLmhpZ2gsXHJcbn07XHJcblxyXG5jb25zdCBwcmljZVNpbHZlciA9IHtcclxuICB0aXNzb3Q6IHByaWNlVmFsdWVzLnByaWNlbGVzcyxcclxuICBlZG94OiBwcmljZVZhbHVlcy5wcmljZWxlc3MsXHJcbiAgbmlrYTogcHJpY2VWYWx1ZXMuaGlnaCxcclxufTtcclxuXHJcbmNvbnN0IHByaWNlR29sZCA9IHtcclxuICB0aXNzb3Q6IHByaWNlVmFsdWVzLnByaWNlbGVzcyxcclxuICBlZG94OiBwcmljZVZhbHVlcy5wcmljZWxlc3MsXHJcbiAgbmlrYTogcHJpY2VWYWx1ZXMuaGlnaGVzdCxcclxufTtcclxuXHJcbmNvbnN0IHNpbHZlckNocm9ub2dyYXBoUHJpY2UgPSB7XHJcbiAgdGlzc290OiBwcmljZVZhbHVlcy5oaWdoZXN0LFxyXG4gIGVkb3g6IHByaWNlVmFsdWVzLmhpZ2hlc3QsXHJcbiAgbmlrYTogcHJpY2VWYWx1ZXMuaGlnaCxcclxufTtcclxuXHJcbmNvbnN0IGdvbGRDaHJvbm9ncmFwaFByaWNlID0ge1xyXG4gIHRpc3NvdDogcHJpY2VWYWx1ZXMuaGlnaGVzdCxcclxuICBlZG94OiBwcmljZVZhbHVlcy5wcmljZWxlc3MsXHJcbiAgbmlrYTogcHJpY2VWYWx1ZXMuaGlnaGVzdCxcclxufTtcclxuXHJcbmNvbnN0IGNhbkJlUHJlY2lvdXMgPSB7XHJcbiAgdGlzc290OiB0cnVlLFxyXG4gIGVkb3g6IHRydWUsXHJcbiAgbmlrYTogdHJ1ZSxcclxufTtcclxuXHJcbmNvbnN0IGNoZWNrUGFyYW1ldGVyID0gKCkgPT4ge1xyXG4gIGlmICghY2hyb25vZ3JhcGguY2hlY2tlZCAmJiAhYXJnZW50dW0uY2hlY2tlZCAmJiAhZ29sZC5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gcHJpY2VEZWZhdWx0W3NlbGVjdElucHV0LnZhbHVlXTtcclxuICB9IGVsc2UgaWYgKGNocm9ub2dyYXBoLmNoZWNrZWQgJiYgIWFyZ2VudHVtLmNoZWNrZWQgJiYgIWdvbGQuY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIHByaWNlQ2hyb25vZ3JhcGhbc2VsZWN0SW5wdXQudmFsdWVdO1xyXG4gIH0gZWxzZSBpZiAoYXJnZW50dW0uY2hlY2tlZCAmJiAhZ29sZC5jaGVja2VkICYmICFjaHJvbm9ncmFwaC5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gcHJpY2VTaWx2ZXJbc2VsZWN0SW5wdXQudmFsdWVdO1xyXG4gIH0gZWxzZSBpZiAoZ29sZC5jaGVja2VkICYmICFjaHJvbm9ncmFwaC5jaGVja2VkICYmICFhcmdlbnR1bS5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gcHJpY2VHb2xkW3NlbGVjdElucHV0LnZhbHVlXTtcclxuICB9IGVsc2UgaWYgKGNocm9ub2dyYXBoLmNoZWNrZWQgJiYgYXJnZW50dW0uY2hlY2tlZCAmJiAhZ29sZC5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gc2lsdmVyQ2hyb25vZ3JhcGhQcmljZVtzZWxlY3RJbnB1dC52YWx1ZV07XHJcbiAgfSBlbHNlIGlmIChjaHJvbm9ncmFwaC5jaGVja2VkICYmIGdvbGQuY2hlY2tlZCAmJiAhYXJnZW50dW0uY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIGdvbGRDaHJvbm9ncmFwaFByaWNlW3NlbGVjdElucHV0LnZhbHVlXTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XHJcbiAgICBhbGVydCgnZXJyb3IgaW4gY2hlY2tQYXJhbWV0ZXIgRnVuY3Rpb24nKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVXYXRjaExpc3QgPSAoKSA9PiB7XHJcbiAgT2JqZWN0LmtleXMod2F0Y2hOYW1lcykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0X19pdGVtJyk7XHJcbiAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgaXRlbSk7XHJcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IHdhdGNoTmFtZXNbaXRlbV07XHJcbiAgICBzZWxlY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNyZWF0ZVdhdGNoTGlzdCgpO1xyXG5cclxuY29uc3QgYWxsQ2hlY2tib3hlcyA9IHNlbGVjdENoZWNrYm94ZXMucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9ICgpID0+IHtcclxuICBzZWxlY3RJbnB1dC52YWx1ZSA9ICcnO1xyXG4gIGFsbENoZWNrYm94ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNldEVuYWJsZWQgPSAoKSA9PiB7XHJcbiAgYWxsQ2hlY2tib3hlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5pbml0aWFsU3RhdGUoKTtcclxuXHJcbmNvbnN0IHVuY2hlY2sgPSAoKSA9PiB7XHJcbiAgYWxsQ2hlY2tib3hlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9KTtcclxufTtcclxuXHJcbnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcclxuICBpZiAoZXZ0LnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0X19vcHRpb25zJykpIHtcclxuICAgIHNlbGVjdExpc3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0X19saXN0LS1oaWRkZW4nKTtcclxuICB9XHJcbiAgaWYgKGV2dC50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdF9fbGlzdCcpKSB7XHJcbiAgICBzZWxlY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdF9fbGlzdC0taGlkZGVuJyk7XHJcbiAgICB1bmNoZWNrKCk7XHJcbiAgICBzZWxlY3RJbnB1dC52YWx1ZSA9IGV2dC50YXJnZXQuaWQ7XHJcbiAgICBzZWxlY3RTZWxlY3RlZC50ZXh0Q29udGVudCA9IGV2dC50YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICBpZiAoc2VsZWN0SW5wdXQudmFsdWUpIHtcclxuICAgICAgc2V0RW5hYmxlZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNhbkJlUHJlY2lvdXNbc2VsZWN0SW5wdXQudmFsdWVdKSB7XHJcbiAgICAgIGFyZ2VudHVtLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIGdvbGQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFyZ2VudHVtLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgZ29sZC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoZXZ0LnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0ZWRfX2xhYmVsJykgJiYgY2FuQmVQcmVjaW91c1tzZWxlY3RJbnB1dC52YWx1ZV0pIHtcclxuICAgIGlmIChhcmdlbnR1bS5jaGVja2VkKSB7XHJcbiAgICAgIGdvbGQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGdvbGQuY2hlY2tlZCkge1xyXG4gICAgICBhcmdlbnR1bS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoIWdvbGQuY2hlY2tlZCAmJiAhYXJnZW50dW0uY2hlY2tlZCkge1xyXG4gICAgICBhcmdlbnR1bS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICBnb2xkLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChwcmljZURlZmF1bHRbc2VsZWN0SW5wdXQudmFsdWVdKSB7XHJcbiAgICBzZWxlY3RSZXN1bHQudGV4dENvbnRlbnQgPSBjaGVja1BhcmFtZXRlcigpO1xyXG4gIH1cclxufSk7XHJcbiJdLCJmaWxlIjoic2VsZWN0LmpzIn0=
