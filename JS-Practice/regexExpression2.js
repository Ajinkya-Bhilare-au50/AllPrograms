const re = new RegExp("[Mr|Ms|Mrs|Dr|Er]+\\.[a-zA-Z]+$");
/* 
^ - Matches beginning of input.
| - symbol to match one thing or the other. For eg., (a|b) matches either a or b.
\ - Escape Sequences, To recognized as a period and not a wildcard symbol
[A-Za-z] - for uppercase and lowercase character
"+" - Matches the preceding item [A-Za-z], 1 or more times
$ - Matches end of input.

*/