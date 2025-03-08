const close = document.querySelector('.wrapper');
function onclickCloseButton(){
  close.classList.add('is-closed');
  console.log(close);
}
function loginButton(){
  close.classList.remove('is-closed');
}
