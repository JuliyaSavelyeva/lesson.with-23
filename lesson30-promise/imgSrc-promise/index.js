export const addImage = (imgSrc) => {
  const p = new Promise((resolve, reject) => {
    const imgElement = document.createElement('img');
    const containerElement = document.querySelector('.page');
    imgElement.setAttribute('alt', 'my Photo');
    imgElement.src = imgSrc;

    containerElement.append(imgElement);

    const onImgLoaded = () => {
      const {width, height} = imgElement;
      resolve({width, height});
    }

    imgElement.addEventListener('load', onImgLoaded);
    imgElement.addEventListener('error', () => reject(new Error('Image load is failed...')));
  })

  return p;
}

const imgSrc = ("https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg");

const resultPromise = addImage(imgSrc);
console.log(resultPromise);

resultPromise.then(data => {
  const {width, height} = data;
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
});

resultPromise.catch(error => console.log(error));

// const onImgLoaded = (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   const {width, height} = data;
//   const sizeElem = document.querySelector('.image-size');
//   sizeElem.textContent = `${width} x ${height}`;
// }