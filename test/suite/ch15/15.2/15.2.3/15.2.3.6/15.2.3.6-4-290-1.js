// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-290-1
description: >
    Object.defineProperty - 'O' is an Arguments object of a function
    that has formal parameters, 'name' is own property which is
    defined in both [[ParameterMap]] of 'O' and 'O', is deleted
    afterwards, and 'desc' is accessor descriptor, test 'name' is
    redefined in 'O' with all correct attribute values (10.6
    [[DefineOwnProperty]] step 3)
includes:
    - runTestCase.js
    - accessorPropertyAttributesAreCorrect.js
---*/

function testcase() {
        return (function (a, b, c) { 
            delete arguments[0];
            function getFunc() {
                return 10;
            }
            function setFunc(value) {
                this.setVerifyHelpProp = value;
            }
            Object.defineProperty(arguments, "0", {
                get: getFunc,
                set: setFunc,
                enumerable: true,
                configurable: true
            });
            var verifyFormal = a === 0;
            return accessorPropertyAttributesAreCorrect(arguments, "0", getFunc, setFunc, "setVerifyHelpProp", true, true) && verifyFormal;
        }(0, 1, 2));
    }
runTestCase(testcase);
