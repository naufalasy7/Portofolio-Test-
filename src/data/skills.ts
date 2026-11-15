import type { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    icon: "solar:lightbulb-bolt-linear",
    title: "Electrical & IoT",
    items: [
      "IoT System Dev",
      "Embedded System",
      "RTOS Programming",
      "STM32",
      "Sensor Integration",
      "Solar Panel"
    ],
    className: ""
  },
  {
    icon: "solar:gamepad-linear",
    title: "Robotics",
    items: [
      "Robot Development",
      "ROS",
      "Python for Robotics",
      "Autonomous System",
      "Basic Control System"
    ],
    className: ""
  },
  {
    icon: "solar:code-square-linear",
    title: "Programming & Data",
    items: [
      "Python",
      "R Language",
      "Data Analysis",
      "Data Visualization",
      "Orange Data Mining"
    ],
    className: ""
  },
  {
    icon: "solar:routing-2-linear",
    title: "Telecommunication",
    items: [
      "Network Cabling",
      "Fiber Optic Inst.",
      "FTTH",
      "Splicing & Jointing"
    ],
    className: ""
  },
  {
    icon: "solar:wrench-linear",
    title: "Tools",
    items: [
      "Arduino",
      "Raspberry Pi",
      "Basic Electronics",
      "Figma"
    ],
    className: "md:col-span-2 lg:col-span-1"
  }
];
