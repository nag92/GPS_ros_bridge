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
    msg.accel.vector.x = 5.0 
    msg.longitude = 5.0
    msg.latitude = 5.0
 
    
   
    msg.header.frame_id = "potato"
    
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