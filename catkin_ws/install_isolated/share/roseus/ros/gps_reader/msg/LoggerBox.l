;; Auto-generated. Do not edit!


(when (boundp 'gps_reader::LoggerBox)
  (if (not (find-package "GPS_READER"))
    (make-package "GPS_READER"))
  (shadow 'LoggerBox (find-package "GPS_READER")))
(unless (find-package "GPS_READER::LOGGERBOX")
  (make-package "GPS_READER::LOGGERBOX"))

(in-package "ROS")
;;//! \htmlinclude LoggerBox.msg.html
(if (not (find-package "GEOMETRY_MSGS"))
  (ros::roseus-add-msgs "geometry_msgs"))
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass gps_reader::LoggerBox
  :super ros::object
  :slots (_header _accel _gyro _mag _latitude _longitude _altitude _heading _ground_speed _fixtype _imudegc _siv _pdop _hz _gpstime _rtctime ))

(defmethod gps_reader::LoggerBox
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:accel __accel) (instance geometry_msgs::Vector3Stamped :init))
    ((:gyro __gyro) (instance geometry_msgs::Vector3Stamped :init))
    ((:mag __mag) (instance geometry_msgs::Vector3Stamped :init))
    ((:latitude __latitude) 0.0)
    ((:longitude __longitude) 0.0)
    ((:altitude __altitude) 0.0)
    ((:heading __heading) 0.0)
    ((:ground_speed __ground_speed) 0.0)
    ((:fixtype __fixtype) 0.0)
    ((:imudegc __imudegc) 0.0)
    ((:siv __siv) 0.0)
    ((:pdop __pdop) 0.0)
    ((:hz __hz) 0.0)
    ((:gpstime __gpstime) (instance ros::time :init))
    ((:rtctime __rtctime) (instance ros::time :init))
    )
   (send-super :init)
   (setq _header __header)
   (setq _accel __accel)
   (setq _gyro __gyro)
   (setq _mag __mag)
   (setq _latitude (float __latitude))
   (setq _longitude (float __longitude))
   (setq _altitude (float __altitude))
   (setq _heading (float __heading))
   (setq _ground_speed (float __ground_speed))
   (setq _fixtype (float __fixtype))
   (setq _imudegc (float __imudegc))
   (setq _siv (float __siv))
   (setq _pdop (float __pdop))
   (setq _hz (float __hz))
   (setq _gpstime __gpstime)
   (setq _rtctime __rtctime)
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:accel
   (&rest __accel)
   (if (keywordp (car __accel))
       (send* _accel __accel)
     (progn
       (if __accel (setq _accel (car __accel)))
       _accel)))
  (:gyro
   (&rest __gyro)
   (if (keywordp (car __gyro))
       (send* _gyro __gyro)
     (progn
       (if __gyro (setq _gyro (car __gyro)))
       _gyro)))
  (:mag
   (&rest __mag)
   (if (keywordp (car __mag))
       (send* _mag __mag)
     (progn
       (if __mag (setq _mag (car __mag)))
       _mag)))
  (:latitude
   (&optional __latitude)
   (if __latitude (setq _latitude __latitude)) _latitude)
  (:longitude
   (&optional __longitude)
   (if __longitude (setq _longitude __longitude)) _longitude)
  (:altitude
   (&optional __altitude)
   (if __altitude (setq _altitude __altitude)) _altitude)
  (:heading
   (&optional __heading)
   (if __heading (setq _heading __heading)) _heading)
  (:ground_speed
   (&optional __ground_speed)
   (if __ground_speed (setq _ground_speed __ground_speed)) _ground_speed)
  (:fixtype
   (&optional __fixtype)
   (if __fixtype (setq _fixtype __fixtype)) _fixtype)
  (:imudegc
   (&optional __imudegc)
   (if __imudegc (setq _imudegc __imudegc)) _imudegc)
  (:siv
   (&optional __siv)
   (if __siv (setq _siv __siv)) _siv)
  (:pdop
   (&optional __pdop)
   (if __pdop (setq _pdop __pdop)) _pdop)
  (:hz
   (&optional __hz)
   (if __hz (setq _hz __hz)) _hz)
  (:gpstime
   (&optional __gpstime)
   (if __gpstime (setq _gpstime __gpstime)) _gpstime)
  (:rtctime
   (&optional __rtctime)
   (if __rtctime (setq _rtctime __rtctime)) _rtctime)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; geometry_msgs/Vector3Stamped _accel
    (send _accel :serialization-length)
    ;; geometry_msgs/Vector3Stamped _gyro
    (send _gyro :serialization-length)
    ;; geometry_msgs/Vector3Stamped _mag
    (send _mag :serialization-length)
    ;; float64 _latitude
    8
    ;; float64 _longitude
    8
    ;; float64 _altitude
    8
    ;; float64 _heading
    8
    ;; float64 _ground_speed
    8
    ;; float64 _fixtype
    8
    ;; float64 _imudegc
    8
    ;; float64 _siv
    8
    ;; float64 _pdop
    8
    ;; float64 _hz
    8
    ;; time _gpstime
    8
    ;; time _rtctime
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; geometry_msgs/Vector3Stamped _accel
       (send _accel :serialize s)
     ;; geometry_msgs/Vector3Stamped _gyro
       (send _gyro :serialize s)
     ;; geometry_msgs/Vector3Stamped _mag
       (send _mag :serialize s)
     ;; float64 _latitude
       (sys::poke _latitude (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _longitude
       (sys::poke _longitude (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _altitude
       (sys::poke _altitude (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _heading
       (sys::poke _heading (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _ground_speed
       (sys::poke _ground_speed (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _fixtype
       (sys::poke _fixtype (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _imudegc
       (sys::poke _imudegc (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _siv
       (sys::poke _siv (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _pdop
       (sys::poke _pdop (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _hz
       (sys::poke _hz (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; time _gpstime
       (write-long (send _gpstime :sec) s) (write-long (send _gpstime :nsec) s)
     ;; time _rtctime
       (write-long (send _rtctime :sec) s) (write-long (send _rtctime :nsec) s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; geometry_msgs/Vector3Stamped _accel
     (send _accel :deserialize buf ptr-) (incf ptr- (send _accel :serialization-length))
   ;; geometry_msgs/Vector3Stamped _gyro
     (send _gyro :deserialize buf ptr-) (incf ptr- (send _gyro :serialization-length))
   ;; geometry_msgs/Vector3Stamped _mag
     (send _mag :deserialize buf ptr-) (incf ptr- (send _mag :serialization-length))
   ;; float64 _latitude
     (setq _latitude (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _longitude
     (setq _longitude (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _altitude
     (setq _altitude (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _heading
     (setq _heading (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _ground_speed
     (setq _ground_speed (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _fixtype
     (setq _fixtype (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _imudegc
     (setq _imudegc (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _siv
     (setq _siv (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _pdop
     (setq _pdop (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _hz
     (setq _hz (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; time _gpstime
     (send _gpstime :sec (sys::peek buf ptr- :integer)) (incf ptr- 4)  (send _gpstime :nsec (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; time _rtctime
     (send _rtctime :sec (sys::peek buf ptr- :integer)) (incf ptr- 4)  (send _rtctime :nsec (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get gps_reader::LoggerBox :md5sum-) "e144fb7110cd01d9d8b2e105ffd94048")
(setf (get gps_reader::LoggerBox :datatype-) "gps_reader/LoggerBox")
(setf (get gps_reader::LoggerBox :definition-)
      "std_msgs/Header header
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
")



(provide :gps_reader/LoggerBox "e144fb7110cd01d9d8b2e105ffd94048")


