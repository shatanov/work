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
        savings: true,
        chooseExpenses: function(){
            for(let i = 0; i < 2; i++){
                let expensesAnswer = prompt("Введите обязательную статью расходов в этом месяце", "");
                let expensesMoneyAnswer = +prompt("Во сколько обойдется?", "");
            
                    if(expensesAnswer != "" && expensesMoneyAnswer != "" && expensesAnswer != null && expensesMoneyAnswer != null) {
                    appData.expenses[expensesAnswer] = expensesMoneyAnswer;
                }  else{
                    i = i - 1;
                };
            };
        },
        detectDayBudget: function(){
            appData.moneyPerDay = (appData.money/30).toFixed(1);
            alert("Ваш бюджет на день: " + appData.moneyPerDay);
        },
        detectLevel: function(){
            if(appData.money < 100){
                console.log("мин");
            } else if(appData.money > 100 && appData.money < 2000){
                console.log("ср");
            } else if(appData.money > 2000){
                console.log("макс ");
            } else {
                console.log("ошибка");
            };
        },
        checkSavings: function(){
            if(appData.savings == true){
                let save = +prompt("Какова сумма накоплений?");
                let percent = +prompt("Какой процент накоплений?");
                appData.mouthIncome = save/100/12*percent;
                alert("Ваш доход по депозиту: " + appData.mouthIncome); 
        }
        },
        chooseOptExpenses: function(){
            for(let i = 1; i < 3; i++ ){
                let optionalExpensesAnswer = prompt("Статья необязательных расходов?");
                if(optionalExpensesAnswer != "" && optionalExpensesAnswer != null) {
                    appData.optionalExpenses[i] = optionalExpensesAnswer;
                }  else{
                    i = i - 1;
                };
             };
        },
        chooseIncome: function(){
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
            if (items != "" &&)
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?", ""));
            appData.income.sort();
        }
};


