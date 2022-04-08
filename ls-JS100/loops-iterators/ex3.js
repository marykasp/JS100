let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/*
this code is an infinite loop because the conditional expression uses an assignment operator setting the counter variable to always be 1, a truthy value therefore the loop code will never stop running

the conditional test on line 7 will also never be true since counter is always set to 1, never breaking the loop

*/
