let assert = require('chai').assert;
let robot = require('../robot').robot;

describe('This is the PLACE 1,2,NORTH test', function(){
    
    //the list of commands that will be sent to the Robot script
    let instructions = ["PLACE 1,2,NORTH", "REPORT"];
    //calling each of those commands will produce an Array of results
    let result = instructions.map(i => robot.do(i));
    let report;
    
    //BUILD YOUR TESTS HERE
    
    // 1. test that result is an array
    
    // 2. test that result[1] is of type object
    
    report = result[1]; //create this variable after checking that type is object
    
    // 3. report should contain the properties action, x, y, and facing
    
    // 4. report.x should be a number between 0 and 5
    
    // 5. report.y should be a number between 0 and 5
    
    // 6. report.facing should be only NORTH, SOUTH, EAST, or WEST
    
});