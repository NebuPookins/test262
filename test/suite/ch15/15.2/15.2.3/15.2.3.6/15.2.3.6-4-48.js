// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-48
description: >
    Object.defineProperty - 'name' property doesn't exist in 'O', test
    [[Writable]] of 'name' property of 'Attributes' is set as false
    value if absent in data descriptor 'desc' (8.12.9 step 4.a.i)
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {
        var obj = {};

        Object.defineProperty(obj, "property", {
            value: 1001,
            enumerable: true,
            configurable: false
        });

        return dataPropertyAttributesAreCorrect(obj, "property", 1001, false, true, false);
    }
runTestCase(testcase);
