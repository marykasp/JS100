function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

// the switch statement does not include break keyword after each clause
// the case '113' clause will be executed logging 'Product 2' to the console and the cases following will also be executed so 'Product 3' and 'Product nto found!' will also be logged
