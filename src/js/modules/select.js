const select = document.querySelector('.select');
const selectSelected = select.querySelector('.select__selected');
const selectResult = select.querySelector('.select__result');
const selectList = select.querySelector('.select__list');
const selectInput = select.querySelector('.select__input');

const watchNames = {
  casio: 'Casio',
  tissot: 'Tissot',
  edox: 'Edox',
  nika: 'Ника',
};

const watchPrice = {
  casio: 'от 500 до 700',
  tissot: 'от 700 до 1200',
  edox: 'от 900 до 1200',
  nika: 'от 700 до 1200',
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

selectList.addEventListener('click', (evt) => {
  selectInput.value = evt.target.id;
  selectSelected.textContent = evt.target.textContent;
});

select.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (watchPrice[selectInput.value]) {
    selectResult.textContent = watchPrice[selectInput.value];
  }
});
