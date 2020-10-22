let account = {
    Name: "Andre Gunawan",
    Expenses: [],
    addExpenses: function(description, amount){
        this.Expenses.push({"description": description, "amount": amount});
    },

    getAccountSummary: function (){
        let totalExpenses = 0;
        this.Expenses.forEach(function (el){
            totalExpenses = totalExpenses + el.amount;
        });
    return totalExpenses;
    }
};

account.addExpenses('membeli Makanan', 30000);
account.addExpenses('Ongkos', 15000);
console.log("Total pengeluaran " + account.Name +" Jhon adalah Rp." + account.getAccountSummary());