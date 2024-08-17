main()

function main() {
  Fibonancy(21);
}

function Fibonancy(no: number): void {
  let a = 0, b = 1, c = 0;
  for (; c < no;) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}