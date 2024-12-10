// var guj = 80, eng = 78, stat = 98, eco = 89, sp = 99;

// var totle = guj + eng + stat + eco + sp;
// console.log("totle==", totle);

// var per = totle / 5;
// console.log("Persenttage==", per);

// if (guj < eng && guj < stat && guj < eco && guj < sp) {
//     console.log("Min == Gurajati");
// }
// else if (eng < stat && eng < eco && eng < sp) {
//     console.log("Min == English");
// }
// else if (stat < eco && stat < sp) {
//     console.log("Min == Statistic");
// }
// else if (eco < sp) {
//     console.log("Min == Economice");
// }
// else {
//     console.log("Min == SP");
// }

// (guj > eng && guj > stat && guj > eco && guj > sp) ? console.log("Max == Gurajati") :
//     (eng > stat && eng > eco && eng > sp) ? console.log("Max == English") :
//         (stat > eco && stat > sp) ? console.log("Max == Statistic") :
//             (eco > sp) ? console.log("Max == Economice") : console.log("Max == SP");

//             var grad;
// if (guj >= 35 && eng >= 35 && stat >= 35 && eco >= 35 && sp >= 35) {
//     console.log("PASS");
//     if (per <= 100 && per >= 90) {
//         grad = "A+";
//     } elseif(per < 90 && per >= 80) {
//         $grad = "A";
//     } elseif(per < 80 && per >= 70) {
//         grad = "B+";
//     } elseif(per < 70 && per >= 60) {
//         grad = "B";
//     } elseif(per < 60 && per >= 50) {
//         grad = "C+";
//     } elseif(per < 50 && per >= 40) {
//         grad = "C";
//     } elseif(per < 40 && per >= 35) {
//         grad = "D+";
//     }
// }
// else {
//     console.log("FAIL");
// } 
var guj = 0, eng = 78, stat = 98, eco = 89, sp = 99;

var total = guj + eng + stat + eco + sp;
console.log("Total =", total);

var per = total / 5;
console.log("Percentage =", per);

if (guj < eng && guj < stat && guj < eco && guj < sp) {
    console.log("Min == Gujarati");
} else if (eng < stat && eng < eco && eng < sp) {
    console.log("Min == English");
} else if (stat < eco && stat < sp) {
    console.log("Min == Statistics");
} else if (eco < sp) {
    console.log("Min == Economics");
} else {
    console.log("Min == SP");
}

(guj > eng && guj > stat && guj > eco && guj > sp) ? console.log("Max == Gujarati") :
    (eng > stat && eng > eco && eng > sp) ? console.log("Max == English") :
        (stat > eco && stat > sp) ? console.log("Max == Statistics") :
            (eco > sp) ? console.log("Max == Economics") : console.log("Max == SP");

var grad;
if (guj >= 35 && eng >= 35 && stat >= 35 && eco >= 35 && sp >= 35) {
    console.log("PASS");
    if (per <= 100 && per >= 90) {
        grad = "A+";
    } else if (per < 90 && per >= 80) {
        grad = "A";
    } else if (per < 80 && per >= 70) {
        grad = "B+";
    } else if (per < 70 && per >= 60) {
        grad = "B";
    } else if (per < 60 && per >= 50) {
        grad = "C+";
    } else if (per < 50 && per >= 40) {
        grad = "C";
    } else if (per < 40 && per >= 35) {
        grad = "D+";
    }
    console.log("Grade =", grad);
} else {
    console.log("FAIL");
}
