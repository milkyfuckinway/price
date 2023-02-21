import { watchBrands } from './brands.js';

const select = document.querySelector('.select');
const selectButton = select.querySelector('.select__button');
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

selectButton.addEventListener('click', () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL3NlbGVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3YXRjaEJyYW5kcyB9IGZyb20gJy4vYnJhbmRzLmpzJztcclxuXHJcbmNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QnKTtcclxuY29uc3Qgc2VsZWN0QnV0dG9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2J1dHRvbicpO1xyXG5jb25zdCBzZWxlY3RSZXN1bHQgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fcmVzdWx0Jyk7XHJcbmNvbnN0IHNlbGVjdExpc3QgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fbGlzdCcpO1xyXG5jb25zdCBzZWxlY3RJbnB1dCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19pbnB1dCcpO1xyXG5jb25zdCBzZWxlY3RDaGVja2JveGVzID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2NoZWNrYm94ZXMnKTtcclxuY29uc3QgYWxsQ2hlY2tib3hlcyA9IHNlbGVjdENoZWNrYm94ZXMucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuY29uc3QgY2hyb25vZ3JhcGggPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fY2hlY2tib3gtLWNocm9ub2dyYXBoJyk7XHJcbmNvbnN0IGFyZ2VudHVtID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2NoZWNrYm94LS1zaWx2ZXInKTtcclxuY29uc3QgZ29sZCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19jaGVja2JveC0tZ29sZCcpO1xyXG5cclxuY29uc3QgY2hlY2tQYXJhbWV0ZXIgPSAoKSA9PiB7XHJcbiAgaWYgKCFjaHJvbm9ncmFwaC5jaGVja2VkICYmICFhcmdlbnR1bS5jaGVja2VkICYmICFnb2xkLmNoZWNrZWQpIHtcclxuICAgIHJldHVybiB3YXRjaEJyYW5kc1tzZWxlY3RJbnB1dC52YWx1ZV0ucHJpY2U7XHJcbiAgfSBlbHNlIGlmIChjaHJvbm9ncmFwaC5jaGVja2VkICYmICFhcmdlbnR1bS5jaGVja2VkICYmICFnb2xkLmNoZWNrZWQpIHtcclxuICAgIHJldHVybiB3YXRjaEJyYW5kc1tzZWxlY3RJbnB1dC52YWx1ZV0ucHJpY2VDaHJvbm9ncmFwaDtcclxuICB9IGVsc2UgaWYgKGFyZ2VudHVtLmNoZWNrZWQgJiYgIWdvbGQuY2hlY2tlZCAmJiAhY2hyb25vZ3JhcGguY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIHdhdGNoQnJhbmRzW3NlbGVjdElucHV0LnZhbHVlXS5wcmljZVNpbHZlcjtcclxuICB9IGVsc2UgaWYgKGdvbGQuY2hlY2tlZCAmJiAhY2hyb25vZ3JhcGguY2hlY2tlZCAmJiAhYXJnZW50dW0uY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIHdhdGNoQnJhbmRzW3NlbGVjdElucHV0LnZhbHVlXS5wcmljZUdvbGQ7XHJcbiAgfSBlbHNlIGlmIChjaHJvbm9ncmFwaC5jaGVja2VkICYmIGFyZ2VudHVtLmNoZWNrZWQgJiYgIWdvbGQuY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIHdhdGNoQnJhbmRzW3NlbGVjdElucHV0LnZhbHVlXS5wcmljZVNpbHZlckNocm9ub2dyYXBoO1xyXG4gIH0gZWxzZSBpZiAoY2hyb25vZ3JhcGguY2hlY2tlZCAmJiBnb2xkLmNoZWNrZWQgJiYgIWFyZ2VudHVtLmNoZWNrZWQpIHtcclxuICAgIHJldHVybiB3YXRjaEJyYW5kc1tzZWxlY3RJbnB1dC52YWx1ZV0ucHJpY2VHb2xkQ2hyb25vZ3BhcGg7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxyXG4gICAgYWxlcnQoJ2Vycm9yIGluIGNoZWNrUGFyYW1ldGVyIEZ1bmN0aW9uJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuKGZ1bmN0aW9uIGNyZWF0ZVdhdGNoTGlzdCgpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKHdhdGNoQnJhbmRzKS5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0X19pdGVtJyk7XHJcbiAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgT2JqZWN0LnZhbHVlcyh3YXRjaEJyYW5kcylbaV0ua2V5KTtcclxuICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gT2JqZWN0LnZhbHVlcyh3YXRjaEJyYW5kcylbaV0ubmFtZTtcclxuICAgIHNlbGVjdExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG4gIH1cclxufSkoKTtcclxuXHJcbihmdW5jdGlvbiBpbml0aWFsU3RhdGUoKSB7XHJcbiAgc2VsZWN0SW5wdXQudmFsdWUgPSAnJztcclxuICBhbGxDaGVja2JveGVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgfSk7XHJcbn0pKCk7XHJcblxyXG5jb25zdCBzZXRFbmFibGVkID0gKCkgPT4ge1xyXG4gIGFsbENoZWNrYm94ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdW5jaGVjayA9ICgpID0+IHtcclxuICBhbGxDaGVja2JveGVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuc2VsZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHNlbGVjdExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0X19saXN0LS1oaWRkZW4nKTtcclxuICBzZWxlY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25TZWxlY3RNZW51T3BlbmVkKTtcclxufSk7XHJcblxyXG5zZWxlY3RDaGVja2JveGVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xyXG4gIGlmIChldnQudGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3RfX2NoZWNrYm94ZXMnKSAmJiB3YXRjaEJyYW5kc1tzZWxlY3RJbnB1dC52YWx1ZV0pIHtcclxuICAgIHNlbGVjdFJlc3VsdC50ZXh0Q29udGVudCA9IGNoZWNrUGFyYW1ldGVyKCk7XHJcbiAgICBpZiAod2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdLmNhbkJlUHJlY2lvdXMpIHtcclxuICAgICAgaWYgKGFyZ2VudHVtLmNoZWNrZWQpIHtcclxuICAgICAgICBnb2xkLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZ29sZC5jaGVja2VkKSB7XHJcbiAgICAgICAgYXJnZW50dW0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghZ29sZC5jaGVja2VkICYmICFhcmdlbnR1bS5jaGVja2VkKSB7XHJcbiAgICAgICAgYXJnZW50dW0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBnb2xkLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gb25TZWxlY3RNZW51T3BlbmVkKGV2dCkge1xyXG4gIGlmIChldnQudGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3RfX2l0ZW0nKSkge1xyXG4gICAgdW5jaGVjaygpO1xyXG4gICAgc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX2l0ZW0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0X19pdGVtLS1zZWxlY3RlZCcpO1xyXG4gICAgfSk7XHJcbiAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdF9faXRlbS0tc2VsZWN0ZWQnKTtcclxuICAgIHNlbGVjdElucHV0LnZhbHVlID0gZXZ0LnRhcmdldC5pZDtcclxuICAgIHNlbGVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IGV2dC50YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICBpZiAoc2VsZWN0SW5wdXQudmFsdWUpIHtcclxuICAgICAgc2V0RW5hYmxlZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHdhdGNoQnJhbmRzW3NlbGVjdElucHV0LnZhbHVlXS5jYW5CZVByZWNpb3VzKSB7XHJcbiAgICAgIGFyZ2VudHVtLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIGdvbGQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFyZ2VudHVtLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgZ29sZC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNlbGVjdFJlc3VsdC50ZXh0Q29udGVudCA9IGNoZWNrUGFyYW1ldGVyKCk7XHJcbiAgc2VsZWN0TGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RfX2xpc3QtLWhpZGRlbicpO1xyXG4gIHNlbGVjdExpc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblNlbGVjdE1lbnVPcGVuZWQpO1xyXG59XHJcbiJdLCJmaWxlIjoic2VsZWN0LmpzIn0=
