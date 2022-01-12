const TodoRepository = require("./repositories/todo.repository");
const {TodoRecord} = require("./records/todo.records");
const {db, client} = require("./utils/db");

(async () => {

    try {

        // const todo = new TodoRecord({
        //     title: "Skończyć Bazy danychh MEGAK"
        // })

        // await TodoRepository.insert(todo);

        // console.log(todo)
        // console.log(await TodoRepository.findAll())

        const todo = (await TodoRepository.find('61dca3e1a5e2db330141c305'))

        todo.title = "PLURALSIGHT JAVASCRIPT"

        await TodoRepository.update(todo)

        console.log(await TodoRepository.find('61dca3e1a5e2db330141c305'))




    } finally {
        await client.close();
    }


})();
