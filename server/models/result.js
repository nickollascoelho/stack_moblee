/*
 * server/models/result.js
 */

'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ResultSchema = new Schema({
    last_update: Number
});

ResultSchema.pre('save', function(next) {
  console.log('pre save');
  this.last_update = Date.now();
  next();
});

module.exports = mongoose.model('Result', ResultSchema);
