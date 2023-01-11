const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  // set the counter to zero
  counter.innerText = "0";

  // target in data-target attribute and take its value
  const target = +counter.getAttribute("data-target");
  // console.log(typeof target, target);

  // now update the counter with this function
  const updateCounter = () => {
    // set the counter value to here.
    const prevCounter = +counter.innerText;

    // the incrementor
    const increment = target / 200;

    if (prevCounter < target) {
      //  if target is bigger than the prevCounter, counter will be updated
      counter.innerText = `${Math.ceil(prevCounter + increment)}`;
      // call updateCounter function after specific times with setTimeout function
      setTimeout(updateCounter, 100);
    } else {
      // otherwise change the counter as targeted value
      counter.innerText = target;
    }
  };
  updateCounter();
});
