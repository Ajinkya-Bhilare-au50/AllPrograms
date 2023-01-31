function ArrIntersection() {
  B = [];
  A = [];
  let string1 =
    "447 642 23 572 602 674 447 221 354 655 915 63 202 425 446 376 176 68 821 599 639 227 109 400 917 146 244 567 893 647 857 833 92 18 412 748 34 509 868 402 725 452 489 727 946 972 75 190 695 153 210 770 94 34 402 437 262 847 135 457 741 457 89 312 882 70 560 655 577 636 186 762 406 421 764 59 606 242 727 621 41 35 909 597 456 332 956 412 553 182 38 594 573 26 369 978 307 673 968 589";
  A = string1.split(" ").map(Number);
  let string2 =
    "77 823 751 160 693 402 243 993 711 640 416 31 846 270 124 767 453 606 242 270 776 16 439 122 584 139 490 342 37 639 333 936 425 423 658 88 876 923 638 423 588 727 511 587 833 809 278 615 610 801 72 721 227 345 864 141 355 654 720 966 419 686 574 716 200 576 568 296 972 596 211 567 186 847 815 567 399 68 519 99 512 901 884 738 170 3 512 947 230 584 11 828 588 183 738 953 432 762 546 165";
  B = string2.split(" ").map(Number);
  console.log(B);
  console.log("Its Length is " + B.length);
  console.log(A);
  console.log("Its Length is " + A.length);
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => a - b);
  let temp1 = [];
  let temp2 = [];

  A.forEach((item) => {
    if (!B.includes(item)) temp1.push(item);
  });

  B.forEach((item) => {
    if (!A.includes(item)) temp2.push(item);
  });

  C = [...new Set(temp1)];
  D = [...new Set(temp2)];
  C = C.sort((a, b) => a - b);
  D = D.sort((a, b) => a - b);
  console.log(C);
  output1 = [...C, ...D];
  console.log(output1.sort((a, b) => a - b));
  ans1 = [];
  string3 =
    "18 23 26 34 35 38 41 59 63 70 75 89 92 94 109 135 146 153 176 182 190 202 210 221 244 262 307 312 332 354 369 376 400 406 412 421 437 446 447 452 456 457 489 509 553 560 572 573 577 589 594 597 599 602 621 636 642 647 655 673 674 695 725 741 748 764 770 821 857 868 882 893 909 915 917 946 956 968 978";
  ans1 = string3.split(" ").map(Number);
  console.log("C is=" + C);
  console.log("Ans1 is=" + ans1);
  if (JSON.stringify(C) === JSON.stringify(ans1)) {
    console.log("Equal!");
  } else {
    console.log("They are not equal");
  }
}
ArrIntersection();
