import { watchBrands } from './brands.js';

const select = document.querySelector('.select');
const selectOptions = select.querySelector('.select__options');
const selectSelected = select.querySelector('.select__selected');
const selectResult = select.querySelector('.select__result');
const selectList = select.querySelector('.select__list');
const selectInput = select.querySelector('.select__input');
const selectCheckboxes = select.querySelector('.select__checkboxes');
const allCheckboxes = selectCheckboxes.querySelectorAll('input[type=checkbox]');
const chronograph = select.querySelector('.select__checkbox--chronograph');
const argentum = select.querySelector('.select__checkbox--silver');
const gold = select.querySelector('.select__checkbox--gold');

const checkParameter = () => {
  if (!chronograph.checked && !argentum.checked && !gold.checked) {
    return watchBrands[selectInput.value].price;
  } else if (chronograph.checked && !argentum.checked && !gold.checked) {
    return watchBrands[selectInput.value].priceChronograph;
  } else if (argentum.checked && !gold.checked && !chronograph.checked) {
    return watchBrands[selectInput.value].priceSilver;
  } else if (gold.checked && !chronograph.checked && !argentum.checked) {
    return watchBrands[selectInput.value].priceGold;
  } else if (chronograph.checked && argentum.checked && !gold.checked) {
    return watchBrands[selectInput.value].priceSilverChronograph;
  } else if (chronograph.checked && gold.checked && !argentum.checked) {
    return watchBrands[selectInput.value].priceGoldChronogpaph;
  } else {
    // eslint-disable-next-line no-alert
    alert('error in checkParameter Function');
  }
};

(function createWatchList() {
  for (let i = 0; i < Object.keys(watchBrands).length; i++) {
    const listItem = document.createElement('li');
    listItem.classList.add('select__item');
    listItem.setAttribute('id', Object.values(watchBrands)[i].key);
    listItem.textContent = Object.values(watchBrands)[i].name;
    selectList.appendChild(listItem);
  }
})();

(function initialState() {
  selectInput.value = '';
  allCheckboxes.forEach((item) => {
    item.disabled = true;
    item.checked = false;
  });
})();

const setEnabled = () => {
  allCheckboxes.forEach((item) => {
    item.disabled = false;
  });
};

const uncheck = () => {
  allCheckboxes.forEach((item) => {
    item.checked = false;
  });
};

selectOptions.addEventListener('click', () => {
  selectList.classList.toggle('select__list--hidden');
  selectList.addEventListener('click', onSelectMenuOpened);
});

selectCheckboxes.addEventListener('click', (evt) => {
  if (evt.target.closest('.select__checkboxes') && watchBrands[selectInput.value]) {
    selectResult.textContent = checkParameter();
    if (watchBrands[selectInput.value].canBePrecious) {
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
  }
});

function onSelectMenuOpened(evt) {
  selectList.classList.add('select__list--hidden');
  if (evt.target.closest('.select__item')) {
    uncheck();
    select.querySelectorAll('.select__item').forEach((item) => {
      item.classList.remove('select__item--selected');
    });
    evt.target.classList.add('select__item--selected');
    selectList.classList.add('select__list--hidden');
    selectInput.value = evt.target.id;
    selectSelected.textContent = evt.target.textContent;
    if (selectInput.value) {
      setEnabled();
    }
    if (watchBrands[selectInput.value].canBePrecious) {
      argentum.disabled = false;
      gold.disabled = false;
    } else {
      argentum.disabled = true;
      gold.disabled = true;
    }
  }
  selectResult.textContent = checkParameter();
  selectList.classList.toggle('select__list--hidden');
  selectList.removeEventListener('click', onSelectMenuOpened);
}

//# sourceMappingURL=select.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL3NlbGVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3YXRjaEJyYW5kcyB9IGZyb20gJy4vYnJhbmRzLmpzJztcclxuXHJcbmNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QnKTtcclxuY29uc3Qgc2VsZWN0T3B0aW9ucyA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19vcHRpb25zJyk7XHJcbmNvbnN0IHNlbGVjdFNlbGVjdGVkID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX3NlbGVjdGVkJyk7XHJcbmNvbnN0IHNlbGVjdFJlc3VsdCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19yZXN1bHQnKTtcclxuY29uc3Qgc2VsZWN0TGlzdCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19saXN0Jyk7XHJcbmNvbnN0IHNlbGVjdElucHV0ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2lucHV0Jyk7XHJcbmNvbnN0IHNlbGVjdENoZWNrYm94ZXMgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fY2hlY2tib3hlcycpO1xyXG5jb25zdCBhbGxDaGVja2JveGVzID0gc2VsZWN0Q2hlY2tib3hlcy5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xyXG5jb25zdCBjaHJvbm9ncmFwaCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19jaGVja2JveC0tY2hyb25vZ3JhcGgnKTtcclxuY29uc3QgYXJnZW50dW0gPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fY2hlY2tib3gtLXNpbHZlcicpO1xyXG5jb25zdCBnb2xkID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2NoZWNrYm94LS1nb2xkJyk7XHJcblxyXG5jb25zdCBjaGVja1BhcmFtZXRlciA9ICgpID0+IHtcclxuICBpZiAoIWNocm9ub2dyYXBoLmNoZWNrZWQgJiYgIWFyZ2VudHVtLmNoZWNrZWQgJiYgIWdvbGQuY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIHdhdGNoQnJhbmRzW3NlbGVjdElucHV0LnZhbHVlXS5wcmljZTtcclxuICB9IGVsc2UgaWYgKGNocm9ub2dyYXBoLmNoZWNrZWQgJiYgIWFyZ2VudHVtLmNoZWNrZWQgJiYgIWdvbGQuY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIHdhdGNoQnJhbmRzW3NlbGVjdElucHV0LnZhbHVlXS5wcmljZUNocm9ub2dyYXBoO1xyXG4gIH0gZWxzZSBpZiAoYXJnZW50dW0uY2hlY2tlZCAmJiAhZ29sZC5jaGVja2VkICYmICFjaHJvbm9ncmFwaC5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gd2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdLnByaWNlU2lsdmVyO1xyXG4gIH0gZWxzZSBpZiAoZ29sZC5jaGVja2VkICYmICFjaHJvbm9ncmFwaC5jaGVja2VkICYmICFhcmdlbnR1bS5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gd2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdLnByaWNlR29sZDtcclxuICB9IGVsc2UgaWYgKGNocm9ub2dyYXBoLmNoZWNrZWQgJiYgYXJnZW50dW0uY2hlY2tlZCAmJiAhZ29sZC5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gd2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdLnByaWNlU2lsdmVyQ2hyb25vZ3JhcGg7XHJcbiAgfSBlbHNlIGlmIChjaHJvbm9ncmFwaC5jaGVja2VkICYmIGdvbGQuY2hlY2tlZCAmJiAhYXJnZW50dW0uY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIHdhdGNoQnJhbmRzW3NlbGVjdElucHV0LnZhbHVlXS5wcmljZUdvbGRDaHJvbm9ncGFwaDtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XHJcbiAgICBhbGVydCgnZXJyb3IgaW4gY2hlY2tQYXJhbWV0ZXIgRnVuY3Rpb24nKTtcclxuICB9XHJcbn07XHJcblxyXG4oZnVuY3Rpb24gY3JlYXRlV2F0Y2hMaXN0KCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMod2F0Y2hCcmFuZHMpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RfX2l0ZW0nKTtcclxuICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCBPYmplY3QudmFsdWVzKHdhdGNoQnJhbmRzKVtpXS5rZXkpO1xyXG4gICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBPYmplY3QudmFsdWVzKHdhdGNoQnJhbmRzKVtpXS5uYW1lO1xyXG4gICAgc2VsZWN0TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcbiAgfVxyXG59KSgpO1xyXG5cclxuKGZ1bmN0aW9uIGluaXRpYWxTdGF0ZSgpIHtcclxuICBzZWxlY3RJbnB1dC52YWx1ZSA9ICcnO1xyXG4gIGFsbENoZWNrYm94ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9KTtcclxufSkoKTtcclxuXHJcbmNvbnN0IHNldEVuYWJsZWQgPSAoKSA9PiB7XHJcbiAgYWxsQ2hlY2tib3hlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB1bmNoZWNrID0gKCkgPT4ge1xyXG4gIGFsbENoZWNrYm94ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5zZWxlY3RPcHRpb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHNlbGVjdExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0X19saXN0LS1oaWRkZW4nKTtcclxuICBzZWxlY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25TZWxlY3RNZW51T3BlbmVkKTtcclxufSk7XHJcblxyXG5zZWxlY3RDaGVja2JveGVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xyXG4gIGlmIChldnQudGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3RfX2NoZWNrYm94ZXMnKSAmJiB3YXRjaEJyYW5kc1tzZWxlY3RJbnB1dC52YWx1ZV0pIHtcclxuICAgIHNlbGVjdFJlc3VsdC50ZXh0Q29udGVudCA9IGNoZWNrUGFyYW1ldGVyKCk7XHJcbiAgICBpZiAod2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdLmNhbkJlUHJlY2lvdXMpIHtcclxuICAgICAgaWYgKGFyZ2VudHVtLmNoZWNrZWQpIHtcclxuICAgICAgICBnb2xkLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZ29sZC5jaGVja2VkKSB7XHJcbiAgICAgICAgYXJnZW50dW0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghZ29sZC5jaGVja2VkICYmICFhcmdlbnR1bS5jaGVja2VkKSB7XHJcbiAgICAgICAgYXJnZW50dW0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBnb2xkLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gb25TZWxlY3RNZW51T3BlbmVkKGV2dCkge1xyXG4gIHNlbGVjdExpc3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0X19saXN0LS1oaWRkZW4nKTtcclxuICBpZiAoZXZ0LnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0X19pdGVtJykpIHtcclxuICAgIHVuY2hlY2soKTtcclxuICAgIHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19pdGVtJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdF9faXRlbS0tc2VsZWN0ZWQnKTtcclxuICAgIH0pO1xyXG4gICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RfX2l0ZW0tLXNlbGVjdGVkJyk7XHJcbiAgICBzZWxlY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdF9fbGlzdC0taGlkZGVuJyk7XHJcbiAgICBzZWxlY3RJbnB1dC52YWx1ZSA9IGV2dC50YXJnZXQuaWQ7XHJcbiAgICBzZWxlY3RTZWxlY3RlZC50ZXh0Q29udGVudCA9IGV2dC50YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICBpZiAoc2VsZWN0SW5wdXQudmFsdWUpIHtcclxuICAgICAgc2V0RW5hYmxlZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHdhdGNoQnJhbmRzW3NlbGVjdElucHV0LnZhbHVlXS5jYW5CZVByZWNpb3VzKSB7XHJcbiAgICAgIGFyZ2VudHVtLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIGdvbGQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFyZ2VudHVtLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgZ29sZC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNlbGVjdFJlc3VsdC50ZXh0Q29udGVudCA9IGNoZWNrUGFyYW1ldGVyKCk7XHJcbiAgc2VsZWN0TGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RfX2xpc3QtLWhpZGRlbicpO1xyXG4gIHNlbGVjdExpc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblNlbGVjdE1lbnVPcGVuZWQpO1xyXG59XHJcbiJdLCJmaWxlIjoic2VsZWN0LmpzIn0=