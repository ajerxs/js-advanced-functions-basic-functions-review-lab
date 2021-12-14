function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
};

function wrapAdjective(wrapper="*") {
    return function(inner="special") {
        return `You are ${wrapper}${inner}${wrapper}!`;
    };
};

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1/num2;
    }
};

function actionApplyer(integer, array) {
    let num = integer
    for (let i = 0; i < array.length; i++) {
        num = array[i](num);
    };
    return num;
};