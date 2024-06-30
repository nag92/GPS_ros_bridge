
(cl:in-package :asdf)

(defsystem "gps_reader-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils :geometry_msgs-msg
               :std_msgs-msg
)
  :components ((:file "_package")
    (:file "LoggerBox" :depends-on ("_package_LoggerBox"))
    (:file "_package_LoggerBox" :depends-on ("_package"))
  ))