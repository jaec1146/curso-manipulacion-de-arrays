const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 5, 7 ,8, 10, 9]

// const rta = items.reduce((obj, item) => {
//  if (!obj[item]) {
//   obj[item] = 1
//  } else {
//   obj[item] = obj[item] + 1
//  }
//  return obj
// }, {})

// console.log(rta) 

// const data = [
//  {
//    name: "Nicolas",
//    level: "low",
//  },
//  {
//    name: "Andrea",
//    level: "medium",
//  },
//  {
//    name: "Zulema",
//    level: "hight",
//  },
//  {
//    name: "Santiago",
//    level: "low",
//  },
//  {
//    name: "Valentina",
//    level: "medium",
//  },
//  {
//    name: "Lucia",
//    level: "hight",
//  },
// ];

// const rta1 = data
//  .map(item => item.level) 
//  .reduce((obj, item)=> {
//  if (!obj[item]) {
//   obj[item] = 1;
//  } else {
//   obj[item] = obj[item] + 1
//  }
//  return obj
//  }, {});

// console.log(rta1);


const rta2 = items
  .reduce((obj,item) => {
    if (item < 6) {
      obj["1-5"] +=  1
    }else
    if (item < 9) {
      obj["6-8"] += 1
    }else{
      obj["9-10"] += 1
    }
    return obj
  }, { "1-5": 0, "6-8": 0, "9-10": 0 })
  
console.log(rta2)
