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
