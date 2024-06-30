#!/usr/bin/env python3


import rospy
from std_msgs.msg import String
from gps_reader.msg import LoggerBox
from datetime import datetime
from datetime import timezone
import time


keys = [ "rtcDate", "rtcTime", "ax", "ay", "az", "gx", "gy", "gz", "mx", "my", "mz", \
         "imu_degC", "gps_Date", "gps_Time", "gps_Lat", "gps_Long", "gps_Alt", "gps_SIV", \
         "gps_FixType", "gps_GroundSpeed", "gps_Heading", "gps_pDOP", "output_Hz"  ]

def talker():
    pub = rospy.Publisher('GPS1/chatter', String, queue_size=10)
    pub_gps = rospy.Publisher('GPS1/gps', LoggerBox, queue_size=10)
    rospy.init_node('talker', anonymous=True)
    rate = rospy.Rate(10) # 10hz
    while not rospy.is_shutdown():
        
        msg = make_msg()
        pub_gps.publish(msg)
        hello_str = "hello world %s" % rospy.get_time()
        rospy.loginfo(hello_str)
        pub.publish(hello_str)
        rate.sleep()



def make_msg():
    
    msg = LoggerBox()
    # msg.accel.vector.x = float(data_arr["ax"])
    # msg.accel.vector.y = float(data_arr["ay"])
    # msg.accel.vector.z = float(data_arr["az"])
    
    # msg.gyro.vector.x = float(data_arr["gx"])
    # msg.gyro.vector.y = float(data_arr["gy"])
    # msg.gyro.vector.z = float(data_arr["gz"])
    
    # msg.mag.vector.x = float(data_arr["mx"])
    # msg.mag.vector.y = float(data_arr["my"])
    # msg.mag.vector.z = float(data_arr["mz"])
    
    # msg.longitude = float(data_arr["gps_Long"])
    # msg.latitude = float(data_arr["gps_Lat"])
    # msg.altitude = float(data_arr["gps_Alt"])
    # msg.heading = float(data_arr["gps_Heading"])
    # msg.ground_speed = float(data_arr["gps_GroundSpeed"])
    
    # msg.fixtype = float(data_arr["gps_FixType"])
    # msg.pdop = float(data_arr["gps_pDOP"])
    # msg.hz = float(data_arr["output_Hz"])
    # msg.imudegc = float(data_arr["imu_degC"])
    # msg.siv = float(data_arr["gps_SIV"])
    
    
   
    msg.header.frame_id = "hello"
    
    # print(gps_date_str)
    # print(gps_date)
    # print(msg.gps_time.data)
    
    # dt_object = datetime.fromtimestamp(gps_date)
    # print(dt_object)
    return msg



    
if __name__ == '__main__':
    try:
        talker()
    except rospy.ROSInterruptException:
        pass