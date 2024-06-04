#!/bin/bash
set -e

# Set ROS1 master URI (example: http://localhost:11311)
export ROS_MASTER_URI=http://localhost:11311

# Source ROS1 setup file
source /opt/ros/noetic/setup.bash

# Source ROS2 setup file
source /opt/ros/humble/setup.bash

# Execute the passed command
exec "$@"