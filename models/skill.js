const skills = [
    {id: 125223, skill: 'html', proficient: true},
    {id: 127904, skill: 'express', done: false},
    {id: 139608, skill: 'js', done: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
};

function create(skill){
skill.id = Date.now() % 1000000;
skill.done = false;
skills.push(skill);
};

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id);
};

function getAll() {
    return skills;
};
