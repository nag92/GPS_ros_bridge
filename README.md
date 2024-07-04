# Then ROS bridge for GPS stuff

## Overview
This package contains package in a Dockerfile and devcontainer to build out the messages to link that ROS1 messages of the GPS to ROS2. This package was build using information from: 



1. [custom messages example](https://github.com/lFatality/ros2_bridge_custom_interfaces)



2. [mapping](https://github.com/ros2/ros1_bridge/blob/master/doc/index.rst)


3. [weird time thing](https://github.com/ros2/ros1_bridge/issues/338)

4. [TYPE  Error](https://answers.ros.org/question/381026/attribute-error-type-object-type-has-no-attribute-_type_support/)



## HOW THE MAPPING WORKS


There are several components to making the BRIDGE work:

1. a ROS1 message
2. a matching ROS2 message
3. a yaml malling file (see bridge_mapping_rules.yaml)
4. building the bridge from source

All of these are needed to make the bridges work. 

## BUILDING

The order of building is **VERY** important. If the packags are built out of order then it will not work. The packages **MUST** be built in the following order, if the packags are built out of order then the messages will not be passed from ROS1 to ROS2. 

### STEP 1

In **TERMINAL 1**

```bash

cd catkine_ws
source /opt/ros/noetic/setup.bash
catkin_make_isolated --install

```

In **TERMINAL 2**

```bash

cd ros2ws
source /opt/ros/foxy/setup.bash
colcon build --symlink-install --packages-skip ros1_bridge
source install/setup.bash
ros2 interface list

```

**ENSURE THAT YOU CAN SEE**

```bash

gps_reader2/msg/LoggerBox
```


In **TERMINAL 3**

```bash

cd ros2ws
source /opt/ros/noetic/setup.bash
source /opt/ros/foxy/setup.bash
source  ../catkin_ws/devel/setup.bash
source install/setup.bash
ros2 interface list
```

**ENSURE THAT YOU CAN SEE**

```bash

gps_reader2/msg/LoggerBox
```


```bash
colcon build --symlink-install --packages-select ros1_bridge --cmake-force-configure
ros2 run ros1_bridge dynamic_bridge --print-pairs | grep gps

```


**ENSURE THAT YOU CAN SEE**

```bash

  - 'gps_reader2/msg/LoggerBox' (ROS 2) <=> 'gps_reader/LoggerBox' (ROS 1)
```


If you are are here then everything is good, at least the files are build correctly.


Additionaly, You will need to have a ROS2 node subscribed to any topics that you are bridging. so if you have a ROS1 node called ```GPS1/gps``` then you **MUST** have a ROS2 node that subscribs to ```GPS1/gps```




