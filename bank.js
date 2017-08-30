var Bank = function() {
  this.accounts = []
}

Bank.prototype = {

  addAccount: function(account) {
    this.accounts.push(account)
  },

  totalValue: function(){
    var total = this.accounts.reduce( function( sum, account ){
      return sum += account.value;
    }, 0 )
    return total;
  },

  accountByName: function(name){
    
    return this.accounts.find( function(account) {
      return account.name === name
    })
  },

  largestAccount: function(){
    return this.accounts.sort( function(a,b){ return b.value - a.value })[0]
  },

  averageValue: function(){
    var numAccounts = this.accounts.length
    var average = this.accounts.reduce( function( sum, account ){
      return sum += account.value/numAccounts;
    },0)
    return average;
  }


}

module.exports = Bank;
