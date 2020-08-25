function BankAccount(initialAmount) {
  this.initialAmount = initialAmount;
}



$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();

    const inputAmount = parseInt($("#inputAmount").val());

    let falcorAcct = BankAccount(inputAmount);


    // let returnNumber = replacer(ranger(userNumber));

    // $("#returnNumber").text(returnNumber);
    // $("#returnNumber").show();
  })
});