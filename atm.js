$(document).ready(function(){

  $('#deposit1').on('click',addFunds1);
  $('#withdraw1').on('click',withdrawFunds1);
  $('#deposit2').on('click',addFunds1);
  $('#withdraw2').on('click',withdrawFunds1);

  function addFunds1() {
  //get the amount entered in the box and add to the account balance of account1
  //  
  
    var deposit = parseInt($(this).prev().val());
    var account1BalanceStringWithDollar = $(this).parent().children('.balance').text();
    var account1BalanceString = account1BalanceStringWithDollar.replace('$','');
    var account1Balance = parseInt(account1BalanceString);
    var newAccount1Balance = account1Balance + deposit; 
    $(this).prevAll().eq(1).html('$'+newAccount1Balance);
  };

  function withdrawFunds1() {
    var withdrawal = parseInt($(this).prevAll().eq(1).val());
    var account1BalanceStringWithDollar = $(this).parent().children('.balance').text();
    var account1BalanceString = account1BalanceStringWithDollar.replace('$','');
    var account1Balance = parseInt(account1BalanceString);
    var newAccount1Balance = account1Balance - withdrawal;

    var newAccount1Balance = withdrawal<=account1Balance ? account1Balance - withdrawal  : account1Balance;
    
    $(this).prevAll().eq(2).html('$'+newAccount1Balance);
  };

});