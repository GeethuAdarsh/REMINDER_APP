const mongoose = require('mongoose');

exports.Reminder = mongoose.model('Reminder' , {
    subject:String,
    description:String,
    start_date:String, 
    start_time:String,
    end_date:String, 
    end_time:String
   
});