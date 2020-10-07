var numbers=[-30, 14, 66, 21, 72, -4];
var run = [];


function myFunction(number) {
  var that = this;
    
  this.number = numbers[i];
  
  this.element = document.createElement('div');
  this.numEle = document.createElement('a');
  this.freeEle = document.createElement('a');
  
  this.numEle.innerHTML = "The number is " + this.number;
  
  if (this.number < 0) {
    this.freeEle.innerHTML += " and it's below 0";
  }
  else if (this.number > 50) {
    this.freeEle.innerHTML += " and it's greater than 50";
  }
  else if (this.number === 14) {
    this.freeEle.innerHTML += " and it's equals 14";
  }
  else {
    this.freeEle.innerHTML += "";
  }
  this.numEle.addEventListener("click", function(){
    that.increaseNumber();    
    })
  
  
  this.element.appendChild(this.numEle);
  this.element.appendChild(this.freeEle);
  document.body.appendChild(this.element);  
}
myFunction.prototype.increaseNumber = function(){
  this.number = this.number + 1;  
  this.numEle.innerHTML = "The number is " + this.number;

}
for (var i = 0; i < numbers.length; i++) {
  run.push(new myFunction(numbers[i]))
}