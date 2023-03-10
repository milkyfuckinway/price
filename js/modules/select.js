import {watchBrands} from './brands.js';

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
  root.style.setProperty('--listheight', `${main.offsetHeight - 180}px`);
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
  Object.entries(watchBrands).forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add('select__item');
    listItem.setAttribute('id', item[0]);
    listItem.textContent = item[1].name;
    selectList.appendChild(listItem);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL3NlbGVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3dhdGNoQnJhbmRzfSBmcm9tICcuL2JyYW5kcy5qcyc7XHJcblxyXG5jb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0Jyk7XHJcbmNvbnN0IHNlbGVjdEJ1dHRvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19idXR0b24nKTtcclxuY29uc3Qgc2VsZWN0UmVzdWx0ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX3Jlc3VsdCcpO1xyXG5jb25zdCBzZWxlY3RMaXN0ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2xpc3QnKTtcclxuY29uc3Qgc2VsZWN0SW5wdXQgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faW5wdXQnKTtcclxuY29uc3Qgc2VsZWN0T3B0aW9ucyA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19vcHRpb25zJyk7XHJcbmNvbnN0IGFsbENoZWNrYm94ZXMgPSBzZWxlY3RPcHRpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcbmNvbnN0IGNocm9ub2dyYXBoID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJyNjaHJvbm9ncmFwaCcpO1xyXG5jb25zdCBhcmdlbnR1bSA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcjc2lsdmVyJyk7XHJcbmNvbnN0IGdvbGQgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignI2dvbGQnKTtcclxuXHJcbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuXHJcbmZ1bmN0aW9uIHNldExpc3RIZWlnaHQoKSB7XHJcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1saXN0aGVpZ2h0JywgYCR7bWFpbi5vZmZzZXRIZWlnaHQgLSAxODB9cHhgKTtcclxufVxyXG5cclxuc2V0TGlzdEhlaWdodCgpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICBzZXRMaXN0SGVpZ2h0KCk7XHJcbn0pO1xyXG5cclxuY29uc3QgY2hlY2tQYXJhbWV0ZXIgPSAoKSA9PiB7XHJcbiAgaWYgKCFjaHJvbm9ncmFwaC5jaGVja2VkICYmICFhcmdlbnR1bS5jaGVja2VkICYmICFnb2xkLmNoZWNrZWQpIHtcclxuICAgIGNvbnNvbGUubG9nKGNocm9ub2dyYXBoLmNoZWNrZWQpO1xyXG4gICAgcmV0dXJuIHdhdGNoQnJhbmRzW3NlbGVjdElucHV0LnZhbHVlXS5wcmljZTtcclxuICB9IGVsc2UgaWYgKGNocm9ub2dyYXBoLmNoZWNrZWQgJiYgIWFyZ2VudHVtLmNoZWNrZWQgJiYgIWdvbGQuY2hlY2tlZCkge1xyXG4gICAgY29uc29sZS5sb2coY2hyb25vZ3JhcGguY2hlY2tlZCk7XHJcbiAgICByZXR1cm4gd2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdLnByaWNlQ2hyb25vZ3JhcGg7XHJcbiAgfSBlbHNlIGlmIChhcmdlbnR1bS5jaGVja2VkICYmICFnb2xkLmNoZWNrZWQgJiYgIWNocm9ub2dyYXBoLmNoZWNrZWQpIHtcclxuICAgIHJldHVybiB3YXRjaEJyYW5kc1tzZWxlY3RJbnB1dC52YWx1ZV0ucHJpY2VTaWx2ZXI7XHJcbiAgfSBlbHNlIGlmIChnb2xkLmNoZWNrZWQgJiYgIWNocm9ub2dyYXBoLmNoZWNrZWQgJiYgIWFyZ2VudHVtLmNoZWNrZWQpIHtcclxuICAgIHJldHVybiB3YXRjaEJyYW5kc1tzZWxlY3RJbnB1dC52YWx1ZV0ucHJpY2VHb2xkO1xyXG4gIH0gZWxzZSBpZiAoY2hyb25vZ3JhcGguY2hlY2tlZCAmJiBhcmdlbnR1bS5jaGVja2VkICYmICFnb2xkLmNoZWNrZWQpIHtcclxuICAgIHJldHVybiB3YXRjaEJyYW5kc1tzZWxlY3RJbnB1dC52YWx1ZV0ucHJpY2VTaWx2ZXJDaHJvbm9ncmFwaDtcclxuICB9IGVsc2UgaWYgKGNocm9ub2dyYXBoLmNoZWNrZWQgJiYgZ29sZC5jaGVja2VkICYmICFhcmdlbnR1bS5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gd2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdLnByaWNlR29sZENocm9ub2dwYXBoO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcclxuICAgIGFsZXJ0KCdlcnJvciBpbiBjaGVja1BhcmFtZXRlciBGdW5jdGlvbicpO1xyXG4gIH1cclxufTtcclxuXHJcbihmdW5jdGlvbiBjcmVhdGVXYXRjaExpc3QoKSB7XHJcbiAgT2JqZWN0LmVudHJpZXMod2F0Y2hCcmFuZHMpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdF9faXRlbScpO1xyXG4gICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIGl0ZW1bMF0pO1xyXG4gICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBpdGVtWzFdLm5hbWU7XHJcbiAgICBzZWxlY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuICB9KTtcclxufSkoKTtcclxuXHJcbihmdW5jdGlvbiBpbml0aWFsU3RhdGUoKSB7XHJcbiAgc2VsZWN0SW5wdXQudmFsdWUgPSAnJztcclxuICBhbGxDaGVja2JveGVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgfSk7XHJcbn0pKCk7XHJcblxyXG5jb25zdCBzZXRFbmFibGVkID0gKCkgPT4ge1xyXG4gIGFsbENoZWNrYm94ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdW5jaGVjayA9ICgpID0+IHtcclxuICBhbGxDaGVja2JveGVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuc2VsZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHNlbGVjdExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0X19saXN0LS1oaWRkZW4nKTtcclxuICBzZWxlY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25TZWxlY3RNZW51T3BlbmVkKTtcclxufSk7XHJcblxyXG5zZWxlY3RPcHRpb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xyXG4gIGlmIChldnQudGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3RfX29wdGlvbnMnKSAmJiB3YXRjaEJyYW5kc1tzZWxlY3RJbnB1dC52YWx1ZV0pIHtcclxuICAgIHNlbGVjdFJlc3VsdC50ZXh0Q29udGVudCA9IGNoZWNrUGFyYW1ldGVyKCk7XHJcbiAgICBpZiAod2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdLmNhbkJlUHJlY2lvdXMpIHtcclxuICAgICAgaWYgKGFyZ2VudHVtLmNoZWNrZWQpIHtcclxuICAgICAgICBnb2xkLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZ29sZC5jaGVja2VkKSB7XHJcbiAgICAgICAgYXJnZW50dW0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghZ29sZC5jaGVja2VkICYmICFhcmdlbnR1bS5jaGVja2VkKSB7XHJcbiAgICAgICAgYXJnZW50dW0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBnb2xkLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gb25TZWxlY3RNZW51T3BlbmVkKGV2dCkge1xyXG4gIGlmIChldnQudGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3RfX2l0ZW0nKSkge1xyXG4gICAgdW5jaGVjaygpO1xyXG4gICAgc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX2l0ZW0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0X19pdGVtLS1zZWxlY3RlZCcpO1xyXG4gICAgfSk7XHJcbiAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdF9faXRlbS0tc2VsZWN0ZWQnKTtcclxuICAgIHNlbGVjdElucHV0LnZhbHVlID0gZXZ0LnRhcmdldC5pZDtcclxuICAgIHNlbGVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IGV2dC50YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICBpZiAoc2VsZWN0SW5wdXQudmFsdWUpIHtcclxuICAgICAgc2V0RW5hYmxlZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHdhdGNoQnJhbmRzW3NlbGVjdElucHV0LnZhbHVlXS5jYW5CZVByZWNpb3VzKSB7XHJcbiAgICAgIGFyZ2VudHVtLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIGdvbGQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFyZ2VudHVtLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgZ29sZC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNlbGVjdFJlc3VsdC50ZXh0Q29udGVudCA9IGNoZWNrUGFyYW1ldGVyKCk7XHJcbiAgc2VsZWN0TGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RfX2xpc3QtLWhpZGRlbicpO1xyXG4gIHNlbGVjdExpc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblNlbGVjdE1lbnVPcGVuZWQpO1xyXG59XHJcbiJdLCJmaWxlIjoic2VsZWN0LmpzIn0=
