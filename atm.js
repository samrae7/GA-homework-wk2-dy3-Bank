$(document).ready(function(){

  $('#deposit1').on('click',addFunds1);
  $('#withdraw1').on('click',withdrawFundsOverdraft);
  $('#deposit2').on('click',addFunds1);
  $('#withdraw2').on('click',withdrawFunds1);

  function addFunds1() {
    //get the amount entered in the box and add to the account balance of account1
    var deposit = parseInt($(this).prev().val());
    var account1BalanceStringWithDollar = $(this).parent().children('.balance').text();
    var account1BalanceString = account1BalanceStringWithDollar.replace('$','');
    var account1Balance = parseInt(account1BalanceString);
    var newAccount1Balance = account1Balance + deposit; 
    $(this).prevAll().eq(1).html('$'+newAccount1Balance);
  };



  function withdrawFunds1() {
    // var overdraft = $(this).data('overdraft');
    var withdrawal = parseInt($(this).prevAll().eq(1).val());
    var account1BalanceStringWithDollar = $(this).parent().children('.balance').text();
    var account1BalanceString = account1BalanceStringWithDollar.replace('$','');
    var account1Balance = parseInt(account1BalanceString);
   //update divs wiith new balance for current account
    var newAccount1Balance = withdrawal<=account1Balance ? account1Balance - withdrawal  : account1Balance;
    ;
    $(this).prevAll().eq(2).html('$'+newAccount1Balance);
  };

  function withdrawFundsOverdraft() {
    var withdrawal = parseInt($(this).prevAll().eq(1).val());
    var account1BalanceStringWithDollar = $(this).parent().children('.balance').text();
    var account1BalanceString = account1BalanceStringWithDollar.replace('$','');
    var account1Balance = parseInt(account1BalanceString);
//find savings balance
    var balance2stringWithDollar = $('#balance2').html();
    var balance2string = balance2stringWithDollar.replace('$','');
    var balance2 = parseInt(balance2string);
    var newAccount1Balance;
//are there sufficient funds across the two accounts?
    if (account1Balance >= withdrawal) {
      newAccount1Balance = account1Balance - withdrawal;
    } else if (balance2+account1Balance>=withdrawal) {
      var newSavingsBalance = balance2 + account1Balance - withdrawal;
      newAccount1Balance = 0;
      $('#balance2').html('$'+newSavingsBalance);
    } else {
      newAccount1Balance = account1Balance;
    }
    $(this).prevAll().eq(2).html('$'+newAccount1Balance);
  };
});

