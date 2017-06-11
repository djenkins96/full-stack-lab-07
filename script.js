var diceArray = [];
var Die = function () {
    this.value = Math.floor(Math.random() * 6 + 1);
    this.div = document.createElement('div');
    this.div.classList.add("dice-container");
    document.body.appendChild(this.div);
    this.div.innerText = this.value;
    this.div.addEventListener('click', function () {
        this.roll();
    }.bind(this));
    this.div.addEventListener('dblclick', this.removeDie.bind(this));
};

Die.prototype.roll = function () {
    this.value = Math.floor(Math.random() * 6 + 1);
    this.div.innerText = this.value;
};

Die.prototype.removeDie = function (){
    this.div.remove();
    
    var index = diceArray.indexOf(this);
    diceArray.splice(index, 1);
}



document.getElementById("generate-die").addEventListener("click", function () {
    var dice = new Die();
    diceArray.push(dice);
});


document.getElementById("roll-die").addEventListener("click", function () {

    for (var i = 0; i < diceArray.length; i++) {
        diceArray[i].roll();
    }
})



document.getElementById('sum-button').addEventListener('click', function () {
    var sum = 0;
    for (var i = 0; i < diceArray.length; i++) {
        sum = sum + diceArray[i].value;
    }
alert('the sum of the dice is ' + sum);
})

