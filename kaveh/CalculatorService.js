// Code goes here
/*
 support decimal results
 support negative results
 support continuous math operations
 handle divide by zero
 handle duplicate operand entering
 */
'use strict';

function CalculatorService() {
    var number = "0";
    var operandConvertor = {
        '+': function (x, y) {
            return x + y
        },
        '-': function (x, y) {
            return x - y
        },
        '/': function (x, y) {
            return x / y
        },
        '*': function (x, y) {
            return x * y
        }
    };
    var digits = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }
    this.getDisplay = function () {
        var valuesAndOperand = getvaluesAndOperand();
        var operand = valuesAndOperand.operand;
        var arr = valuesAndOperand.arr;
        return parseFloat(((operand != "" && arr[1]) ? arr[1] : number)).toString();
    };

    this.enterDigit = function (digit) {
        if (number == "Infinity")
            this.enterClear();
        number += digits[digit].toString();
    };

    this.enterOperation = function (operation) {
        if (number == "Infinity")
            this.enterClear();
        var valuesAndOperand = getvaluesAndOperand();
        var operand = valuesAndOperand.operand;
        var arr = valuesAndOperand.arr;
        if ((operand != "" && arr[1]))
            this.enterEquals();

        if (parseInt(number.slice(-1)))
            number += operation;
        else
            number = number.slice(0, -1) + operation;
    };

    this.enterEquals = function () {
        var valuesAndOperand = getvaluesAndOperand();
        var operand = valuesAndOperand.operand;
        var arr = valuesAndOperand.arr;
        number = operandConvertor[operand]((number.charAt(0) == "-") ? -parseFloat(arr[0]) : parseFloat(arr[0]), parseFloat(arr[1])).toString();

    };

    this.enterClear = function () {
        number = "0";
    };

    function getvaluesAndOperand() {
        var operand = "";
        var arr = [];
        if ((number.charAt(0) == "-")) {
            operand = number.substr(1).replace(/[0-9.]/g, '')
            arr = number.substr(1).split(operand);
        }
        else {
            operand = number.replace(/[0-9.]/g, '')
            arr = number.split(operand);
        }
        return {operand: operand, arr: arr};
    }


}