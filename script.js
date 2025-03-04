// when the error message pops up I want them to recieve the message in "const" hopefully

const message ="You have received this message because you have been chosen to open an important vault. Here is the secret combination";

// the first combination is 10 so we are adding numbers together to get to 10 and take a guess what numbers I used, Exactly 9 + 1!!!!!!!
const num1 = 9 + 1;

// Got a little bit more creative, I do not know why i assumed it would not work but it did!! Our next combination code is 40, so I multiplied(*) 20 by 3 then I subtracted(-) 20 from that total which got us 40
const num2 = 20 * 3 - 20;

//Well i tried to see if i can find a way to use Modulus, wow was that a fail, So I ended up dividing(/) 234 to 6 to make it 39, oh, right my combination is 39
const num3 = 234 / 6;



alert(`${message}: ${num1}-${num2}-${num3}`);
