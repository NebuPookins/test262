// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.5_A1_T01;
 * @section: 15.7.5;
 * @assertion: Number instances have no special properties beyond those 
 * inherited from the Number prototype object;
 * @description: Checking property constructor;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.5_A1_T01",

path: "15.7.5",

description: "Checking property constructor",

test: function testcase() {
   //CHECK#1
if((new Number()).hasOwnProperty("constructor") !== false){
  $ERROR('#1: Number instance must have no special property "constructor"');
}

//CHECK#2
if((new Number()).constructor !== Number.prototype.constructor){
  $ERROR('#2: Number instance property "constructor" must be inherited from Number prototype object');
}


 }
});
