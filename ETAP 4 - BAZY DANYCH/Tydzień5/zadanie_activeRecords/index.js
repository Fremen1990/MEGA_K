const {TodoRecord} = require("./records/todo.records");

const {db, client} = require("./utils/db");

(async () => {

    try {
        // console.log(await TodoRecord.findAll())

        // const insertTodo = await TodoRecord.insert({
        //     title: "Dwa duże dni BAZ Danych"
        // })

        // console.log(await insertTodo)

        // const todo = await TodoRecord.find('61dca4d5d34536525727b20b')
        // console.log(todo)
        // todo.title = "Dwa duze dni BAZ DANYCH"
        // await todo.update();

        // console.log(await TodoRecord.findAll())

        // await todo.delete('61dca4d5d34536525727b20b')

        //FOR AWAIT METHOD

        for await (const todo of await TodoRecord.findAllWithCoursor()) {
            const record = new TodoRecord(todo)
            record.title += ' [updated]'
            await record.update()
            console.log(new TodoRecord(todo))
        }

        console.log(await TodoRecord.findAll())


    } finally {
        await client.close();
    }


})();
