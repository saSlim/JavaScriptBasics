﻿var data = ['Pesho', 22, true, ['fries', 'banana', 'cake']];

variablesTypes(data);

function variablesTypes(arr) {
    console.log("My name: " + arr[0] + " //type is " + typeof (arr[0]) +
                "\nMy age: " + arr[1] + " //type is " + typeof (arr[1]) +
                "\nI am male: " + arr[2] + " //type is " + typeof (arr[2]) +
                "\nMy favorite foods are: " + arr[3] + " //type is " + typeof (arr[3]));
}


