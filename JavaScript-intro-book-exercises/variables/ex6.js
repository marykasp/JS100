// will this program produce an error why or why not?

const FOO = 'bar';

{
  const FOO = 'qux';
}

console.log(FOO);

  /*
** This program will not run an error because const variables are also block scoped
** the constant variable declared on line 3 is globally scoped and the one inside the curly braces is only visible inside that block therefore console.log(FOO) will print 'bar' to the console
  */
