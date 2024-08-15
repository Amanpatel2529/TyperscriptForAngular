main()

function main(): void {
  DisplayFactors(20);
}

function DisplayFactors(no: number): void {
  for (let index = 1; index <= no / 2; index++) {
    if (no % index == 0) {
      console.log(index + " ");
    }
  }
}