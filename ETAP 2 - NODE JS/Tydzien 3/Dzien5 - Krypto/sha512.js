const {createHmac} = require('crypto');

const salt = 'uv etvui dgvui gvdi egvi igv jveg jveievjivut4vw7 b4g54o4v2b4b2bo2y82ob4byrv2ovytvybeobety' +
    ' vb4yuovbby8vby8 486 5738 iiuvbt83vrv73387473b8fv8274db27d2873db872dbebc8ycwb848 c   28 4c82 8c4';

const hash = createHmac('sha512', salt)
    .update("Hello World from Thomas!! :)")
    .digest('hex');

console.log(hash);

