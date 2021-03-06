// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-5-b-236
description: >
    Object.defineProperties - 'set' property of 'descObj' is own
    accessor property without a get function (8.10.5 step 8.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var fun = function () {
            return 10;
        };
        var descObj = {
            get: fun
        };
        Object.defineProperty(descObj, "set", {
            set: function () { }
        });

        var obj = {};

        Object.defineProperties(obj, {
            prop: descObj
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return obj.hasOwnProperty("prop") && typeof desc.set === "undefined" && obj.prop === 10;
    }
runTestCase(testcase);
