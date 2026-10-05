import {View, TouchableOpacity, Text, Platform, PermissionsAndroid, Alert} from 'react-native';
import {useState, useEffect, useRef} from 'react';
import {Blemanager} from 'react-native-ble-plx';
import {Buffer} from 'buffer';

const SERVICE_UUID = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
const HARACTERISTIC_UUID = "beb5483e-36e1-4688-b7f5-ea07361b26a8";
const DEVICE_NAME = "ESP32-CAM-Robot";
const SEND_INTERVAL_MS = 150;


function toBase64(texto) {
    return Buffer.from(texto, utf-8).toString('base64');


}
export default function app(){ 

    const bleManagerRef = useRef(null);
    const connectedDeviceRef = useRef(null);
    const sendIntervalRef = useRef(null);
    const [connectionStatus, setConnectionStatus] = useState('Desconectado');
    const [activeDirection, setActiveDirection] = useState('stop');

    return(
        <View>

        </View>
    );

}