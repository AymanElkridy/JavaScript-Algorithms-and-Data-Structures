// Cash Register

/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
] */

/* checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}. */

function checkCashRegister(price, cash, cid) {
  let changeNum = cash - price, status, change = [], cidRep = [["PENNY", cid[0][1]], ["NICKEL", cid[1][1]], ["DIME", cid[2][1]], ["QUARTER", cid[3][1]], ["ONE", cid[4][1]], ["FIVE", cid[5][1]], ["TEN", cid[6][1]], ["TWENTY", cid[7][1]], ["ONE HUNDRED", cid[8][1]]];
  let names = ["PENNY", "NICKEL", "DIME", "QUARTER", "ONE", "FIVE", "TEN", "TWENTY", "ONE HUNDRED"];
  let values = [.01, .05, .1, .25, 1, 5, 10, 20, 100];
  for (let i = names.length - 1; i >= 0; i--) {
    if (i === 0) {
      if (changeNum >= .01) {
        if (cid[0][1] < changeNum - (changeNum % .01)) {
          changeNum -= cid[0][1];
          change.push(["PENNY", cid[0][1]]);
          cid[0][1] = 0;
        } else {
          change.push(["PENNY", changeNum - (changeNum % .01) + .01]);
          changeNum = (changeNum % .01);
          cid[0][1] = 0;
        }
      }
    } else if (changeNum >= values[i]) {
      if (cid[i][1] < changeNum - (changeNum % values[i])) {
        changeNum -= cid[i][1];
        change.push([names[i], cid[i][1]]);
        cid[i][1] = 0;
      } else {
        change.push([names[i], changeNum - (changeNum % values[i])]);
        changeNum = (changeNum % values[i]);
        cid[i][1] -= changeNum - (changeNum % values[i]);
      }
    } 
  }
  if (changeNum > 0.01) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  }
  if (status !== "INSUFFICIENT_FUNDS") {
    if (cid[8][1] === 0 && cid[7][1] === 0 && cid[6][1] === 0 && cid[5][1] === 0 && cid[4][1] === 0 && cid[3][1] === 0 && cid[2][1] === 0 && cid[1][1] === 0 && cid[0][1] === 0) {
      status = "CLOSED";
      change = cidRep;
    } else {
      status = "OPEN";
    }    
  }
  return {'status' : status, 'change' : change};
}