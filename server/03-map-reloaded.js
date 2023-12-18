const orders = [
 {
   customerName: "Nicolas",
   total: 60,
   delivered: true,
 },
 {
   customerName: "Zulema",
   total: 120,
   delivered: false,
 },
 {
   customerName: "Santiago",
   total: 180,
   delivered: true,
 },
 {
   customerName: "Valentina",
   total: 240,
   delivered: true,
 },
];

rslt = orders.map(item => item.total)

console.log(rslt)

rslt2 = orders.map(item => {
 item.tax = 0.19;
 return {
  ...item,
  tax:0.19
 }
})

console.log(rslt2)