import { watchBrands } from './brands.js';

const select = document.querySelector('.select');
const selectSelected = select.querySelector('.select__selected');
const selectResult = select.querySelector('.select__result');
const selectList = select.querySelector('.select__list');
const selectInput = select.querySelector('.select__input');
const selectCheckboxes = select.querySelector('.select__checkboxes');

const chronograph = select.querySelector('.select__chronograph');
const argentum = select.querySelector('.select__silver');
const gold = select.querySelector('.select__gold');

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

const createWatchList = () => {
  for (let i = 0; i < Object.keys(watchBrands).length; i++) {
    const listItem = document.createElement('li');
    listItem.classList.add('select__item');
    listItem.setAttribute('id', Object.values(watchBrands)[i].key);
    listItem.textContent = Object.values(watchBrands)[i].name;
    selectList.appendChild(listItem);
  }
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
  console.log(evt.target);
  if (evt.target.closest('.select__options')) {
    selectList.classList.remove('select__list--hidden');
  }
  if (evt.target.closest('.select__item')) {
    selectList.classList.add('select__list--hidden');
    uncheck();
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
  if (evt.target.closest('.select__checkboxes') && watchBrands[selectInput.value]) {
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
  if (selectInput.value) {
    selectResult.textContent = checkParameter();
  }
});

//# sourceMappingURL=select.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL3NlbGVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3YXRjaEJyYW5kcyB9IGZyb20gJy4vYnJhbmRzLmpzJztcclxuXHJcbmNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QnKTtcclxuY29uc3Qgc2VsZWN0U2VsZWN0ZWQgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fc2VsZWN0ZWQnKTtcclxuY29uc3Qgc2VsZWN0UmVzdWx0ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX3Jlc3VsdCcpO1xyXG5jb25zdCBzZWxlY3RMaXN0ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2xpc3QnKTtcclxuY29uc3Qgc2VsZWN0SW5wdXQgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faW5wdXQnKTtcclxuY29uc3Qgc2VsZWN0Q2hlY2tib3hlcyA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19jaGVja2JveGVzJyk7XHJcblxyXG5jb25zdCBjaHJvbm9ncmFwaCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19jaHJvbm9ncmFwaCcpO1xyXG5jb25zdCBhcmdlbnR1bSA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19zaWx2ZXInKTtcclxuY29uc3QgZ29sZCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19nb2xkJyk7XHJcblxyXG5jb25zdCBjaGVja1BhcmFtZXRlciA9ICgpID0+IHtcclxuICBpZiAoIWNocm9ub2dyYXBoLmNoZWNrZWQgJiYgIWFyZ2VudHVtLmNoZWNrZWQgJiYgIWdvbGQuY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIHdhdGNoQnJhbmRzW3NlbGVjdElucHV0LnZhbHVlXS5wcmljZTtcclxuICB9IGVsc2UgaWYgKGNocm9ub2dyYXBoLmNoZWNrZWQgJiYgIWFyZ2VudHVtLmNoZWNrZWQgJiYgIWdvbGQuY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIHdhdGNoQnJhbmRzW3NlbGVjdElucHV0LnZhbHVlXS5wcmljZUNocm9ub2dyYXBoO1xyXG4gIH0gZWxzZSBpZiAoYXJnZW50dW0uY2hlY2tlZCAmJiAhZ29sZC5jaGVja2VkICYmICFjaHJvbm9ncmFwaC5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gd2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdLnByaWNlU2lsdmVyO1xyXG4gIH0gZWxzZSBpZiAoZ29sZC5jaGVja2VkICYmICFjaHJvbm9ncmFwaC5jaGVja2VkICYmICFhcmdlbnR1bS5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gd2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdLnByaWNlR29sZDtcclxuICB9IGVsc2UgaWYgKGNocm9ub2dyYXBoLmNoZWNrZWQgJiYgYXJnZW50dW0uY2hlY2tlZCAmJiAhZ29sZC5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gd2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdLnByaWNlU2lsdmVyQ2hyb25vZ3JhcGg7XHJcbiAgfSBlbHNlIGlmIChjaHJvbm9ncmFwaC5jaGVja2VkICYmIGdvbGQuY2hlY2tlZCAmJiAhYXJnZW50dW0uY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuIHdhdGNoQnJhbmRzW3NlbGVjdElucHV0LnZhbHVlXS5wcmljZUdvbGRDaHJvbm9ncGFwaDtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XHJcbiAgICBhbGVydCgnZXJyb3IgaW4gY2hlY2tQYXJhbWV0ZXIgRnVuY3Rpb24nKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVXYXRjaExpc3QgPSAoKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyh3YXRjaEJyYW5kcykubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdF9faXRlbScpO1xyXG4gICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIE9iamVjdC52YWx1ZXMod2F0Y2hCcmFuZHMpW2ldLmtleSk7XHJcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IE9iamVjdC52YWx1ZXMod2F0Y2hCcmFuZHMpW2ldLm5hbWU7XHJcbiAgICBzZWxlY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuICB9XHJcbn07XHJcblxyXG5jcmVhdGVXYXRjaExpc3QoKTtcclxuXHJcbmNvbnN0IGFsbENoZWNrYm94ZXMgPSBzZWxlY3RDaGVja2JveGVzLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSAoKSA9PiB7XHJcbiAgc2VsZWN0SW5wdXQudmFsdWUgPSAnJztcclxuICBhbGxDaGVja2JveGVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzZXRFbmFibGVkID0gKCkgPT4ge1xyXG4gIGFsbENoZWNrYm94ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuaW5pdGlhbFN0YXRlKCk7XHJcblxyXG5jb25zdCB1bmNoZWNrID0gKCkgPT4ge1xyXG4gIGFsbENoZWNrYm94ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XHJcbiAgY29uc29sZS5sb2coZXZ0LnRhcmdldCk7XHJcbiAgaWYgKGV2dC50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdF9fb3B0aW9ucycpKSB7XHJcbiAgICBzZWxlY3RMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdF9fbGlzdC0taGlkZGVuJyk7XHJcbiAgfVxyXG4gIGlmIChldnQudGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3RfX2l0ZW0nKSkge1xyXG4gICAgc2VsZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RfX2xpc3QtLWhpZGRlbicpO1xyXG4gICAgdW5jaGVjaygpO1xyXG4gICAgc2VsZWN0SW5wdXQudmFsdWUgPSBldnQudGFyZ2V0LmlkO1xyXG4gICAgc2VsZWN0U2VsZWN0ZWQudGV4dENvbnRlbnQgPSBldnQudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgaWYgKHNlbGVjdElucHV0LnZhbHVlKSB7XHJcbiAgICAgIHNldEVuYWJsZWQoKTtcclxuICAgIH1cclxuICAgIGlmICh3YXRjaEJyYW5kc1tzZWxlY3RJbnB1dC52YWx1ZV0uY2FuQmVQcmVjaW91cykge1xyXG4gICAgICBhcmdlbnR1bS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICBnb2xkLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcmdlbnR1bS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIGdvbGQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoZXZ0LnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0X19jaGVja2JveGVzJykgJiYgd2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdKSB7XHJcbiAgICBpZiAod2F0Y2hCcmFuZHNbc2VsZWN0SW5wdXQudmFsdWVdLmNhbkJlUHJlY2lvdXMpIHtcclxuICAgICAgaWYgKGFyZ2VudHVtLmNoZWNrZWQpIHtcclxuICAgICAgICBnb2xkLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZ29sZC5jaGVja2VkKSB7XHJcbiAgICAgICAgYXJnZW50dW0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghZ29sZC5jaGVja2VkICYmICFhcmdlbnR1bS5jaGVja2VkKSB7XHJcbiAgICAgICAgYXJnZW50dW0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBnb2xkLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHNlbGVjdElucHV0LnZhbHVlKSB7XHJcbiAgICBzZWxlY3RSZXN1bHQudGV4dENvbnRlbnQgPSBjaGVja1BhcmFtZXRlcigpO1xyXG4gIH1cclxufSk7XHJcbiJdLCJmaWxlIjoic2VsZWN0LmpzIn0=
