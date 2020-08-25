function BankAccount() {
  this.balance = 0;
  console.log(this.balance);
}

BankAccount.prototype.initialAmount = function(amount) {
  this.balance = amount;
  return this.balance;
}

BankAccount.prototype.depositMoney = function(amount) {
  this.balance += amount;
  return this.balance;
}

BankAccount.prototype.withdrawlMoney = function(amount) {
  this.balance -= amount;
  return this.balance;
}


$(document).ready(function() {
  let balance = new BankAccount();
  $("#number").submit(function(event) {
    event.preventDefault();
      const initialAmount = parseInt($("#initialAmount").val());
      if (initialAmount > 0) {
        balance.initialAmount(initialAmount)
      }
      $("#returnBalance").text(balance.balance);
      $("#returnBalance").show();
    });

    $("#deposit").submit(function(event) {
      event.preventDefault();
        const depositAmount = parseInt($("#inputDeposit").val());
        if (depositAmount > 0) {
          balance.depositMoney(depositAmount);
        };
        $("#returnBalance").text(balance.balance);
        $("#returnBalance").show();
      });   

    $("#withdrawl").submit(function(event) {
      event.preventDefault();
        const withdrawlAmount = parseInt($("#inputWithdrawl").val());
        if (withdrawlAmount > 0) {
          balance.withdrawlMoney(withdrawlAmount);
        };
        $("#returnBalance").text(balance.balance);
        $("#returnBalance").show();
    });

});
