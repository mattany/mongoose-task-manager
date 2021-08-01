require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete("6102d069a190c610d0891fef").then(() => {
    return Task.countDocuments({completed: false})
}).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
});
