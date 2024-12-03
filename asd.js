function incrementCounter() {
   const counterElem = document.querySelector('#counter'),
         count = +counterElem.innerHTML;
   counterElem.innerHTML = count+1;
}
