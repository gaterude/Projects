function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function countdown() {
  for (let i = 1; i <= 5; i++) {
    await wait(1000);
    console.log(i);
  }
}

countdown();