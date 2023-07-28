const add = (a, b, fun) => {
  setTimeout(() => {
    fun(a + b);
  }, 2000);
};
add(1, 2, (sum) => {
  console.log(sum);
});
