const mysql = require('mysql2/promise');

(async () => {

    //create the connection to DB
    const pool = await mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'megakurs',
        decimalNumbers: true,
        namedPlaceholders: true,
    })
    // console.log(con)
    const [yards] = await pool.execute('SELECT * FROM `yards` ')
    // console.log(yards);

    const regNo = "EZD PC22"
    const value = 10000;

    const [car] = await pool.execute('SELECT * FROM `cars` WHERE `registrationNo` ="' + regNo + '";')
    // console.log(car);

    const [car2] = await pool.execute('SELECT * FROM `cars` WHERE `registrationNo` =?;', [regNo]);
    // console.log(car2);

    const {affectedRows} = (
        await pool.execute(
            'UPDATE `cars` SET `price` = `price` + :myValue WHERE `price` > :myValue',
            {myValue: value,}
        ))
        [0];
    console.log(affectedRows)


    const cars = [
        {
            registrationNo: 'EDB 44325',
            brand: 'Opel',
            model: 'Astra F',
            color: 'Purple',
            firstRegistrationAt: '1993-10-31',
            price: 1500,
        },
        {
            registrationNo: 'LDZ',
            brand: 'BMW',
            model: 'E36',
            color: 'Black',
            firstRegistrationAt: '1995-05-25',
            price: 10000,
        },
        {
            registrationNo: 'DDD 556644',
            brand: 'Toyota',
            model: 'Avensis',
            color: 'White',
            firstRegistrationAt: '2005-10-05',
            price: 15000,
        },
    ]


    const statement = await pool.prepare('INSERT INTO `cars` VALUES(?,?,?,?,?,?)')
    try {
        for (const car of cars) {
            await statement.execute(Object.values(car))
        }
        console.log("it's alive!!")
    } finally {
        statement.close();
    }


    await pool.end();
})();



