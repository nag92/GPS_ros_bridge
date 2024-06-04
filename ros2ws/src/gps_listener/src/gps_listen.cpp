#include <memory>

#include "rclcpp/rclcpp.hpp"
#include "std_msgs/msg/string.hpp"
using std::placeholders::_1;

#include "gps_reader2/msg/logger_box.hpp"

class MinimalSubscriber : public rclcpp::Node
{
  public:
    MinimalSubscriber(): Node("minimal_subscriber")
    {
      subscription_ = this->create_subscription<std_msgs::msg::String>(
      "/GPS1/chatter", 10, std::bind(&MinimalSubscriber::topic_callback, this, _1));
      
      
      subscriptionGPS_ = this->create_subscription<gps_reader2::msg::LoggerBox>(
      "/GPS1/GPS", 10, std::bind(&MinimalSubscriber::GPS_callback, this, _1));

    }



  private:
    void topic_callback(const std_msgs::msg::String::SharedPtr msg) const
    {
      RCLCPP_INFO(this->get_logger(), "I heard: '%s'", msg->data.c_str());
    }

    void GPS_callback(const gps_reader2::msg::LoggerBox::SharedPtr msg) const
    {
      RCLCPP_INFO(this->get_logger(), "I heard: '%0.6f'", msg->latitude);
    }

    rclcpp::Subscription<std_msgs::msg::String>::SharedPtr subscription_;
    rclcpp::Subscription<gps_reader2::msg::LoggerBox>::SharedPtr subscriptionGPS_;

    
};

int main(int argc, char * argv[])
{
  rclcpp::init(argc, argv);
  rclcpp::spin(std::make_shared<MinimalSubscriber>());
  rclcpp::shutdown();
  return 0;
}