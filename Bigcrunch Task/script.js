function menuButtonClicked() {
  document.querySelector('.right-side-menu').style.display = 'inline-block';
  document.querySelector('html').style.filter = 'grayscale(50%)';
}
function closeButtonClicked() {
  document.querySelector('.right-side-menu').style.display = 'none';
  document.querySelector('html').style.filter = 'grayscale(0%)';
}
function pageOneClicked() {
  document.querySelector('.page-one').style.borderBottom = '10px solid #ffffff';
  document.querySelector('.page-two').style.borderBottom = '10px solid #808080';
  document.querySelector('.page-three').style.borderBottom =
    '10px solid #808080';
  document.querySelector('.page-four').style.borderBottom =
    '10px solid #808080';
  document.body.style.backgroundImage = "url('cennet-koyu.png')";
  document.querySelector('.years').innerHTML = '2018';
  document.querySelector('.design').innerHTML = 'Exterior Design';
  document.querySelector('.title-1').innerHTML = 'Cennet Koyu';
  document.querySelector('.title-2').innerHTML = 'Modern House';
}
function pageTwoClicked() {
  document.querySelector('.page-one').style.borderBottom = '10px solid #808080';
  document.querySelector('.page-two').style.borderBottom = '10px solid #ffffff';
  document.querySelector('.page-three').style.borderBottom =
    '10px solid #808080';
  document.querySelector('.page-four').style.borderBottom =
    '10px solid #808080';
  document.body.style.backgroundImage = "url('SwissOtel.png')";
  document.querySelector('.years').innerHTML = '2015';
  document.querySelector('.design').innerHTML = 'Interior Design';
  document.querySelector('.title-1').innerHTML = 'SwissOtel';
  document.querySelector('.title-2').innerHTML = 'Bodrum Beach Room';
}
function pageThreeClicked() {
  document.querySelector('.page-one').style.borderBottom = '10px solid #808080';
  document.querySelector('.page-two').style.borderBottom = '10px solid #808080';
  document.querySelector('.page-three').style.borderBottom =
    '10px solid #ffffff';
  document.querySelector('.page-four').style.borderBottom =
    '10px solid #808080';
  document.body.style.backgroundImage = "url('Oxa.png')";
  document.querySelector('.years').innerHTML = '2017';
  document.querySelector('.design').innerHTML = 'Interior & Exterior Design';
  document.querySelector('.title-1').innerHTML = 'OXA';
  document.querySelector('.title-2').innerHTML = 'Gündoğan Houses';
}
function pageFourClicked() {
  document.querySelector('.page-one').style.borderBottom = '10px solid #808080';
  document.querySelector('.page-two').style.borderBottom = '10px solid #808080';
  document.querySelector('.page-three').style.borderBottom =
    '10px solid #808080';
  document.querySelector('.page-four').style.borderBottom =
    '10px solid #ffffff';
  document.body.style.backgroundImage = "url('Stone-House.png')";
  document.querySelector('.years').innerHTML = '2018';
  document.querySelector('.design').innerHTML = 'Exterior Design';
  document.querySelector('.title-1').innerHTML = 'SwissOtel';
  document.querySelector('.title-2').innerHTML = 'Stone House';
}
