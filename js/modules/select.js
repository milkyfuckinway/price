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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL3NlbGVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3YXRjaEJyYW5kcyB9IGZyb20gJy4vYnJhbmRzLmpzJztcclxuXHJcbmNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QnKTtcclxuY29uc3Qgc2VsZWN0QnV0dG9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2J1dHRvbicpO1xyXG5jb25zdCBzZWxlY3RSZXN1bHQgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fcmVzdWx0Jyk7XHJcbmNvbnN0IHNlbGVjdExpc3QgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fbGlzdCcpO1xyXG5jb25zdCBzZWxlY3RJbnB1dCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19pbnB1dCcpO1xyXG5jb25zdCBzZWxlY3RPcHRpb25zID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX29wdGlvbnMnKTtcclxuY29uc3QgYWxsQ2hlY2tib3hlcyA9IHNlbGVjdE9wdGlvbnMucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuY29uc3QgY2hyb25vZ3JhcGggPSBzZWxlY3QucXVlcnlTZWxlY3RvcignI2Nocm9ub2dyYXBoJyk7XHJcbmNvbnN0IGFyZ2VudHVtID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJyNzaWx2ZXInKTtcclxuY29uc3QgZ29sZCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcjZ29sZCcpO1xyXG5cclxuY29uc3QgY2hlY2tQYXJhbWV0ZXIgPSAoKSA9PiB7XHJcbiAgaWYgKCFjaHJvbm9ncmFwaC5jaGVja2VkICYmICFhcmdlbnR1bS5jaGVja2VkICYmICFnb2xkLmNoZWNrZWQpIHtcclxuICAgIGNvbnNvbGUubG9nKGNocm9ub2dyYXBoLmNoZWNrZWQpO1xyXG4gICAgcmV0dXJuIHdhdGNoQnJhbmRzW3NlbGVjdElucHV0LnZhbHVlXS5wcmljZTtcclxuICB9IGVsc2UgaWYgKGNocm9ub2dyYXBoLmNoZWNrZWQgJiYgIWFyZ2VudHVtLmNoZWNrZWQgJiYgIWdvbGQuY2hlY2tlZCkge1xyXG4gICAgY29uc29sZS5sb2coY2hyb25vZ3JhcGguY2hlY2tlZCk7XHJcbiAgICByZXR1cm4gd2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdLnByaWNlQ2hyb25vZ3JhcGg7XHJcbiAgfSBlbHNlIGlmIChhcmdlbnR1bS5jaGVja2VkICYmICFnb2xkLmNoZWNrZWQgJiYgIWNocm9ub2dyYXBoLmNoZWNrZWQpIHtcclxuICAgIHJldHVybiB3YXRjaEJyYW5kc1tzZWxlY3RJbnB1dC52YWx1ZV0ucHJpY2VTaWx2ZXI7XHJcbiAgfSBlbHNlIGlmIChnb2xkLmNoZWNrZWQgJiYgIWNocm9ub2dyYXBoLmNoZWNrZWQgJiYgIWFyZ2VudHVtLmNoZWNrZWQpIHtcclxuICAgIHJldHVybiB3YXRjaEJyYW5kc1tzZWxlY3RJbnB1dC52YWx1ZV0ucHJpY2VHb2xkO1xyXG4gIH0gZWxzZSBpZiAoY2hyb25vZ3JhcGguY2hlY2tlZCAmJiBhcmdlbnR1bS5jaGVja2VkICYmICFnb2xkLmNoZWNrZWQpIHtcclxuICAgIHJldHVybiB3YXRjaEJyYW5kc1tzZWxlY3RJbnB1dC52YWx1ZV0ucHJpY2VTaWx2ZXJDaHJvbm9ncmFwaDtcclxuICB9IGVsc2UgaWYgKGNocm9ub2dyYXBoLmNoZWNrZWQgJiYgZ29sZC5jaGVja2VkICYmICFhcmdlbnR1bS5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gd2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdLnByaWNlR29sZENocm9ub2dwYXBoO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcclxuICAgIGFsZXJ0KCdlcnJvciBpbiBjaGVja1BhcmFtZXRlciBGdW5jdGlvbicpO1xyXG4gIH1cclxufTtcclxuXHJcbihmdW5jdGlvbiBjcmVhdGVXYXRjaExpc3QoKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyh3YXRjaEJyYW5kcykubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdF9faXRlbScpO1xyXG4gICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIE9iamVjdC52YWx1ZXMod2F0Y2hCcmFuZHMpW2ldLmtleSk7XHJcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IE9iamVjdC52YWx1ZXMod2F0Y2hCcmFuZHMpW2ldLm5hbWU7XHJcbiAgICBzZWxlY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuICB9XHJcbn0pKCk7XHJcblxyXG4oZnVuY3Rpb24gaW5pdGlhbFN0YXRlKCkge1xyXG4gIHNlbGVjdElucHV0LnZhbHVlID0gJyc7XHJcbiAgYWxsQ2hlY2tib3hlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH0pO1xyXG59KSgpO1xyXG5cclxuY29uc3Qgc2V0RW5hYmxlZCA9ICgpID0+IHtcclxuICBhbGxDaGVja2JveGVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHVuY2hlY2sgPSAoKSA9PiB7XHJcbiAgYWxsQ2hlY2tib3hlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9KTtcclxufTtcclxuXHJcbnNlbGVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBzZWxlY3RMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdF9fbGlzdC0taGlkZGVuJyk7XHJcbiAgc2VsZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uU2VsZWN0TWVudU9wZW5lZCk7XHJcbn0pO1xyXG5cclxuc2VsZWN0T3B0aW9ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcclxuICBpZiAoZXZ0LnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0X19vcHRpb25zJykgJiYgd2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdKSB7XHJcbiAgICBzZWxlY3RSZXN1bHQudGV4dENvbnRlbnQgPSBjaGVja1BhcmFtZXRlcigpO1xyXG4gICAgaWYgKHdhdGNoQnJhbmRzW3NlbGVjdElucHV0LnZhbHVlXS5jYW5CZVByZWNpb3VzKSB7XHJcbiAgICAgIGlmIChhcmdlbnR1bS5jaGVja2VkKSB7XHJcbiAgICAgICAgZ29sZC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGdvbGQuY2hlY2tlZCkge1xyXG4gICAgICAgIGFyZ2VudHVtLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWdvbGQuY2hlY2tlZCAmJiAhYXJnZW50dW0uY2hlY2tlZCkge1xyXG4gICAgICAgIGFyZ2VudHVtLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgZ29sZC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG9uU2VsZWN0TWVudU9wZW5lZChldnQpIHtcclxuICBpZiAoZXZ0LnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0X19pdGVtJykpIHtcclxuICAgIHVuY2hlY2soKTtcclxuICAgIHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19pdGVtJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdF9faXRlbS0tc2VsZWN0ZWQnKTtcclxuICAgIH0pO1xyXG4gICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RfX2l0ZW0tLXNlbGVjdGVkJyk7XHJcbiAgICBzZWxlY3RJbnB1dC52YWx1ZSA9IGV2dC50YXJnZXQuaWQ7XHJcbiAgICBzZWxlY3RCdXR0b24udGV4dENvbnRlbnQgPSBldnQudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgaWYgKHNlbGVjdElucHV0LnZhbHVlKSB7XHJcbiAgICAgIHNldEVuYWJsZWQoKTtcclxuICAgIH1cclxuICAgIGlmICh3YXRjaEJyYW5kc1tzZWxlY3RJbnB1dC52YWx1ZV0uY2FuQmVQcmVjaW91cykge1xyXG4gICAgICBhcmdlbnR1bS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICBnb2xkLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcmdlbnR1bS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIGdvbGQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZWxlY3RSZXN1bHQudGV4dENvbnRlbnQgPSBjaGVja1BhcmFtZXRlcigpO1xyXG4gIHNlbGVjdExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0X19saXN0LS1oaWRkZW4nKTtcclxuICBzZWxlY3RMaXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25TZWxlY3RNZW51T3BlbmVkKTtcclxufVxyXG4iXSwiZmlsZSI6InNlbGVjdC5qcyJ9