const {TodoRepository} = require("./repositories/todo.repository");

const {TodoRecord} = require("./records/todo.record");
const {pool} = require("./utils/db");

(async () => {

    // const foundTodo = await TodoRecord.find('a047117d-4f62-4936-8a38-8183b305aaae')
    // foundTodo.title = " ROZWALIC PLURALSIGHT!!"
    // await foundTodo.update()
    //
    // console.log(foundTodo)
    //
    // const firstTodoItem = new TodoRecord({
    //     title: 'Finish day 5, week 4',
    // })
    // const newId = await firstTodoItem.insert();
    //
    // // console.log(firstTodoItem);
    // console.log(`New todoo item added with ID: ${newId}`)
    // await firstTodoItem.delete();

// V2 - WITH REPOSITORIES

    //  const foundTodos=await TodoRepository.findAll();
//    console.log(foundTodos)

    const foundTodo = await TodoRepository.find('d52c5928-564e-4f35-bacf-6300b647dc0e')
    console.log(foundTodo)
    // const deletedTodo = await TodoRepository.delete(foundTodo);
    // console.log(deletedTodo)

    foundTodo.title = "traratatat";
    const updateTodo = await TodoRepository.update((foundTodo));
    console.log(updateTodo)

    await pool.end();
})();
