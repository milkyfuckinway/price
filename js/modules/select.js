import { watchBrands } from './brands.js';

const select = document.querySelector('.select');
const selectButton = select.querySelector('.select__button');
const selectResult = select.querySelector('.select__result');
const selectList = select.querySelector('.select__list');
const selectInput = select.querySelector('.select__input');
const selectOptions = select.querySelector('.select__options');
const allCheckboxes = selectOptions.querySelectorAll('input[type=checkbox]');
const chronograph = select.querySelector('#chronograph');
const argentum = select.querySelector('#silver');
const gold = select.querySelector('#gold');

const root = document.querySelector(':root');
const main = document.querySelector('.main');

function setListHeight() {
  root.style.setProperty('--listheight', `${main.offsetHeight - 160}px`);
}
setListHeight();

window.addEventListener('resize', () => {
  setListHeight();
});

const checkParameter = () => {
  if (!chronograph.checked && !argentum.checked && !gold.checked) {
    console.log(chronograph.checked);
    return watchBrands[selectInput.value].price;
  } else if (chronograph.checked && !argentum.checked && !gold.checked) {
    console.log(chronograph.checked);
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

selectButton.addEventListener('click', () => {
  selectList.classList.toggle('select__list--hidden');
  selectList.addEventListener('click', onSelectMenuOpened);
});

selectOptions.addEventListener('click', (evt) => {
  if (evt.target.closest('.select__options') && watchBrands[selectInput.value]) {
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
  if (evt.target.closest('.select__item')) {
    uncheck();
    select.querySelectorAll('.select__item').forEach((item) => {
      item.classList.remove('select__item--selected');
    });
    evt.target.classList.add('select__item--selected');
    selectInput.value = evt.target.id;
    selectButton.textContent = evt.target.textContent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL3NlbGVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3YXRjaEJyYW5kcyB9IGZyb20gJy4vYnJhbmRzLmpzJztcclxuXHJcbmNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QnKTtcclxuY29uc3Qgc2VsZWN0QnV0dG9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2J1dHRvbicpO1xyXG5jb25zdCBzZWxlY3RSZXN1bHQgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fcmVzdWx0Jyk7XHJcbmNvbnN0IHNlbGVjdExpc3QgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fbGlzdCcpO1xyXG5jb25zdCBzZWxlY3RJbnB1dCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19pbnB1dCcpO1xyXG5jb25zdCBzZWxlY3RPcHRpb25zID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX29wdGlvbnMnKTtcclxuY29uc3QgYWxsQ2hlY2tib3hlcyA9IHNlbGVjdE9wdGlvbnMucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuY29uc3QgY2hyb25vZ3JhcGggPSBzZWxlY3QucXVlcnlTZWxlY3RvcignI2Nocm9ub2dyYXBoJyk7XHJcbmNvbnN0IGFyZ2VudHVtID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJyNzaWx2ZXInKTtcclxuY29uc3QgZ29sZCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcjZ29sZCcpO1xyXG5cclxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG5cclxuZnVuY3Rpb24gc2V0TGlzdEhlaWdodCgpIHtcclxuICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLWxpc3RoZWlnaHQnLCBgJHttYWluLm9mZnNldEhlaWdodCAtIDE2MH1weGApO1xyXG59XHJcbnNldExpc3RIZWlnaHQoKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgc2V0TGlzdEhlaWdodCgpO1xyXG59KTtcclxuXHJcbmNvbnN0IGNoZWNrUGFyYW1ldGVyID0gKCkgPT4ge1xyXG4gIGlmICghY2hyb25vZ3JhcGguY2hlY2tlZCAmJiAhYXJnZW50dW0uY2hlY2tlZCAmJiAhZ29sZC5jaGVja2VkKSB7XHJcbiAgICBjb25zb2xlLmxvZyhjaHJvbm9ncmFwaC5jaGVja2VkKTtcclxuICAgIHJldHVybiB3YXRjaEJyYW5kc1tzZWxlY3RJbnB1dC52YWx1ZV0ucHJpY2U7XHJcbiAgfSBlbHNlIGlmIChjaHJvbm9ncmFwaC5jaGVja2VkICYmICFhcmdlbnR1bS5jaGVja2VkICYmICFnb2xkLmNoZWNrZWQpIHtcclxuICAgIGNvbnNvbGUubG9nKGNocm9ub2dyYXBoLmNoZWNrZWQpO1xyXG4gICAgcmV0dXJuIHdhdGNoQnJhbmRzW3NlbGVjdElucHV0LnZhbHVlXS5wcmljZUNocm9ub2dyYXBoO1xyXG4gIH0gZWxzZSBpZiAoYXJnZW50dW0uY2hlY2tlZCAmJiAhZ29sZC5jaGVja2VkICYmICFjaHJvbm9ncmFwaC5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gd2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdLnByaWNlU2lsdmVyO1xyXG4gIH0gZWxzZSBpZiAoZ29sZC5jaGVja2VkICYmICFjaHJvbm9ncmFwaC5jaGVja2VkICYmICFhcmdlbnR1bS5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gd2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdLnByaWNlR29sZDtcclxuICB9IGVsc2UgaWYgKGNocm9ub2dyYXBoLmNoZWNrZWQgJiYgYXJnZW50dW0uY2hlY2tlZCAmJiAhZ29sZC5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gd2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdLnByaWNlU2lsdmVyQ2hyb25vZ3JhcGg7XHJcbiAgfSBlbHNlIGlmIChjaHJvbm9ncmFwaC5jaGVja2VkICYmIGdvbGQuY2hlY2tlZCAmJiAhYXJnZW50dW0uY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIHdhdGNoQnJhbmRzW3NlbGVjdElucHV0LnZhbHVlXS5wcmljZUdvbGRDaHJvbm9ncGFwaDtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XHJcbiAgICBhbGVydCgnZXJyb3IgaW4gY2hlY2tQYXJhbWV0ZXIgRnVuY3Rpb24nKTtcclxuICB9XHJcbn07XHJcblxyXG4oZnVuY3Rpb24gY3JlYXRlV2F0Y2hMaXN0KCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMod2F0Y2hCcmFuZHMpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RfX2l0ZW0nKTtcclxuICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCBPYmplY3QudmFsdWVzKHdhdGNoQnJhbmRzKVtpXS5rZXkpO1xyXG4gICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBPYmplY3QudmFsdWVzKHdhdGNoQnJhbmRzKVtpXS5uYW1lO1xyXG4gICAgc2VsZWN0TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcbiAgfVxyXG59KSgpO1xyXG5cclxuKGZ1bmN0aW9uIGluaXRpYWxTdGF0ZSgpIHtcclxuICBzZWxlY3RJbnB1dC52YWx1ZSA9ICcnO1xyXG4gIGFsbENoZWNrYm94ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9KTtcclxufSkoKTtcclxuXHJcbmNvbnN0IHNldEVuYWJsZWQgPSAoKSA9PiB7XHJcbiAgYWxsQ2hlY2tib3hlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB1bmNoZWNrID0gKCkgPT4ge1xyXG4gIGFsbENoZWNrYm94ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5zZWxlY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgc2VsZWN0TGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RfX2xpc3QtLWhpZGRlbicpO1xyXG4gIHNlbGVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblNlbGVjdE1lbnVPcGVuZWQpO1xyXG59KTtcclxuXHJcbnNlbGVjdE9wdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XHJcbiAgaWYgKGV2dC50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdF9fb3B0aW9ucycpICYmIHdhdGNoQnJhbmRzW3NlbGVjdElucHV0LnZhbHVlXSkge1xyXG4gICAgc2VsZWN0UmVzdWx0LnRleHRDb250ZW50ID0gY2hlY2tQYXJhbWV0ZXIoKTtcclxuICAgIGlmICh3YXRjaEJyYW5kc1tzZWxlY3RJbnB1dC52YWx1ZV0uY2FuQmVQcmVjaW91cykge1xyXG4gICAgICBpZiAoYXJnZW50dW0uY2hlY2tlZCkge1xyXG4gICAgICAgIGdvbGQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChnb2xkLmNoZWNrZWQpIHtcclxuICAgICAgICBhcmdlbnR1bS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFnb2xkLmNoZWNrZWQgJiYgIWFyZ2VudHVtLmNoZWNrZWQpIHtcclxuICAgICAgICBhcmdlbnR1bS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGdvbGQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBvblNlbGVjdE1lbnVPcGVuZWQoZXZ0KSB7XHJcbiAgaWYgKGV2dC50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdF9faXRlbScpKSB7XHJcbiAgICB1bmNoZWNrKCk7XHJcbiAgICBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9faXRlbScpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RfX2l0ZW0tLXNlbGVjdGVkJyk7XHJcbiAgICB9KTtcclxuICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0X19pdGVtLS1zZWxlY3RlZCcpO1xyXG4gICAgc2VsZWN0SW5wdXQudmFsdWUgPSBldnQudGFyZ2V0LmlkO1xyXG4gICAgc2VsZWN0QnV0dG9uLnRleHRDb250ZW50ID0gZXZ0LnRhcmdldC50ZXh0Q29udGVudDtcclxuICAgIGlmIChzZWxlY3RJbnB1dC52YWx1ZSkge1xyXG4gICAgICBzZXRFbmFibGVkKCk7XHJcbiAgICB9XHJcbiAgICBpZiAod2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdLmNhbkJlUHJlY2lvdXMpIHtcclxuICAgICAgYXJnZW50dW0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgZ29sZC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXJnZW50dW0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICBnb2xkLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgc2VsZWN0UmVzdWx0LnRleHRDb250ZW50ID0gY2hlY2tQYXJhbWV0ZXIoKTtcclxuICBzZWxlY3RMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdF9fbGlzdC0taGlkZGVuJyk7XHJcbiAgc2VsZWN0TGlzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uU2VsZWN0TWVudU9wZW5lZCk7XHJcbn1cclxuIl0sImZpbGUiOiJzZWxlY3QuanMifQ==
