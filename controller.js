module.exports.home = (req,res,next)=>{
    var paths = ['images/01.jpg','images/02.jpg','images/edited 03.jpg','images/04.jpg','images/05.jpg','images/code6.jpg','images/code4.jpg','images/code2.jpg','images/code7.jpg','images/dan1.jpg','images/dan2.jpg','images/soc1.jpg','images/soc2.jpg','images/sco3.jpg'];
    res.render('index',{imgs: paths, layout:false});
};
