const mysql = require('mysql2/promise');

(async () => {
//create the connnection to DB
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'megakurs',
    })

    // console.log(connection)

    // const [query] = await connection.execute('SELECT * FROM `cars`');

    // console.log(query)

    const [bmwQ5] = await connection.execute('SELECT * FROM `cars` WHERE `registrationNo` = "LDZ33055"')

    console.log(bmwQ5)

    const {affectedRows} = (await connection.execute('UPDATE `cars` SET `price` = `price` + 100000 WHERE' +
        ' `registrationNo` = "LDZ33055"'))[0]

    console.log(`Affected rows: ${affectedRows}`)


    const insertCar = await connection.execute('INSERT INTO `cars` VALUES("EZD PC22", "Honda", "CB900 Hornet",' +
        ' "Black", "2020-01-01", 500000) ')

    console.log(insertCar)

    await connection.end();
})();
