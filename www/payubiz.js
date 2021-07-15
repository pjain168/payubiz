var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'payubiz', 'coolMethod', [arg0]);
};

exports.generateHash = function (arg0,arg1, success, error) {
    exec(success, error, 'payubiz', 'generateHash', [arg0,arg1]);
};

exports.generateHmac = function (arg0,arg1, success, error) {
    exec(success, error, 'payubiz', 'generateHmac', [arg0,arg1]);
};

exports.setHash = function(arg0,arg1,success,error){
    exec(success, error, 'payubiz','setHash',[arg0,arg1])
};

exports.checkOutPro = function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,
    arg12,arg13,arg14,arg15,arg16,arg17,arg18,success, error) {
    exec(success, error, 'payubiz', 'checkOutPro', [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,
        arg12,arg13,arg14,arg15,arg16,arg17,arg18]);
};
