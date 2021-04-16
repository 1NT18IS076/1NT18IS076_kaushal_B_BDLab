// const staff = require("./institute.json");

// console.log(JSON.stringify(staff));

// db.staff.aggregate([{$group: {_id: "$dept", total: {$avg : {$sum: "$salary"}}}}, {$sort: {total: -1 }}]);

// db.staff.aggregate([{$group: {_id: "$age", avgSal: {$avg : {$sum: "$salary"}}}}, {$sort: {total: -1 }}]);

// let mapperFn = function() {emit(this.name, this.salary, this.dept)}

// let reducerFn = function(staffName, staffsal, staffDept) {return }

db.staff.aggregate([
  { $match: { perfStatus: "excellent" } },
  { $group: { _id: "$_id", staffSal: { $sum: "$salary" } } },
  { $sort: { total: -1 } },
]);
