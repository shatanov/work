"use strict"
let money, time;

function start(){
    while(isNaN(money) ||  money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?","30000");
        time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
    }
};
start();
let appData = {
        money: money,
        timeData: time,
        expenses: {
        },
        optionalExpenses: {
        },
        income: [],
        savings: true
    };
function chooseExpenses(){
    for(let i = 0; i < 2; i++){
        let expensesAnswer = prompt("Введите обязательную статью расходов в этом месяце", "");
        let expensesMoneyAnswer = +prompt("Во сколько обойдется?", "");
    
            if(expensesAnswer != "" && expensesMoneyAnswer != "" && expensesAnswer != null && expensesMoneyAnswer != null) {
            appData.expenses[expensesAnswer] = expensesMoneyAnswer;
        }  else{
            i = i - 1;
        };
    };
}
chooseExpenses();

appData.moneyPerDay = (appData.money/30).toFixed;

alert("Ваш бюджет на день: " + appData.moneyPerDay);
if(appData.money < 100){
    console.log("мин");
} else if(appData.money > 100 && appData.money < 2000){
    console.log("ср");
} else if(appData.money > 2000){
    console.log("макс ");
} else {
    console.log("ошибка");
};
function checkSavings(){
    if(appData.savings == true){
        let save = +prompt("Какова сумма накоплений?");
        let percent = +prompt("Какой процент накоплений?");
    }
};
