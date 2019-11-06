module.exports.home = (req,res,next)=>{
    var paths = ['images/01.jpg','images/02.jpg','images/updated03.jpg','images/04.jpg','images/05.jpg'];
    res.render('index',{imgs: paths, layout:false});
};
