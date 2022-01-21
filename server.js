'use strict';
const forzaPort = process.env.PORT || 443;
const HOST = location.host;

const dgram = require("dgram");
const udpserver = dgram.createSocket("udp4");

const express = require('express');
const {Server} = require('ws');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
    .use((req, res) => res.sendFile(INDEX, {root: __dirname}))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({server});

var data = "test";

let forza_data = [
    {

        isRaceOn: false,
        TimestampMs: 0,
        EngineMaxRpm: 0,
        EngineIdleRpm: 0,
        CurrentEngineRpm: 0,
        AccelerationX: 0,
        AccelerationY: 0,
        AccelerationZ: 0,
        VelocityX: 0,
        VelocityY: 0,
        VelocityZ: 0,
        AngularVelocityX: 0,
        AngularVelocityY: 0,
        AngularVelocityZ: 0,
        Yaw: 0,
        Pitch: 0,
        Roll: 0,
        NormSuspensionTravelFl: 0,
        NormSuspensionTravelFr: 0,
        NormSuspensionTravelRl: 0,
        NormSuspensionTravelRr: 0,
        TireSlipRatioFl: 0,
        TireSlipRatioFr: 0,
        TireSlipRatioRl: 0,
        TireSlipRatioRr: 0,
        WheelRotationSpeedFl: 0,
        WheelRotationSpeedFr: 0,
        WheelRotationSpeedRl: 0,
        WheelRotationSpeedRr: 0,
        WheelOnRumbleStripFl: 0,
        WheelOnRumbleStripFr: 0,
        WheelOnRumbleStripRl: 0,
        WheelOnRumbleStripRr: 0,
        WheelInPuddleFl: 0,
        WheelInPuddleFr: 0,
        WheelInPuddleRl: 0,
        WheelInPuddleRr: 0,
        SurfaceRumbleFl: 0,
        SurfaceRumbleFr: 0,
        SurfaceRumbleRl: 0,
        SurfaceRumbleRr: 0,
        TireSlipAngleFl: 0,
        TireSlipAngleFr: 0,
        TireSlipAngleRl: 0,
        TireSlipAngleRr: 0,
        TireCombinedSlipFl: 0,
        TireCombinedSlipFr: 0,
        TireCombinedSlipRl: 0,
        TireCombinedSlipRr: 0,
        SuspensionTravelMetersFl: 0,
        SuspensionTravelMetersFr: 0,
        SuspensionTravelMetersRl: 0,
        SuspensionTravelMetersRr: 0,
        CarOrdinal: 0,
        CarClass: 0,
        CarPerformanceIndex: 0,
        DriveTrain: 0,
        NumCylinders: 0,

        PositionX: 0,
        PositionY: 0,
        PositionZ: 0,
        Speed: 0,
        Power: 0,
        Torque: 0,
        TireTempFl: 0,
        TireTempFr: 0,
        TireTempRl: 0,
        TireTempRr: 0,
        Boost: 0,
        Fuel: 0,
        Distance: 0,
        BestLapTime: 0,
        LastLapTime: 0,
        CurrentLapTime: 0,
        CurrentRaceTime: 0,
        Lap: 0,
        RacePosition: 0,
        Accelerator: 0,
        Brake: 0,
        Clutch: 0,
        Handbrake: 0,
        Gear: 0,
        Steer: 0,
        NormalDrivingLine: 0,
        NormalAiBrakeDifference: 0,
    },
];


function dataParser(message) {
    forza_data[0].isRaceOn = !!message.readInt32LE(0);
    forza_data[0].TimestampMs = message.readUInt32LE(4);
    forza_data[0].EngineMaxRpm = message.readFloatLE(8);
    forza_data[0].EngineIdleRpm = message.readFloatLE(12);
    forza_data[0].CurrentEngineRpm = message.readFloatLE(16);
    forza_data[0].AccelerationX = message.readFloatLE(20);
    forza_data[0].AccelerationY = message.readFloatLE(24);
    forza_data[0].AccelerationZ = message.readFloatLE(28);
    forza_data[0].VelocityX = message.readFloatLE(32);
    forza_data[0].VelocityY = message.readFloatLE(36);
    forza_data[0].VelocityZ = message.readFloatLE(40);
    forza_data[0].AngularVelocityX = message.readFloatLE(44);
    forza_data[0].AngularVelocityY = message.readFloatLE(48);
    forza_data[0].AngularVelocityZ = message.readFloatLE(52);
    forza_data[0].Yaw = message.readFloatLE(56);
    forza_data[0].Pitch = message.readFloatLE(60);
    forza_data[0].Roll = message.readFloatLE(64);
    forza_data[0].NormSuspensionTravelFl = message.readFloatLE(68);
    forza_data[0].NormSuspensionTravelFr = message.readFloatLE(72);
    forza_data[0].NormSuspensionTravelRl = message.readFloatLE(76);
    forza_data[0].NormSuspensionTravelRr = message.readFloatLE(80);
    forza_data[0].TireSlipRatioFl = message.readFloatLE(84);
    forza_data[0].TireSlipRatioFr = message.readFloatLE(88);
    forza_data[0].TireSlipRatioRl = message.readFloatLE(92);
    forza_data[0].TireSlipRatioRr = message.readFloatLE(96);
    forza_data[0].WheelRotationSpeedFl = message.readFloatLE(100);
    forza_data[0].WheelRotationSpeedFr = message.readFloatLE(104);
    forza_data[0].WheelRotationSpeedRl = message.readFloatLE(108);
    forza_data[0].WheelRotationSpeedRr = message.readFloatLE(112);
    forza_data[0].WheelOnRumbleStripFl = message.readFloatLE(116);
    forza_data[0].WheelOnRumbleStripFr = message.readFloatLE(120);
    forza_data[0].WheelOnRumbleStripRl = message.readFloatLE(124);
    forza_data[0].WheelOnRumbleStripRr = message.readFloatLE(128);
    forza_data[0].WheelInPuddleFl = message.readFloatLE(132);
    forza_data[0].WheelInPuddleFr = message.readFloatLE(136);
    forza_data[0].WheelInPuddleRl = message.readFloatLE(140);
    forza_data[0].WheelInPuddleRr = message.readFloatLE(144);
    forza_data[0].SurfaceRumbleFl = message.readFloatLE(148);
    forza_data[0].SurfaceRumbleFr = message.readFloatLE(152);
    forza_data[0].SurfaceRumbleRl = message.readFloatLE(156);
    forza_data[0].SurfaceRumbleRr = message.readFloatLE(160);
    forza_data[0].TireSlipAngleFl = message.readFloatLE(164);
    forza_data[0].TireSlipAngleFr = message.readFloatLE(168);
    forza_data[0].TireSlipAngleRl = message.readFloatLE(172);
    forza_data[0].TireSlipAngleRr = message.readFloatLE(176);
    forza_data[0].TireCombinedSlipFl = message.readFloatLE(180);
    forza_data[0].TireCombinedSlipFr = message.readFloatLE(184);
    forza_data[0].TireCombinedSlipRl = message.readFloatLE(188);
    forza_data[0].TireCombinedSlipRr = message.readFloatLE(192);
    forza_data[0].SuspensionTravelMetersFl = message.readFloatLE(196);
    forza_data[0].SuspensionTravelMetersFr = message.readFloatLE(200);
    forza_data[0].SuspensionTravelMetersRl = message.readFloatLE(204);
    forza_data[0].SuspensionTravelMetersRr = message.readFloatLE(208);
    forza_data[0].CarOrdinal = message.readInt32LE(212);
    forza_data[0].CarClass = message.readInt32LE(216);
    forza_data[0].CarPerformanceIndex = message.readInt32LE(220);
    forza_data[0].DriveTrain = message.readInt32LE(224);
    forza_data[0].NumCylinders = message.readInt32LE(228);
    forza_data[0].CarCategory = message.readInt32LE(232);

    forza_data[0].PositionX = message.readFloatLE(244);
    forza_data[0].PositionY = message.readFloatLE(248);
    forza_data[0].PositionZ = message.readFloatLE(252);
    forza_data[0].Speed = message.readFloatLE(256);
    forza_data[0].Power = message.readFloatLE(260);
    forza_data[0].Torque = message.readFloatLE(264);
    forza_data[0].TireTempFl = message.readFloatLE(268);
    forza_data[0].TireTempFr = message.readFloatLE(272);
    forza_data[0].TireTempRl = message.readFloatLE(276);
    forza_data[0].TireTempRr = message.readFloatLE(280);
    forza_data[0].Boost = message.readFloatLE(284);
    forza_data[0].Fuel = message.readFloatLE(288);
    forza_data[0].Distance = message.readFloatLE(292);
    forza_data[0].BestLapTime = message.readFloatLE(300);
    forza_data[0].LastLapTime = message.readFloatLE(304);
    forza_data[0].CurrentLapTime = message.readFloatLE(308);
    forza_data[0].CurrentRaceTime = message.readFloatLE(312);
    forza_data[0].Lap = message.readUInt16LE(314);
    forza_data[0].RacePosition = message.readUInt8(315);
    forza_data[0].Accelerator = message.readUInt8(316);
    forza_data[0].Brake = message.readUInt8(317);
    forza_data[0].Clutch = message.readUInt8(318);
    forza_data[0].Handbrake = message.readUInt8(319);
    forza_data[0].Gear = message.readUInt8(320);
    forza_data[0].Steer = message.readUInt8(321);
    forza_data[0].NormalDrivingLine = message.readUInt8(322);
    forza_data[0].NormalAiBrakeDifference = message.readUInt8(323);
}


udpserver.on("message", function (message) {
    dataParser(message);
    data = ("Timestamp: " + (forza_data[0].TimestampMs) + "\nOrdinal: " + parseInt(forza_data[0].CarOrdinal));
       wss.clients.forEach((client) => {
    client.send(data);
       });
  });

udpserver.on("listening", function () {
    const address = udpserver.address();
    console.log(">  Listening on " + address.address + ":" + address.port);
});
udpserver.bind(forzaPort, HOST);

wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('close', () => console.log('Client disconnected'));
});

