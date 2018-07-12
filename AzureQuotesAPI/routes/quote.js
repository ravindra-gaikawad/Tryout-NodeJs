var router = require('express').Router();
var TYPES = require('tedious').TYPES;

/* GET task listing. */
router.get('/', function (req, res) {

    req.sql("select * from quote for json path")
        .into(res, '[]');

});

/* GET single task. */
router.get('/:id', function (req, res) {

    req.sql("select * from quote where id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');

});

/* POST create task. */
router.post('/', function (req, res) {

    req.sql("exec createquote @quote")
        .param('quote', req.body, TYPES.NVarChar)
        .exec(res);

});

/* PUT update task. */
router.put('/:id', function (req, res) {

    req.sql("exec updatequote @id, @quote")
        .param('id', req.params.id, TYPES.Int)
        .param('quote', req.body, TYPES.NVarChar)
        .exec(res);

});

/* DELETE single task. */
router.delete('/:id', function (req, res) {

    req.sql("delete from quote where id = @id")
        .param('id', req.params.id, TYPES.Int)
        .exec(res);

});

module.exports = router;