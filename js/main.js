
// variable bank alahly 
var bankAhly = document.getElementById("bankAhly");
var ahlyMonths = document.getElementById("ahlyMonths");
var month6 = document.getElementById("month6");
var month12 = document.getElementById("month12");
var month18 = document.getElementById("month18");
var month24 = document.getElementById("month24");
var month36 = document.getElementById("month36");
var month48 = document.getElementById("month48");
// variable yes bank
var yesBank = document.getElementById("yesBank");
var yesMonths = document.getElementById("yesMonths");
var yesMonth6 =document.getElementById("yesMonth6")
var yesMonth12 =document.getElementById("yesMonth12")
var yesMonth18 =document.getElementById("yesMonth18")
var yesMonth24 =document.getElementById("yesMonth24")
/* variable union bank */
var unionBank = document.getElementById("unionBank");
var unionMonths = document.getElementById("unionMonths");
var threeMonth = document.getElementById("threeMonth");
var sixMonth = document.getElementById("sixMonth");
var twMonth = document.getElementById("twMonth");
// money
var total = document.getElementById("total");
var money = 60000

/* start bank alahly */
bankAhly.addEventListener("click", function () {
    ahlyMonths.style.display = "block"
    yesMonths.style.display = "none"
    unionMonths.style.display = "none"
    total.innerHTML = money + 10000
});
month6.addEventListener("click", function () {
    var interest = money * Number(25 / 100)
    var totalPayment = money + Number(interest)
    var month6Payment = totalPayment / Number(6)
    total.innerHTML = month6Payment
});
month12.addEventListener("click", function () {
    var interest = money * Number(25 / 100)
    var totalPayment = money + Number(interest)
    var month12Payment = totalPayment / Number(12)
    total.innerHTML = month12Payment
});
month18.addEventListener("click", function () {
    var interest = money * Number(25 / 100)
    var totalPayment = money + Number(interest)
    var month18Payment = Math.round(totalPayment / Number(18))
    total.innerHTML = month18Payment
});
month24.addEventListener("click", function () {
    var interest = money * Number(25 / 100)
    var totalPayment = money + Number(interest)
    var month24Payment = totalPayment / Number(24)
    total.innerHTML = month24Payment
});
month36.addEventListener("click", function () {
    var interest = money * Number(25 / 100)
    var totalPayment = money + Number(interest)
    var month36Payment = Math.round(totalPayment / Number(36))
    total.innerHTML = month36Payment
});
month48.addEventListener("click", function () {
    var interest = money * Number(25 / 100)
    var totalPayment = money + Number(interest)
    var month48Payment = Math.round(totalPayment / Number(48))
    total.innerHTML = month48Payment
});
/* end bank alahly */


/* start yes bank */
yesBank.addEventListener("click", function () {
    yesMonths.style.display = "block"
    ahlyMonths.style.display = "none"
    unionMonths.style.display = "none"
    total.innerHTML = money + 7000
})

yesMonth6.addEventListener("click", madyon)
function madyon() {
    var interest = money * Number(30 / 100)
    var totalPayment = money + Number(interest)
    var yesMonth6Payment = totalPayment / Number(6)
    total.innerHTML = yesMonth6Payment
}
yesMonth12.addEventListener("click", madyon1)
function madyon1() {
    var interest = money * Number(30 / 100)
    var totalPayment = money + Number(interest)
    var yesMonth12Payment = totalPayment / Number(12)
    total.innerHTML = yesMonth12Payment
}
yesMonth18.addEventListener("click", madyon2)
function madyon2() {
    var interest = money * Number(30 / 100)
    var totalPayment = money + Number(interest)
    var yesMonth18Payment = Math.round(totalPayment / Number(18))
    total.innerHTML = yesMonth18Payment
}
yesMonth24.addEventListener("click", madyon3)
function madyon3() {
    var interest = money * Number(30 / 100)
    var totalPayment = money + Number(interest)
    var yesMonth24Payment = totalPayment / Number(24)
    total.innerHTML = yesMonth24Payment
}
/* end yes bank */



/* start union bank  */
unionBank.addEventListener("click", function () {
    unionMonths.style.display = "block"
    yesMonths.style.display = "none"
    ahlyMonths.style.display = "none"
    total.innerHTML = money
})

threeMonth.addEventListener("click", function () {
    var interest = money * Number(35 / 100)
    var totalPayment = money + Number(interest)
    var threePayment = totalPayment / Number(3)
    total.innerHTML = threePayment
})

sixMonth.addEventListener("click", function () {
    var interest = money * Number(35 / 100)
    var totalPayment = money + Number(interest)
    var sixPayment = totalPayment / Number(6)
    total.innerHTML = sixPayment
})

twMonth.addEventListener("click", function () {
    var interest = money * Number(35 / 100)
    var totalPayment = money + Number(interest)
    var twPayment = totalPayment / Number(12)
    total.innerHTML = twPayment
})
/* end union bank  */






