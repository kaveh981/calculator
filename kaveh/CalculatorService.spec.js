'use strict';

describe('Calculator Service', function () {

    var service;

    beforeEach(function () {
        service = new CalculatorService();
    });

    it('should display 0 when loaded', function () {
        expect(service.getDisplay()).toEqual('0');
    });

    it('enter \'one\' should display \'1\'', function () {
        service.enterDigit('one');
        expect(service.getDisplay()).toEqual('1');
    });

    it('enter \'one\' enter \'two\' should display \'12\'', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        expect(service.getDisplay()).toEqual('12');
    });

    it('enter \'one\' enter \'two\' enter \'+\' should display \'12\'', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterOperation('+');
        expect(service.getDisplay()).toEqual('12');
    });

    it('enter  \'one\' enter \'two\' enter \'+\' enter \'three\' should display \'3\'', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterOperation('+');
        service.enterDigit('three');
        expect(service.getDisplay()).toEqual('3');
    });

    it('enter  \'one\' enter \'two\' enter \'+\' enter \'three\' enter equal should display \'15\'', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterOperation('+');
        service.enterDigit('three');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('15');
    });

    it('enter  \'one\' enter \'two\' enter \'+\' enter\'-\' enter \'three\' enter equal should display \'9\'', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterOperation('+');
        service.enterOperation('-');
        service.enterDigit('three');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('9');
    });

    it('enter  \'one\' enter \'two\' enter \'+\' enter \'three\' enter \'+\' should display \'15\'', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterOperation('+');
        service.enterDigit('three');
        service.enterOperation('+');
        expect(service.getDisplay()).toEqual('15');
    });

    it('enter  \'one\' enter \'two\' enter \'+\' enter \'three\' enter \'+\' enter \'four\' should display \'4\'', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterOperation('+');
        service.enterDigit('three');
        service.enterOperation('+');
        service.enterDigit('four');
        expect(service.getDisplay()).toEqual('4');
    });

    it('enter  \'one\' enter \'two\' enter \'+\' enter \'three\' enter \'+\' enter \'four\' enter equal should display \'19\'', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterOperation('+');
        service.enterDigit('three');
        service.enterOperation('+');
        service.enterDigit('four');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('19');
    });

    it('enter \'one\' enter \'two\' enter \'+\' enter \'three\' enter \'four\' enter equal should display \'46\'', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterOperation('+');
        service.enterDigit('three');
        service.enterDigit('four');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('46');
    });

    it('enter \'one\' enter \'two\' enter \'-\' enter \'three\' enter equal should display \'9\'', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterOperation('-');
        service.enterDigit('three');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('9');
    });

    it('enter \'one\'  enter \'-\' enter \'three\' enter equal should display \'-2\'', function () {
        service.enterDigit('one');
        service.enterOperation('-');
        service.enterDigit('three');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('-2');
    });

    it('enter \'one\'  enter \'-\' enter \'three\' enter \'-\' enter \'five\' enter equal should display \'-7\'', function () {
        service.enterDigit('one');
        service.enterOperation('-');
        service.enterDigit('three');
        service.enterOperation('-');
        service.enterDigit('five');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('-7');
    });

    it('enter \'one\' enter \'two\' enter \'/\' enter \'five\' enter equal should display \'2.4\'', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterOperation('/');
        service.enterDigit('five');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('2.4');
    });

    it('enter \'one\' enter \'two\' enter \'/\' enter \'zero\' enter equal should display \'Infinity\'', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterOperation('/');
        service.enterDigit('zero');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('Infinity');
    });

    it('enter \'one\' enter \'two\' enter \'/\' enter \'zero\'  enter \'six\' should display \'6\'', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterOperation('/');
        service.enterDigit('zero');
        service.enterEquals();
        service.enterDigit('six');
        expect(service.getDisplay()).toEqual('6');
    });


    it('enter \'one\' enter \'two\' enter \'/\' enter \'five\' enter \'*\' enter \'two\'  enter equal should display \'4.8\'', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterOperation('/');
        service.enterDigit('five');
        service.enterOperation('*');
        service.enterDigit('two');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('4.8');
    });

    it('enter \'one\' enter \'two\' enter \'*\' enter \'three\' enter equal should display \'36\'', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterOperation('*');
        service.enterDigit('three');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('36');
    });

    it('clear should display \'0\'', function () {
        service.enterClear();
        expect(service.getDisplay()).toEqual('0');
    });

    //this test case will always fail
    it('should display 12345 when loaded', function () {
        expect(service.getDisplay()).toEqual('12345');
    });

});

