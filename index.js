//Assings cats the initial value
let cats = ['Milo', 'Otis', 'Garfield'];

//Pushes Ralph to the cats array
function destructivelyAppendCat(name) {
     cats.push(name)
}
function addACat() {destructivelyAppendCat('Ralph')
}

//Unshifts Bob to the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function prependCat() {
    destructivelyPrependCat('Bob')
}

//Removes the last cat from the cats array
function destructivelyRemoveLastCat() {
     cats.pop();
}
function noLastCat(){
    destructivelyRemoveLastCat()
}

//removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function noFirstCat(){
    destructivelyRemoveFirstCat()
    
}


//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
    return [...cats, name]
}
function addSweep() { cats = appendCat('Broom')}

 //prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
 function prependCat(name) {
    return [name, ...cats];
}

function addAnother() { cats = prependCat('Arnold')}

//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat () {
    return cats.slice(0, cats.length - 1);
  }

  //removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
  function removeFirstCat () {
    return cats.slice(1);
  }