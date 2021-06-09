// const buttonElement = document.querySelector('#button');

// buttonElement.addEventListener('click', () => console.log('Click'));

// let sum = 0;
// const startTime = new Date();

// for(let i = 0; i < 5e9; i += 1) {
//   sum += i;
// }

// const endTime = new Date();
// console.log(`Cycle took ${endTime - startTime}ms`);

const addImage = (imgSrc, callback) => {
  const imgElement = document.createElement('img');
  const containerElement = document.querySelector('.page');
  imgElement.setAttribute('alt', 'my Photo');
  imgElement.src = imgSrc;

  containerElement.append(imgElement);

  const onImgLoaded = () => {
    const {width, height} = imgElement;
    callback(null, {width, height});
  }

  imgElement.addEventListener('load', onImgLoaded);
  imgElement.addEventListener('error', () => callback('Image load is failed...'));
}

const imgSrc = ("https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg");

const onImgLoaded = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const {width, height} = data;
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
}

addImage(imgSrc, onImgLoaded);