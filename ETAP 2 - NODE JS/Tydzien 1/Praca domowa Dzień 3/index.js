
//
// Istnieje moduł DNS, który służy m.in. do operacji związanych z serwerami nazw.z
//
// istnieje w nim funkcja dns.lookup(host), która jest asynchroniczna.
//
// Spróbuj sprawdzić dzkeiki temu jaki jest adres IP hosta google.com
//
//  - Wykonaj zadnie na callbackack.
// -  Następnie wykorzystaj util.promisify()
// - Na końcu spróbuj wykorzystać specjalną wersję dostępna w dns.promises i async/await.


const dns = require('dns');

// dns.lookup("google.com", (err, data)=>{
//     if(err!==null){
//         console.log("błąd funkcji")
//     } else if(!err){
//         console.log(data)
//     }
// })

//--------------------------------------------------------

// const {promisify} = require('util')
// const readFilePromised= promisify(dns.lookup)
//
// readFilePromised("google.com")
//     .then(data=>{
//     console.log(data)
// })
//     .catch(err=>{
//     console.log("bład", err)
// })


// ------------------------------------

const dnsPromises = dns.promises;

dnsPromises.lookup("google.com").then((result)=>{
    console.log("Adress: ", result.address, "Family: ", result.family);
})