const mysql = require('mysql2/promise');

(async () => {

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'megakurs_courses',
        decimalNumbers: true,
        namedPlaceholders: true,
    })

    // const [cars] = await connection.execute('SELECT * FROM `cars`')
    // console.log(cars)

    const [courses] = await connection.execute('SELECT * FROM `courses`')
    // console.log(courses)

    const newCourses = [
        {
            name: 'Kurs Reacta',
            startedAt: '2019-06-15',
        },
        {
            name: 'PluralSight NODE PATH',
            startedAt: '2021-10-15',
        },
        {
            name: 'PluralSight JavaScript PATH',
            startedAt: '2021-12-15',
        },
    ];

    // const statement = await connection.prepare('INSERT INTO `courses` VALUES(?,?)')
    // try {
    //     for (const newCourse of newCourses) {
    //         await statement.execute(Object.values(newCourse));
    //     }
    //     console.log("courses added!")
    //
    // } finally {
    //     statement.close();
    // }

    const adult = 18;

    const [students] = await connection.execute('SELECT `students`.`id` AS "ID", `students`.`firstName` AS "NAME", `students`.`lastName` AS "SURENAME", `students`.`age` AS "AGE", `courses`.`name` AS "COURSE_NAME"  FROM `students` LEFT JOIN  `students_courses` ON `students`.`id` = `students_courses`.`studentId` LEFT JOIN `courses` ON `courses`.`name` = `students_courses`.`courseName` WHERE `students`.`age` >= :isAdult;', { isAdult: adult })



    // console.log(students)

    // const deletedStudents = await connection.execute('DELETE FROM `students` WHERE `age` < :isAdult', { isAdult: adult });

    // console.log(deletedStudents)


    const newStudents = [
        {
            id: "nowy999",
            firstName: "Zygmunt666",
            lastName: "Staszic666",
            age: "100",
            addressStreet: "Legendarna 44",
            createdAt: "",
        },
        {
            id: 532452,
            firstName: "Kazimierz",
            lastName: "Wielki",
            age: "211",
            addressStreet: "Zaglobowo",
            createdAt: "",
        },
        {
            id: 574535,
            firstName: "Dariusz",
            lastName: "Michalczewski",
            age: "50",
            addressStreet: "lej w morde 22",
            createdAt: "",
        },
    ]


    const { id, firstName, lastName, age, addressStreet, createdAt } = newStudents[0]

    // console.log(id, firstName, lastName, age, addressStreet, createdAt)

    const addNewStudent = await connection.execute('INSERT INTO `students` VALUES(:id, :firstName, :lastName, :age, :addressStreet, :createdAt)', { id, firstName, lastName, age, addressStreet, createdAt })

    // const newStudentStatement = await connection.prepare('INSERT INTO `students` VALUES(?,?,?,?,?,?)');
    // try {
    //     for (const newStudent of newStudents) {
    //         await newStudentStatement.execute(Object.values(newStudent))
    //     }
    // } finally {
    //     newStudentStatement.close();
    // }


    connection.close();

})();
