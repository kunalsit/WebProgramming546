(function () {
    function isPrime(num) {
      if (typeof num !== "number" || isNaN(num)) throw "Must provide a number";
      if (num < 2) return false;
      let prime = true;
      for (let i = 2; i < parseInt(num ** 0.5) + 1; i++) {
        if (num % i == 0) {
          prime = false;
          break;
        }
      }
      return prime;
    }
  
    function fib(n) {
  
    const result = [0, 1];
    for (var i = 2; i <= n; i++) {
      result.push(result[i-2] + result[i-1]);
    }
    console.log(result)
    return result[n]; 
  
  }
  
    const check = document.getElementById("check-prime");
  
    if (check) {
      const number = document.getElementById("number");
      const ul = document.getElementById("attempts");
      check.addEventListener("submit", event => {
        event.preventDefault();
        try {
          const numberValue = number.value;
          const num = parseInt(numberValue);
  const parsedNumberValue = fib(num)
  
          const prime = isPrime(parsedNumberValue);
          const li = document.createElement("li");
          if (prime) {
            li.appendChild(document.createTextNode(`The Fibonacci of ${num} is  ${parsedNumberValue} .`));
            li.setAttribute("class", "is-prime");
          }
          else {
            li.appendChild(document.createTextNode(`The Fibonacci of ${num} is  ${parsedNumberValue} .`));
            li.setAttribute("class", "not-prime");
          }
          ul.appendChild(li);
          number.value = "";
        } catch (e) {
          const message = typeof e === "string" ? e : e.message;
          alert(`${message}`);
        }
      });
    }
  })();
  