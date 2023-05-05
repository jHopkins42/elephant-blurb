const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');
const auth = require('../../middleware/auth');

router.use('/users', userRoutes);
router.use('/blogs', auth, blogRoutes);
router.use('/comments', auth, commentRoutes);

//font imports
{/* <style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap');
</style>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap" rel="stylesheet">

</link>
; */}

module.exports = router;
