const mongoose = require('mongoose');

const logsSchema = new mongoose.Schema({
    title:  { 
      type: String, required: true
    },
    entry:  { 
      type: String, required: false 
    },
    shipisbroken: {
        type: Boolean, default: true
    },
});

const Logs = mongoose.model('logs', logsSchema);

module.exports = Logs;