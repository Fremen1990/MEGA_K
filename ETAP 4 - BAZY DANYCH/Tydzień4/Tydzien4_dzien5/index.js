const {MongoClient, ObjectId} = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017',);


(async () => {

    await client.connect();

    console.log('DB connected!')

    const db = await client.db('megak_music');

    // const songs = await db.collection('songs');

    // const foundSongs=songs.find();

    // for await (const song of db.collection('songs').find()) {
    //     console.log(song)
    // }

    // await  console.log(await foundSongs.count())
    // await  console.log(await foundSongs.next())
    // await  console.log(await foundSongs.hasNext())
    // await  console.log(await foundSongs.toArray())

    const oneSong = await db.collection('songs').findOne({_id: ObjectId('61d8d25254cbef933d44d370')});

    console.log(oneSong)

    // const updateSong = await db.collection('songs').updateOne({_id: ObjectId('61d8d25254cbef933d44d370')}, { $set:{length:500}});
    //
    // console.log(await updateSong)





    await client.close()

})();


