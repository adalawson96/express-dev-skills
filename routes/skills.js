var express = require('express');
var router = express.Router();

//require the controller with functionality
var skillsCtrl = require ('../controllers/skills');

//all actual paths start with skills

//GET /skills/add-new-skill
router.get('/add-new-skill', skillsCtrl.add);
//GET /skills
router.get('/', skillsCtrl.index);
//GET / skills/new  <--- Define BEFORE show route
// router.post('/new', skillsCtrl.new);
//POST /skills
router.post('/', skillsCtrl.create)
//DELETE /skills/:id
router.delete('/:id', skillsCtrl.deleteOne);
//GET individual skill
router.get('/:id', skillsCtrl.show);


module.exports = router;
