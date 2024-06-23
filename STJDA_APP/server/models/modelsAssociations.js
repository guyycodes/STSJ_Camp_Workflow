
  var BGTargets = require('./BGTargets');
  var Camper = require('./Camper');
  var CamperAssignedVolunteers = require('./CamperAssignedVolunteers');
  var CamperCamps = require('./CamperCamps');
  var Camps = require('./Camps');
  var CarbIntake = require('./CarbIntake');
  var CareData = require('./CareData');
  var InsulinCarbRatios = require('./InsulinCarbRatios');
  var LongActingInsulin = require('./LongActingInsulin');
  var OriginsData = require('./OriginsData');
  var RapidActingInsulin = require('./RapidActingInsulin');
  var SpecialNeed = require('./SpecialNeed');
  var Volunteers = require('./Volunteers');

  CamperAssignedVolunteers.belongsTo(Camper, { as: "Camper", foreignKey: "CamperID"});
  Camper.hasMany(CamperAssignedVolunteers, { as: "CamperAssignedVolunteers", foreignKey: "CamperID"});
  CamperCamps.belongsTo(Camper, { as: "Camper", foreignKey: "CamperID"});
  Camper.hasMany(CamperCamps, { as: "CamperCamps", foreignKey: "CamperID"});
  CareData.belongsTo(Camper, { as: "Camper_Camper", foreignKey: "CamperID"});
  Camper.hasOne(CareData, { as: "Camper_CareDatum", foreignKey: "CamperID"});
  OriginsData.belongsTo(Camper, { as: "Camper_Camper", foreignKey: "CamperID"});
  Camper.hasOne(OriginsData, { as: "OriginsDatum", foreignKey: "CamperID"});
  CamperCamps.belongsTo(Camps, { as: "Camp", foreignKey: "CampID"});
  Camps.hasMany(CamperCamps, { as: "CamperCamps", foreignKey: "CampID"});
  BGTargets.belongsTo(CareData, { as: "CareDatum", foreignKey: "CareDataID"});
  CareData.hasOne(BGTargets, { as: "BGTarget", foreignKey: "CareDataID"});
  Camper.belongsTo(CareData, { as: "CareDatum", foreignKey: "CareDataID"});
  CareData.hasOne(Camper, { as: "Camper", foreignKey: "CareDataID"});
  CarbIntake.belongsTo(CareData, { as: "CareDatum", foreignKey: "CareDataID"});
  CareData.hasOne(CarbIntake, { as: "CarbIntake", foreignKey: "CareDataID"});
  InsulinCarbRatios.belongsTo(CareData, { as: "CareDatum", foreignKey: "CareDataID"});
  CareData.hasOne(InsulinCarbRatios, { as: "InsulinCarbRatio", foreignKey: "CareDataID"});
  LongActingInsulin.belongsTo(CareData, { as: "CareDatum", foreignKey: "CareDataID"});
  CareData.hasOne(LongActingInsulin, { as: "LongActingInsulin", foreignKey: "CareDataID"});
  RapidActingInsulin.belongsTo(CareData, { as: "CareDatum", foreignKey: "CareDataID"});
  CareData.hasOne(RapidActingInsulin, { as: "RapidActingInsulin", foreignKey: "CareDataID"});
  SpecialNeed.belongsTo(CareData, { as: "CareDatum", foreignKey: "CareDataID"});
  CareData.hasOne(SpecialNeed, { as: "SpecialNeed", foreignKey: "CareDataID"});
  Camper.belongsTo(OriginsData, { as: "Origin", foreignKey: "OriginsID"});
  OriginsData.hasOne(Camper, { as: "Camper", foreignKey: "OriginsID"});
  CamperAssignedVolunteers.belongsTo(Volunteers, { as: "Volunteer", foreignKey: "VolunteerID"});
  Volunteers.hasMany(CamperAssignedVolunteers, { as: "CamperAssignedVolunteers", foreignKey: "VolunteerID"});


module.exports = {    
  BGTargets,
  Camper,
  CamperAssignedVolunteers,
  CamperCamps,
  Camps,
  CarbIntake,
  CareData,
  InsulinCarbRatios,
  LongActingInsulin,
  OriginsData,
  RapidActingInsulin,
  SpecialNeed,
  Volunteers,
};

