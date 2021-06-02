const generateNumbersRange = (from, to) => {
  const result = [];

  for (let index = from; index <= to; index += 1) {
    result.push(index);
  }
  return result;
}

const getLineSeats = () => generateNumbersRange(1, 10)
  .map(sectorSeat => `
    <div class="sector__seat" data-seat-number="${sectorSeat}">
    </div>`).join('');

const getSectorLines = () => {
  const seatStrings = getLineSeats();
  return generateNumbersRange(1, 10)
  .map(sectorLine => `
    <div class="sector__line" data-line-number="${sectorLine}">
    ${seatStrings}
    </div>`).join('')
};

const arenaEl = document.querySelector('.arena');

const renderArena = () => {
  const lineStrings = getSectorLines();
  const sectorElement = generateNumbersRange(1, 3)
  .map(sectorNumber => `
    <div class="sector" data-sector-number="${sectorNumber}">
    ${lineStrings}
    </div>`).join('');
  arenaEl.innerHTML = sectorElement;
}

renderArena();

const onSeatSelect = (event) => {
  const isSeat = event.target.classList.contains('sector__seat');

  if(!isSeat) {
    return;
  }

  const seatNum = event.target.dataset.seatNumber;
  const lineNum = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNum = event.target.closest('.sector').dataset.sectorNumber;

  const selectedSeatElem = document.querySelector('.board__selected-seat');
  selectedSeatElem.textContent = `S ${sectorNum} - L  ${lineNum} - S ${seatNum}`;
}

arenaEl.addEventListener('click', onSeatSelect);