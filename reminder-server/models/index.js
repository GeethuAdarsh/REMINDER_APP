const mongoose = require('mongoose');
const { Reminder }=require('./reminder')

mongoose.connect('mongodb://localhost:27017/reminder_list',{useNewUrlParser:true});

module.exports = {
    Reminder
}