/*
============================================
; Title: NodeBucket
; Author: R. Krasso
; Date: 12-07-20
; Modified By: Becca Buechle
; Description: Node Bucket employee management app
;===========================================
*/


const mongoose = require('mongoose');

//item schema 
let itemSchema = mongoose.Schema({
  text: {type: String}
});

module.exports = itemSchema;