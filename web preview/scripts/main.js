document.querySelector('h1').onclick = function() 
{
    alert('你是容器，你是空洞骑士');
}
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Hollow_Knights_1.png') {
      myImage.setAttribute('src', 'images/Hollow_Knights_2.png');
    } else {
      myImage.setAttribute('src', 'images/Hollow_Knights_1.png');
    }
}
let myButton = document.querySelector('button');
myButton.onclick = function()
{
  let myName = prompt('请输入名字：')
  myHeading.textContent = '欢迎您的到来'+  myName + '小鬼魂';
} 
let myHeading = document.querySelector('h1');