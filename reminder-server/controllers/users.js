const models = require('../models');

exports.reminders = (req,res)=>
{    //var date1=req.body.end_date.getFullYear();
    const newReminder = new models.Reminder({
        subject:req.body.subject,
        description:req.body.description,
        start_date:req.body.start_date, 
        start_time:req.body.start_time,
        end_date:req.body.end_date,
        end_time:req.body.end_time
    })
    newReminder.save();
    return res.status(200).json(newReminder);
}
exports.showReminder=(req,res)=>
{   const page =parseInt(req.query.page);
    const limit =parseInt(req.query.limit);
    const skip = (page*limit);
    const query = {
        $or :[
            {subject:new RegExp ("^"+req.query.search, "i")},
            {description:new RegExp (req.query.search, "i")},
            {start_date:new RegExp (req.query.search, "i")},
            {start_time:new RegExp (req.query.search, "i")},
            {end_date:new RegExp (req.query.search, "i")},
            {end_time:new RegExp (req.query.search, "i")} 
        ] };
        let count = 0;
        models.Reminder.count(query)
        .then(c=>{
            count=c;
             return models.Reminder.find(query)
             .limit(limit)   
             .skip(skip)
             .sort({
                start_date:'asc'
              })
          })
             .then(user=>
             {
              
              return res.status(200).json({total : count , data : user});
             
  
        });
}
exports.updateReminder=(req,res)=>
{
    return models.Reminder.findOne({
        _id:req.params.id
    })
    .then(rem=>
        {
            rem.subject=req.body.subject,
            rem.description=req.body.description,
            rem.start_date=req.body.start_date, 
            rem.start_time=req.body.start_time,
            rem.end_date=req.body.end_date,
            rem.end_time=req.body.end_time
         rem.save();
         
        return res.status(200).json({message:"Enquiry updated successfully"});
        })
}