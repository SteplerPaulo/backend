const db = require("../config/db.config.js");
const Op = db.Sequelize.Op;

exports.findAllQuery = (req, res) => {
  const Model = db[req.params.model];

  const { page, size, query } = req.query;
  const condition = getCondition(req.query, Op);

  const { limit, offset } = getPagination(page, size);
  console.log(condition)

  Model.findAndCountAll({
    where: condition,
    limit: limit,
    offset: offset,
    order: [["id", "ASC"]],
    include: { all: true },
  }).then((data) => {
    const response = getPagingData(data, page, limit);
    res.send(response);
  });
};

exports.postData = (req, res) => {
  const Model = db[req.params.model];
  console.log(req.body);
  Model.create(req.body).then((data) => {
    console.log(data);

    res.send(data);
  });
};

const getPagination = (page, size) => {
  const limit = size ? +size : 12;
  const offset = page ? (page - 1) * limit : 0;
  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: rows } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, rows, totalPages, currentPage };
};

const getCondition = (query, Op) => {
  const array = Object.entries(query);
  let condition = {};
  array.filter((item, index) => {
    if (item[0].match(/name/i)) {
      condition[item[0]] = {};
      condition[item[0]][Op.like] = `%${item[1]}%`;
      return false;
    }
    if (item[0].match(/price/i)) {
      condition[item[0]] = {};
      if (item[1].match(/[\-\w]+\-[\-\w]+/)) {
        condition[item[0]][Op.between] = item[1].split("-").map(Number);
        return false;
      }

      if (item[1].match(/\b-/i)) {
        condition[item[0]][Op.gte] = parseInt(item[1].replace(/\-/, ""));
        return false;
      } else if (item[1].match(/\B-/i)) {
        condition[item[0]][Op.lte] = parseInt(item[1].replace(/\-/, ""));
        return false;
      }
    }
   // if (item[0].match(/^page/i)) {
     // condition[item[0]] = {};
     // condition[item[0]][Op.like] = `%${item[1]}%`;
      //return false;
    //}
    
    
  });
  return condition;
};
