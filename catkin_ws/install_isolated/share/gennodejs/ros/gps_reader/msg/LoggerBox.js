// Auto-generated. Do not edit!

// (in-package gps_reader.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let std_msgs = _finder('std_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class LoggerBox {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.accel = null;
      this.gyro = null;
      this.mag = null;
      this.latitude = null;
      this.longitude = null;
      this.altitude = null;
      this.heading = null;
      this.ground_speed = null;
      this.fixtype = null;
      this.imudegc = null;
      this.siv = null;
      this.pdop = null;
      this.hz = null;
      this.gpstime = null;
      this.rtctime = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('accel')) {
        this.accel = initObj.accel
      }
      else {
        this.accel = new geometry_msgs.msg.Vector3Stamped();
      }
      if (initObj.hasOwnProperty('gyro')) {
        this.gyro = initObj.gyro
      }
      else {
        this.gyro = new geometry_msgs.msg.Vector3Stamped();
      }
      if (initObj.hasOwnProperty('mag')) {
        this.mag = initObj.mag
      }
      else {
        this.mag = new geometry_msgs.msg.Vector3Stamped();
      }
      if (initObj.hasOwnProperty('latitude')) {
        this.latitude = initObj.latitude
      }
      else {
        this.latitude = 0.0;
      }
      if (initObj.hasOwnProperty('longitude')) {
        this.longitude = initObj.longitude
      }
      else {
        this.longitude = 0.0;
      }
      if (initObj.hasOwnProperty('altitude')) {
        this.altitude = initObj.altitude
      }
      else {
        this.altitude = 0.0;
      }
      if (initObj.hasOwnProperty('heading')) {
        this.heading = initObj.heading
      }
      else {
        this.heading = 0.0;
      }
      if (initObj.hasOwnProperty('ground_speed')) {
        this.ground_speed = initObj.ground_speed
      }
      else {
        this.ground_speed = 0.0;
      }
      if (initObj.hasOwnProperty('fixtype')) {
        this.fixtype = initObj.fixtype
      }
      else {
        this.fixtype = 0.0;
      }
      if (initObj.hasOwnProperty('imudegc')) {
        this.imudegc = initObj.imudegc
      }
      else {
        this.imudegc = 0.0;
      }
      if (initObj.hasOwnProperty('siv')) {
        this.siv = initObj.siv
      }
      else {
        this.siv = 0.0;
      }
      if (initObj.hasOwnProperty('pdop')) {
        this.pdop = initObj.pdop
      }
      else {
        this.pdop = 0.0;
      }
      if (initObj.hasOwnProperty('hz')) {
        this.hz = initObj.hz
      }
      else {
        this.hz = 0.0;
      }
      if (initObj.hasOwnProperty('gpstime')) {
        this.gpstime = initObj.gpstime
      }
      else {
        this.gpstime = {secs: 0, nsecs: 0};
      }
      if (initObj.hasOwnProperty('rtctime')) {
        this.rtctime = initObj.rtctime
      }
      else {
        this.rtctime = {secs: 0, nsecs: 0};
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type LoggerBox
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [accel]
    bufferOffset = geometry_msgs.msg.Vector3Stamped.serialize(obj.accel, buffer, bufferOffset);
    // Serialize message field [gyro]
    bufferOffset = geometry_msgs.msg.Vector3Stamped.serialize(obj.gyro, buffer, bufferOffset);
    // Serialize message field [mag]
    bufferOffset = geometry_msgs.msg.Vector3Stamped.serialize(obj.mag, buffer, bufferOffset);
    // Serialize message field [latitude]
    bufferOffset = _serializer.float64(obj.latitude, buffer, bufferOffset);
    // Serialize message field [longitude]
    bufferOffset = _serializer.float64(obj.longitude, buffer, bufferOffset);
    // Serialize message field [altitude]
    bufferOffset = _serializer.float64(obj.altitude, buffer, bufferOffset);
    // Serialize message field [heading]
    bufferOffset = _serializer.float64(obj.heading, buffer, bufferOffset);
    // Serialize message field [ground_speed]
    bufferOffset = _serializer.float64(obj.ground_speed, buffer, bufferOffset);
    // Serialize message field [fixtype]
    bufferOffset = _serializer.float64(obj.fixtype, buffer, bufferOffset);
    // Serialize message field [imudegc]
    bufferOffset = _serializer.float64(obj.imudegc, buffer, bufferOffset);
    // Serialize message field [siv]
    bufferOffset = _serializer.float64(obj.siv, buffer, bufferOffset);
    // Serialize message field [pdop]
    bufferOffset = _serializer.float64(obj.pdop, buffer, bufferOffset);
    // Serialize message field [hz]
    bufferOffset = _serializer.float64(obj.hz, buffer, bufferOffset);
    // Serialize message field [gpstime]
    bufferOffset = _serializer.time(obj.gpstime, buffer, bufferOffset);
    // Serialize message field [rtctime]
    bufferOffset = _serializer.time(obj.rtctime, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type LoggerBox
    let len;
    let data = new LoggerBox(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [accel]
    data.accel = geometry_msgs.msg.Vector3Stamped.deserialize(buffer, bufferOffset);
    // Deserialize message field [gyro]
    data.gyro = geometry_msgs.msg.Vector3Stamped.deserialize(buffer, bufferOffset);
    // Deserialize message field [mag]
    data.mag = geometry_msgs.msg.Vector3Stamped.deserialize(buffer, bufferOffset);
    // Deserialize message field [latitude]
    data.latitude = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [longitude]
    data.longitude = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [altitude]
    data.altitude = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [heading]
    data.heading = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [ground_speed]
    data.ground_speed = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [fixtype]
    data.fixtype = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [imudegc]
    data.imudegc = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [siv]
    data.siv = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [pdop]
    data.pdop = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [hz]
    data.hz = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [gpstime]
    data.gpstime = _deserializer.time(buffer, bufferOffset);
    // Deserialize message field [rtctime]
    data.rtctime = _deserializer.time(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    length += geometry_msgs.msg.Vector3Stamped.getMessageSize(object.accel);
    length += geometry_msgs.msg.Vector3Stamped.getMessageSize(object.gyro);
    length += geometry_msgs.msg.Vector3Stamped.getMessageSize(object.mag);
    return length + 96;
  }

  static datatype() {
    // Returns string type for a message object
    return 'gps_reader/LoggerBox';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e144fb7110cd01d9d8b2e105ffd94048';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    std_msgs/Header header
    geometry_msgs/Vector3Stamped accel
    geometry_msgs/Vector3Stamped gyro
    geometry_msgs/Vector3Stamped mag
    float64 latitude
    float64 longitude
    float64 altitude
    float64 heading
    float64 ground_speed
    float64 fixtype
    float64 imudegc
    float64 siv
    float64 pdop
    float64 hz
    time gpstime
    time rtctime
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    string frame_id
    
    ================================================================================
    MSG: geometry_msgs/Vector3Stamped
    # This represents a Vector3 with reference coordinate frame and timestamp
    Header header
    Vector3 vector
    
    ================================================================================
    MSG: geometry_msgs/Vector3
    # This represents a vector in free space. 
    # It is only meant to represent a direction. Therefore, it does not
    # make sense to apply a translation to it (e.g., when applying a 
    # generic rigid transformation to a Vector3, tf2 will only apply the
    # rotation). If you want your data to be translatable too, use the
    # geometry_msgs/Point message instead.
    
    float64 x
    float64 y
    float64 z
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new LoggerBox(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.accel !== undefined) {
      resolved.accel = geometry_msgs.msg.Vector3Stamped.Resolve(msg.accel)
    }
    else {
      resolved.accel = new geometry_msgs.msg.Vector3Stamped()
    }

    if (msg.gyro !== undefined) {
      resolved.gyro = geometry_msgs.msg.Vector3Stamped.Resolve(msg.gyro)
    }
    else {
      resolved.gyro = new geometry_msgs.msg.Vector3Stamped()
    }

    if (msg.mag !== undefined) {
      resolved.mag = geometry_msgs.msg.Vector3Stamped.Resolve(msg.mag)
    }
    else {
      resolved.mag = new geometry_msgs.msg.Vector3Stamped()
    }

    if (msg.latitude !== undefined) {
      resolved.latitude = msg.latitude;
    }
    else {
      resolved.latitude = 0.0
    }

    if (msg.longitude !== undefined) {
      resolved.longitude = msg.longitude;
    }
    else {
      resolved.longitude = 0.0
    }

    if (msg.altitude !== undefined) {
      resolved.altitude = msg.altitude;
    }
    else {
      resolved.altitude = 0.0
    }

    if (msg.heading !== undefined) {
      resolved.heading = msg.heading;
    }
    else {
      resolved.heading = 0.0
    }

    if (msg.ground_speed !== undefined) {
      resolved.ground_speed = msg.ground_speed;
    }
    else {
      resolved.ground_speed = 0.0
    }

    if (msg.fixtype !== undefined) {
      resolved.fixtype = msg.fixtype;
    }
    else {
      resolved.fixtype = 0.0
    }

    if (msg.imudegc !== undefined) {
      resolved.imudegc = msg.imudegc;
    }
    else {
      resolved.imudegc = 0.0
    }

    if (msg.siv !== undefined) {
      resolved.siv = msg.siv;
    }
    else {
      resolved.siv = 0.0
    }

    if (msg.pdop !== undefined) {
      resolved.pdop = msg.pdop;
    }
    else {
      resolved.pdop = 0.0
    }

    if (msg.hz !== undefined) {
      resolved.hz = msg.hz;
    }
    else {
      resolved.hz = 0.0
    }

    if (msg.gpstime !== undefined) {
      resolved.gpstime = msg.gpstime;
    }
    else {
      resolved.gpstime = {secs: 0, nsecs: 0}
    }

    if (msg.rtctime !== undefined) {
      resolved.rtctime = msg.rtctime;
    }
    else {
      resolved.rtctime = {secs: 0, nsecs: 0}
    }

    return resolved;
    }
};

module.exports = LoggerBox;
