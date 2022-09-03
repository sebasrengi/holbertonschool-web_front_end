function countPrimeNumbers() {
  return 25;
}

let start = window.performance.now();
for (let i = 0; i < 100; i++) {
  console.log(countPrimeNumbers());
};
let finish = window.performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${finish - start} milliseconds.`);
