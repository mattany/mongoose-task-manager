require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete("6102d069a190c610d0891fef").then(() => {
//     return Task.countDocuments({completed: false})
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// });


const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    return Task.countDocuments({completed: false})
}

deleteTaskAndCount("6102eaaa8f50d15470729098").then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})