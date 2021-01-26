





  const loginButton = document.getElementById("login");
  loginButton.addEventListener("click", function(){
    let loginArea = document.getElementById("login-area");
    loginArea.style.display = "none"
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block"

  })
  //deposit btn upadate
  const depositBtn = document.getElementById("addDeposit");
  depositBtn.addEventListener('click', function(){
    const depositNumber = getInputNumber("depositAmount");

    updateSpanTag('currentDeposit',depositNumber )
    updateSpanTag('currentBalance',depositNumber )

    document.getElementById("depositAmount").value = "";
  })

  // withdraw btn update
  const withdrawBtn = document.getElementById("addWithdraw");
  withdrawBtn.addEventListener('click', function(){
    const withdrawNumber = getInputNumber("withdrawAmount");

    updateSpanTag('currentWithdraw',withdrawNumber )
    updateSpanTag('currentBalance',-1*withdrawNumber )

    document.getElementById("withdrawAmount").value = "";
  })

  //all input value finder
  function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
  }


  function updateSpanTag(id,depositNumber){
      const current = document.getElementById(id).innerText;
      const currentNumber = parseFloat(current);
      const total = currentNumber + depositNumber;
      document.getElementById(id).innerText = total;
    }














