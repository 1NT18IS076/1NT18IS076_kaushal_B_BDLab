db.staff.aggregate([
  { $match: { perfStatus: "excellent" } },
  {
    $group: {
      _id: "$_id",
      staffSal: { $min: "$salary" },
    },
  },
  { $sort: { total: -1 } },
]);

db.staff.aggregate([
  { $match: { perfStatus: "excellent" } },
  {
    $group: {
      _id: "$_id",
      staffSal: { $max: "$salary" },
    },
  },
  { $sort: { total: -1 } },
]);

db.staff.aggregate([
  { $match: { perfStatus: "excellent" } },
  {
    $group: {
      _id: "$_id",
      staffSal: { $last: "$salary" },
    },
  },
  { $sort: { total: -1 } },
]);

db.staff.aggregate([
  { $match: { perfStatus: "excellent" } },
  {
    $group: {
      _id: "$_id",
      staffSal: { $first: "$salary" },
    },
  },
  { $sort: { total: -1 } },
]);
