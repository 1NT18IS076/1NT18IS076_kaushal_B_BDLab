const emps = require("./employees.json");

console.log(JSON.stringify(emps));

// ####################### Answers #######################

db.employee.aggregate([
    { $match: { eligibleForPayRaise: true } },
    {
        $group: {
            _id: "$name",
            empSal: {
                $sum: {
                    $subtract: ["$salary", "$tax"],
                },
            },
        },
    },
    { $sort: { empSal: -1 } },
]);

// --------------------------------------------

let mapperFn = function () {
    emit(this.name, this.salary);
};

let reducerFn = function (empname, empSal) {
    return Array.sum(empSal);
};

db.employee.mapReduce(mapperFn, reducerFn, { out: "salarySum" });

// --------------------------------------------

// prettier-ignore
db.employee.find({
    $and: [
        { tax: { $gt: 10000 } }, 
        { eligibleForPayRaise: false }
    ],
}).pretty();

// --------------------------------------------

db.employee.updateOne(
    { name: "s1mple" },
    {
        $set: { salary: 65000 },
    }
);

db.employee.find({ name: "s1mple" }).pretty();

db.salarySum.drop();
db.salarySum.find({});

// --------------------------------------------
