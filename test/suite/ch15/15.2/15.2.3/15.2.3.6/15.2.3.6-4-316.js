// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-316
description: >
    Object.defineProperty - 'O' is an Arguments object, 'P' is generic
    own data property of 'O', and 'desc' is data descriptor, test
    updating multiple attribute values of 'P' (10.6
    [[DefineOwnProperty]] step 3)
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {
        return (function () {
            Object.defineProperty(arguments, "genericProperty", {
                value: 1001,
                writable: true,
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(arguments, "genericProperty", {
                value: 1002,
                enumerable: false,
                configurable: false
            });
            return dataPropertyAttributesAreCorrect(arguments, "genericProperty", 1002, true, false, false);
        }(1, 2, 3));
    }
runTestCase(testcase);
