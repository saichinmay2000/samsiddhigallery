module.exports.home = (req,res,next)=>{
    var paths = ['images/a.jpg','images/b.jpg','images/c.jpg'];
    res.render('index',{imgs: paths, layout:false});
};