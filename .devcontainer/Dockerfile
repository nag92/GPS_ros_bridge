# Use an official Ubuntu Focal (20.04) base image
FROM ubuntu:focal


ENV DEBIAN_FRONTEND=noninteractive
# Install necessary tools and dependencies
RUN apt-get update && \
    apt-get install -y software-properties-common curl gnupg2 lsb-release  build-essential && \
    add-apt-repository universe

# Add ROS Noetic keys and repository
RUN sh -c 'echo "deb http://packages.ros.org/ros/ubuntu focal main" > /etc/apt/sources.list.d/ros1-latest.list' && \
    curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | apt-key add -

# Ensure the package lists are up to date and install ROS Noetic
RUN apt-get update && \
    apt-get -y install --no-install-recommends ros-noetic-desktop-full 

# Add ROS 2 Humble (or desired version) keys and repository
RUN sh -c 'echo "deb http://packages.ros.org/ros2/ubuntu focal main" > /etc/apt/sources.list.d/ros2-latest.list' && \
    curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | apt-key add -


# # Install ROS 2 Humble
RUN apt-get update && apt upgrade -y



RUN apt install -y ros-foxy-desktop
RUN apt install -y ros-foxy-ros1-bridge python3-argcomplete ros-dev-tools

RUN apt install -y python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool
RUN echo "export ROS_MASTER_URI=http://10.0.0.162:11311" >> /root/.bashrc



RUN apt-get update && apt-get install --no-install-recommends -y \
    build-essential \
    python3-rosdep \
    python3-rosinstall \
    python3-vcstools \
    python3-pip 
   

# # Set up the entrypoint
# COPY entrypoint.sh /entrypoint.sh
# RUN chmod +x /entrypoint.sh
# # ENTRYPOINT ["/entrypoint.sh"]

# # Set environment variables
# ENV ROS_MASTER_URI=http://localhost:11311
