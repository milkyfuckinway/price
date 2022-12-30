const select = document.querySelector('.select');
const selectSelected = select.querySelector('.select__selected');
const selectResult = select.querySelector('.select__result');
const selectList = select.querySelector('.select__list');
const selectInput = select.querySelector('.select__input');
const selectCheckboxes = select.querySelector('.select__checkboxes');

const chronograph = select.querySelector('.select__chronograph');
const argentum = select.querySelector('.select__argentum');
const gold = select.querySelector('.select__gold');

const priceValues = {
  low: 'от 400 до 500',
  medium: 'от 500 до 700',
  high: 'от 700 до 900',
  highest: 'от 900 до 1200',
  priceless: 'от 1200 до 1500',
};

const watchNames = {
  sunlight: 'Sunlight',
  casio: 'Casio',
  tissot: 'Tissot',
  edox: 'Edox',
  nika: 'Ника',
};

const priceDefault = {
  sunlight: priceValues.low,
  casio: priceValues.low,
  tissot: priceValues.high,
  edox: priceValues.highest,
  nika: priceValues.high,
};

const priceChronograph = {
  sunlight: priceValues.medium,
  casio: priceValues.medium,
  tissot: priceValues.highest,
  edox: priceValues.highest,
  nika: priceValues.high,
};

const priceArgentum = {
  tissot: priceValues.priceless,
  edox: priceValues.priceless,
  nika: priceValues.high,
};

const priceGold = {
  tissot: priceValues.high,
  edox: priceValues.highest,
  nika: priceValues.highest,
};

const argentumChronographPrice = {
  tissot: priceValues.highest,
  edox: priceValues.highest,
  nika: priceValues.high,
};

const goldChronographPrice = {
  tissot: priceValues.highest,
  edox: priceValues.highest,
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
  }
  if (chronograph.checked && !argentum.checked && !gold.checked) {
    return priceChronograph[selectInput.value];
  }
  if (argentum.checked && !gold.checked && !chronograph.checked) {
    return priceArgentum[selectInput.value];
  }
  if (gold.checked && !chronograph.checked && !argentum.checked) {
    return priceGold[selectInput.value];
  }
  if (chronograph.checked && argentum.checked && !gold.checked) {
    return argentumChronographPrice[selectInput.value];
  }
  if (chronograph.checked && gold.checked && !argentum.checked) {
    return goldChronographPrice[selectInput.value];
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

const setDisabled = () => {
  allCheckboxes.forEach((item) => {
    item.disabled = true;
  });
};

const setEnabled = () => {
  allCheckboxes.forEach((item) => {
    item.disabled = false;
  });
};

setDisabled();

select.addEventListener('click', (evt) => {
  if (evt.target.closest('.select__list')) {
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
});

select.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (priceDefault[selectInput.value]) {
    selectResult.textContent = checkParameter();
  }
});

//# sourceMappingURL=select.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL3NlbGVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0Jyk7XHJcbmNvbnN0IHNlbGVjdFNlbGVjdGVkID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX3NlbGVjdGVkJyk7XHJcbmNvbnN0IHNlbGVjdFJlc3VsdCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19yZXN1bHQnKTtcclxuY29uc3Qgc2VsZWN0TGlzdCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19saXN0Jyk7XHJcbmNvbnN0IHNlbGVjdElucHV0ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2lucHV0Jyk7XHJcbmNvbnN0IHNlbGVjdENoZWNrYm94ZXMgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fY2hlY2tib3hlcycpO1xyXG5cclxuY29uc3QgY2hyb25vZ3JhcGggPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fY2hyb25vZ3JhcGgnKTtcclxuY29uc3QgYXJnZW50dW0gPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fYXJnZW50dW0nKTtcclxuY29uc3QgZ29sZCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19nb2xkJyk7XHJcblxyXG5jb25zdCBwcmljZVZhbHVlcyA9IHtcclxuICBsb3c6ICfQvtGCIDQwMCDQtNC+IDUwMCcsXHJcbiAgbWVkaXVtOiAn0L7RgiA1MDAg0LTQviA3MDAnLFxyXG4gIGhpZ2g6ICfQvtGCIDcwMCDQtNC+IDkwMCcsXHJcbiAgaGlnaGVzdDogJ9C+0YIgOTAwINC00L4gMTIwMCcsXHJcbiAgcHJpY2VsZXNzOiAn0L7RgiAxMjAwINC00L4gMTUwMCcsXHJcbn07XHJcblxyXG5jb25zdCB3YXRjaE5hbWVzID0ge1xyXG4gIHN1bmxpZ2h0OiAnU3VubGlnaHQnLFxyXG4gIGNhc2lvOiAnQ2FzaW8nLFxyXG4gIHRpc3NvdDogJ1Rpc3NvdCcsXHJcbiAgZWRveDogJ0Vkb3gnLFxyXG4gIG5pa2E6ICfQndC40LrQsCcsXHJcbn07XHJcblxyXG5jb25zdCBwcmljZURlZmF1bHQgPSB7XHJcbiAgc3VubGlnaHQ6IHByaWNlVmFsdWVzLmxvdyxcclxuICBjYXNpbzogcHJpY2VWYWx1ZXMubG93LFxyXG4gIHRpc3NvdDogcHJpY2VWYWx1ZXMuaGlnaCxcclxuICBlZG94OiBwcmljZVZhbHVlcy5oaWdoZXN0LFxyXG4gIG5pa2E6IHByaWNlVmFsdWVzLmhpZ2gsXHJcbn07XHJcblxyXG5jb25zdCBwcmljZUNocm9ub2dyYXBoID0ge1xyXG4gIHN1bmxpZ2h0OiBwcmljZVZhbHVlcy5tZWRpdW0sXHJcbiAgY2FzaW86IHByaWNlVmFsdWVzLm1lZGl1bSxcclxuICB0aXNzb3Q6IHByaWNlVmFsdWVzLmhpZ2hlc3QsXHJcbiAgZWRveDogcHJpY2VWYWx1ZXMuaGlnaGVzdCxcclxuICBuaWthOiBwcmljZVZhbHVlcy5oaWdoLFxyXG59O1xyXG5cclxuY29uc3QgcHJpY2VBcmdlbnR1bSA9IHtcclxuICB0aXNzb3Q6IHByaWNlVmFsdWVzLnByaWNlbGVzcyxcclxuICBlZG94OiBwcmljZVZhbHVlcy5wcmljZWxlc3MsXHJcbiAgbmlrYTogcHJpY2VWYWx1ZXMuaGlnaCxcclxufTtcclxuXHJcbmNvbnN0IHByaWNlR29sZCA9IHtcclxuICB0aXNzb3Q6IHByaWNlVmFsdWVzLmhpZ2gsXHJcbiAgZWRveDogcHJpY2VWYWx1ZXMuaGlnaGVzdCxcclxuICBuaWthOiBwcmljZVZhbHVlcy5oaWdoZXN0LFxyXG59O1xyXG5cclxuY29uc3QgYXJnZW50dW1DaHJvbm9ncmFwaFByaWNlID0ge1xyXG4gIHRpc3NvdDogcHJpY2VWYWx1ZXMuaGlnaGVzdCxcclxuICBlZG94OiBwcmljZVZhbHVlcy5oaWdoZXN0LFxyXG4gIG5pa2E6IHByaWNlVmFsdWVzLmhpZ2gsXHJcbn07XHJcblxyXG5jb25zdCBnb2xkQ2hyb25vZ3JhcGhQcmljZSA9IHtcclxuICB0aXNzb3Q6IHByaWNlVmFsdWVzLmhpZ2hlc3QsXHJcbiAgZWRveDogcHJpY2VWYWx1ZXMuaGlnaGVzdCxcclxuICBuaWthOiBwcmljZVZhbHVlcy5oaWdoZXN0LFxyXG59O1xyXG5cclxuY29uc3QgY2FuQmVQcmVjaW91cyA9IHtcclxuICB0aXNzb3Q6IHRydWUsXHJcbiAgZWRveDogdHJ1ZSxcclxuICBuaWthOiB0cnVlLFxyXG59O1xyXG5cclxuY29uc3QgY2hlY2tQYXJhbWV0ZXIgPSAoKSA9PiB7XHJcbiAgaWYgKCFjaHJvbm9ncmFwaC5jaGVja2VkICYmICFhcmdlbnR1bS5jaGVja2VkICYmICFnb2xkLmNoZWNrZWQpIHtcclxuICAgIHJldHVybiBwcmljZURlZmF1bHRbc2VsZWN0SW5wdXQudmFsdWVdO1xyXG4gIH1cclxuICBpZiAoY2hyb25vZ3JhcGguY2hlY2tlZCAmJiAhYXJnZW50dW0uY2hlY2tlZCAmJiAhZ29sZC5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gcHJpY2VDaHJvbm9ncmFwaFtzZWxlY3RJbnB1dC52YWx1ZV07XHJcbiAgfVxyXG4gIGlmIChhcmdlbnR1bS5jaGVja2VkICYmICFnb2xkLmNoZWNrZWQgJiYgIWNocm9ub2dyYXBoLmNoZWNrZWQpIHtcclxuICAgIHJldHVybiBwcmljZUFyZ2VudHVtW3NlbGVjdElucHV0LnZhbHVlXTtcclxuICB9XHJcbiAgaWYgKGdvbGQuY2hlY2tlZCAmJiAhY2hyb25vZ3JhcGguY2hlY2tlZCAmJiAhYXJnZW50dW0uY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIHByaWNlR29sZFtzZWxlY3RJbnB1dC52YWx1ZV07XHJcbiAgfVxyXG4gIGlmIChjaHJvbm9ncmFwaC5jaGVja2VkICYmIGFyZ2VudHVtLmNoZWNrZWQgJiYgIWdvbGQuY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIGFyZ2VudHVtQ2hyb25vZ3JhcGhQcmljZVtzZWxlY3RJbnB1dC52YWx1ZV07XHJcbiAgfVxyXG4gIGlmIChjaHJvbm9ncmFwaC5jaGVja2VkICYmIGdvbGQuY2hlY2tlZCAmJiAhYXJnZW50dW0uY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIGdvbGRDaHJvbm9ncmFwaFByaWNlW3NlbGVjdElucHV0LnZhbHVlXTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVXYXRjaExpc3QgPSAoKSA9PiB7XHJcbiAgT2JqZWN0LmtleXMod2F0Y2hOYW1lcykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0X19pdGVtJyk7XHJcbiAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgaXRlbSk7XHJcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IHdhdGNoTmFtZXNbaXRlbV07XHJcbiAgICBzZWxlY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNyZWF0ZVdhdGNoTGlzdCgpO1xyXG5cclxuY29uc3QgYWxsQ2hlY2tib3hlcyA9IHNlbGVjdENoZWNrYm94ZXMucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuXHJcbmNvbnN0IHNldERpc2FibGVkID0gKCkgPT4ge1xyXG4gIGFsbENoZWNrYm94ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzZXRFbmFibGVkID0gKCkgPT4ge1xyXG4gIGFsbENoZWNrYm94ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuc2V0RGlzYWJsZWQoKTtcclxuXHJcbnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcclxuICBpZiAoZXZ0LnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0X19saXN0JykpIHtcclxuICAgIHNlbGVjdElucHV0LnZhbHVlID0gZXZ0LnRhcmdldC5pZDtcclxuICAgIHNlbGVjdFNlbGVjdGVkLnRleHRDb250ZW50ID0gZXZ0LnRhcmdldC50ZXh0Q29udGVudDtcclxuICAgIGlmIChzZWxlY3RJbnB1dC52YWx1ZSkge1xyXG4gICAgICBzZXRFbmFibGVkKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2FuQmVQcmVjaW91c1tzZWxlY3RJbnB1dC52YWx1ZV0pIHtcclxuICAgICAgYXJnZW50dW0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgZ29sZC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXJnZW50dW0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICBnb2xkLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGV2dC50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdGVkX19sYWJlbCcpICYmIGNhbkJlUHJlY2lvdXNbc2VsZWN0SW5wdXQudmFsdWVdKSB7XHJcbiAgICBpZiAoYXJnZW50dW0uY2hlY2tlZCkge1xyXG4gICAgICBnb2xkLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChnb2xkLmNoZWNrZWQpIHtcclxuICAgICAgYXJnZW50dW0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFnb2xkLmNoZWNrZWQgJiYgIWFyZ2VudHVtLmNoZWNrZWQpIHtcclxuICAgICAgYXJnZW50dW0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgZ29sZC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xyXG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGlmIChwcmljZURlZmF1bHRbc2VsZWN0SW5wdXQudmFsdWVdKSB7XHJcbiAgICBzZWxlY3RSZXN1bHQudGV4dENvbnRlbnQgPSBjaGVja1BhcmFtZXRlcigpO1xyXG4gIH1cclxufSk7XHJcbiJdLCJmaWxlIjoic2VsZWN0LmpzIn0=
