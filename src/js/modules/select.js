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
