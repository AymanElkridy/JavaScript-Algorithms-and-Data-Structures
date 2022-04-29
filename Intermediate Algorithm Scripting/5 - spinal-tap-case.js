// Spinal Tap Case

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.

// spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.

// spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.

// spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.

// spinalCase("AllThe-small Things") should return the string all-the-small-things.

function spinalCase(str) {
  return str.split('').reduce((s, x, i, a) => s += /[\W,_]/.test(x) ? '-' : /[A-Z]/.test(x) && /[a-z]/.test(a[i-1]) && i !== 0 ? '-' + x.toLowerCase() : x.toLowerCase(), '');
}