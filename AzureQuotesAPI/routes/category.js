var router = require('express').Router();
var TYPES = require('tedious').TYPES;

/* GET task listing. */
router.get('/', function (req, res) {

    req.sql("select * from category for json path")
        .into(res, '[]');

});

/* GET single task. */
router.get('/:id', function (req, res) {

    req.sql("select * from category where id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');

});

/* POST create task. */
router.post('/', function (req, res) {

    req.sql("exec createcategory @category")
        .param('category', JSON.stringify(req.body), TYPES.NVarChar)
        .exec(res);

});

/* PUT update task. */
router.put('/:id', function (req, res) {

    req.sql("exec updatecategory @id, @category")
        .param('id', req.params.id, TYPES.Int)
        .param('category', JSON.stringify(req.body), TYPES.NVarChar)
        .exec(res);

});

/* DELETE single task. */
router.delete('/:id', function (req, res) {

    req.sql("delete from category where id = @id")
        .param('id', req.params.id, TYPES.Int)
        .exec(res);

});

module.exports = router;