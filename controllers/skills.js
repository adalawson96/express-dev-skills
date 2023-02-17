// controllers/skills.js
const Skill = require('../models/skill');


module.exports = {
  index,
  show,
  add: addSkill,
  create,
  deleteOne
};

function deleteOne(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills')
};

function create(req, res) {
  console.log(req.body)
  Skill.create(req.body);
  res.redirect('/skills');
};

function addSkill(req, res) {
  res.render('skills/new', { title: 'New Skill'});
};

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll()
  });
};

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id)
  })
};

 