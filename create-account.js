function createAccount(pin, amount = 0) {
  return {
    checkBalance(pinEntered) {
      if (pinEntered === pin) {
        return `$${amount}`;
      } else {
        return "Invalid PIN.";
      }
    },
    deposit(pinEntered, depositAmount) {
      if (pinEntered === pin) {
        amount += depositAmount;
        return `Succesfully deposited $${depositAmount}. Current balance: $${amount}.`;
      } else {
        return "Invalid PIN.";
      }
    },
    withdraw(pinEntered, withdrawAmount) {
      if (pinEntered === pin) {
        if (withdrawAmount > amount)
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        return `Succesfully withdrew $${withdrawAmount}. Current balance: $${(amount -=
          withdrawAmount)}.`;
      } else {
        return "Invalid PIN.";
      }
    },
    changePin(pinEntered, newPin) {
      if (pinEntered === pin) {
        pin = newPin;
        return "PIN successfully changed!";
      } else {
        return "Invalid PIN.";
      }
    },
  };
}

module.exports = { createAccount };
