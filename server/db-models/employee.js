/*
============================================
; Title: NodeBucket
; Author: R. Krasso
; Date: 12-02-20
; Modified By: Becca Buechle
; Description: Node Bucket employee management app
;===========================================
*/

//requires
const mongoose = require ('mongoose');
const Item = require('./item')

//creating the employee schema
let employeeSchema = mongoose.Schema({
  empId:      {type: String, unique: true, dropDups: true},
  firstname:  {type: String},
  lastname:   {type: String},
  todo: [Item],
  done: [Item]
});

module.exports = mongoose.model('Employee', employeeSchema);
