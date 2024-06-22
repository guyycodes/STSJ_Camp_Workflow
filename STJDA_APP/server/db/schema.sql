DROP DATABASE IF EXISTS STJDA;
CREATE DATABASE STJDA;
USE STJDA;

CREATE TABLE Camper (
    ID VARCHAR(255) PRIMARY KEY,
    Photo TEXT,
    Email VARCHAR(255),
    Password VARCHAR(255),
    Notes TEXT,
    CareDataID VARCHAR(255) UNIQUE,
    OriginsID INT UNIQUE
);

CREATE TABLE CareData (
    ID VARCHAR(255) PRIMARY KEY,
    CamperID VARCHAR(255) UNIQUE,
    CareType VARCHAR(255),
    LastKnownBG INT,
    LastKnownBGTimestamp DATETIME,
    CorrectionFactor VARCHAR(255),
    MDI BOOLEAN,
    CGM VARCHAR(255),
    InsulinPump BOOLEAN,
    InsulinPumpModel VARCHAR(255),
    DoctorName VARCHAR(255),
    DoctorEmail VARCHAR(255),
    DoctorPhone VARCHAR(255),
    Allergies VARCHAR(255),
    EmergencyContact VARCHAR(255),
    FOREIGN KEY (CamperID) REFERENCES Camper(ID)
);

CREATE TABLE OriginsData (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    CamperID VARCHAR(255) UNIQUE,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Gender VARCHAR(255),
    Age INT,
    Mother VARCHAR(255),
    Father VARCHAR(255),
    FOREIGN KEY (CamperID) REFERENCES Camper(ID)
);

-- Add foreign keys to Camper table after creating CareData and OriginsData
ALTER TABLE Camper ADD FOREIGN KEY (CareDataID) REFERENCES CareData(ID);
ALTER TABLE Camper ADD FOREIGN KEY (OriginsID) REFERENCES OriginsData(ID);

CREATE TABLE Volunteers (
    ID VARCHAR(255) PRIMARY KEY,
    Photo TEXT,
    Email VARCHAR(100),
    Password VARCHAR(255),
    VolunteerType VARCHAR(255),
    FirstName VARCHAR(255),
    LastName VARCHAR(255)
);

CREATE TABLE CamperAssignedVolunteers (
    CamperID VARCHAR(255),
    VolunteerID VARCHAR(255),
    PK INT AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY (CamperID) REFERENCES Camper(ID),
    FOREIGN KEY (VolunteerID) REFERENCES Volunteers(ID)
);

CREATE TABLE Camps (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    Description VARCHAR(255)
);

CREATE TABLE CamperCamps (
    CamperID VARCHAR(255),
    CampID INT,
    FOREIGN KEY (CamperID) REFERENCES Camper(ID),
    FOREIGN KEY (CampID) REFERENCES Camps(ID)
);

CREATE TABLE BGTargets (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    CareDataID VARCHAR(255) UNIQUE,
    TimeLabel VARCHAR(50),
    BGTargetBreakfast VARCHAR(50),
    BGTargetLunch VARCHAR(50),
    BGTargetDinner VARCHAR(50),
    BGTargetOther VARCHAR(50),
    FOREIGN KEY (CareDataID) REFERENCES CareData(ID)
);

CREATE TABLE InsulinCarbRatios (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    CareDataID VARCHAR(255) UNIQUE,
    TimeLabel VARCHAR(50),
    RatioBreakfast VARCHAR(50),
    RatioLunch VARCHAR(50),
    RatioDinner VARCHAR(50),
    FOREIGN KEY (CareDataID) REFERENCES CareData(ID)
);

CREATE TABLE CarbIntake (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    CareDataID VARCHAR(255) UNIQUE,
    DateTaken DATE,
    TimeLabel VARCHAR(50),
    CarbAmount INT,
    FOREIGN KEY (CareDataID) REFERENCES CareData(ID)
);

CREATE TABLE LongActingInsulin (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    CareDataID VARCHAR(255) UNIQUE,
    Dosage INT,
    LastAdministered TIMESTAMP,
    LastAdministeredDosage VARCHAR(255),
    FOREIGN KEY (CareDataID) REFERENCES CareData(ID)
);

CREATE TABLE RapidActingInsulin (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    CareDataID VARCHAR(255) UNIQUE,
    Dosage INT,
    LastAdministered TIMESTAMP,
    LastAdministeredDosage VARCHAR(255),
    FOREIGN KEY (CareDataID) REFERENCES CareData(ID)
);

CREATE TABLE SpecialNeed (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    CareDataID VARCHAR(255) UNIQUE,
    SpecialNeedType INT,
    Notes TEXT,
    SpecialNeedInstructions VARCHAR(255),
    FOREIGN KEY (CareDataID) REFERENCES CareData(ID)
);
