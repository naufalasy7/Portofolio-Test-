import type { Project } from '../types';

export const projects: Project[] = [
  {
    number: "01",
    title: "Smart Garden IoT",
    description: "Sistem otomasi perawatan taman berbasis Internet of Things yang ditenagai oleh energi terbarukan. Mengumpulkan data kelembapan tanah dan cuaca untuk efisiensi penyiraman otomatis.",
    tags: [
      "IoT",
      "Renewable Energy",
      "Automation"
    ],
    gradient: "from-green-900/40 to-blue-900/40",
    image: "https://vczsausyegktbjgesyvd.supabase.co/storage/v1/object/public/Foto%20Portofolio/WhatsApp%20Image%202026-06-10%20at%2013.48.58%20(1).jpeg",
    imageAlt: "Smart Garden",
    imageOpacity: "opacity-80"
  },
  {
    number: "02",
    title: "Health Monitoring System",
    description: "Sistem deteksi detak jantung, saturasi oksigen (SpO2), dan suhu tubuh secara real-time berbasis IoT. Mengintegrasikan sensor MAX30102 untuk pulse oximetry dan BME280 untuk suhu tubuh. Menggunakan metode <span class=\"text-blue-400 font-medium\">Fuzzy Logic Mamdani</span> untuk inferensi kondisi kesehatan dan klasifikasi status pasien secara otomatis.",
    tags: [
      "MAX30102",
      "BME280",
      "Fuzzy Logic Mamdani",
      "Embedded System",
      "IoT"
    ],
    gradient: "from-red-900/30 to-pink-900/30",
    image: "https://vczsausyegktbjgesyvd.supabase.co/storage/v1/object/public/Foto%20Portofolio/WhatsApp%20Image%202026-06-10%20at%2013.55.54.jpeg",
    imageAlt: "Health Monitoring",
    imageOpacity: "opacity-80"
  },
  {
    number: "03",
    title: "Face ID Attendance System",
    description: "Sistem presensi canggih berbasis IoT dan AI yang mengimplementasikan pengenalan wajah. Memproses data secara efisien untuk pencatatan kehadiran yang akurat dan terintegrasi database.",
    tags: [
      "AI / Vision",
      "IoT",
      "Python"
    ],
    gradient: "from-indigo-900/40 to-cyan-900/40",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Face ID",
    imageOpacity: "opacity-60"
  },
  {
    number: "04",
    title: "UAV Fixed-Wing VTOL — KRTI",
    description: "Riset dan pengembangan UAV Fixed-Wing VTOL untuk Kontes Robot Terbang Indonesia (KRTI). Sistem kendali penerbangan berbasis <span class=\"text-blue-400 font-medium\">PX4 Autopilot</span> dengan integrasi <span class=\"text-blue-400 font-medium\">ROS 2</span> untuk komunikasi antar node. Simulasi lingkungan menggunakan <span class=\"text-blue-400 font-medium\">Gazebo</span> sebelum pengujian real-world.",
    tags: [
      "PX4 Autopilot",
      "ROS 2",
      "Gazebo Simulation",
      "Fixed-Wing VTOL",
      "KRTI"
    ],
    gradient: "from-slate-900/30 to-blue-900/30",
    image: "https://vczsausyegktbjgesyvd.supabase.co/storage/v1/object/public/Foto%20Portofolio/WhatsApp%20Image%202026-06-04%20at%2015.58.08%20(1).jpeg",
    imageAlt: "UAV VTOL",
    imageOpacity: "opacity-80"
  },
  {
    number: "05",
    title: "Fixed-Wing VTOL — Simulasi & GCS",
    description: "Pengembangan Ground Control Station (GCS) dan simulasi terbang UAV Fixed-Wing VTOL. Meliputi konfigurasi parameter PX4, pengujian mission planning via QGroundControl, serta integrasi telemetri real-time antara GCS dan airframe dalam environment simulasi Gazebo.",
    tags: [
      "GCS / QGroundControl",
      "PX4 SITL",
      "Gazebo",
      "Telemetry"
    ],
    gradient: "from-cyan-900/30 to-slate-900/30",
    image: "https://vczsausyegktbjgesyvd.supabase.co/storage/v1/object/public/Foto%20Portofolio/WhatsApp%20Image%202026-06-10%20at%2014.09.24.jpeg",
    imageAlt: "UAV Fixed Wing Simulation",
    imageOpacity: "opacity-80"
  },
  {
    number: "06",
    title: "Robot Edukasi",
    description: "Merancang dan merakit platform robotik skala kecil untuk tujuan pendidikan STEM. Mendemonstrasikan integrasi sensor ultrasonik, motor DC, dan logika pemrograman berbasis Arduino. Digunakan sebagai media ajar bagi siswa SD–SMA dalam program instruktur robotika.",
    tags: [
      "Arduino",
      "Sensor Integration",
      "STEM Education",
      "Basic Robotics"
    ],
    gradient: "from-yellow-900/30 to-orange-900/30",
    image: "https://vczsausyegktbjgesyvd.supabase.co/storage/v1/object/public/Foto%20Portofolio/WhatsApp%20Image%202026-05-23%20at%2013.22.51.jpeg",
    imageAlt: "Educational Robot",
    imageOpacity: "opacity-80"
  },
  {
    number: "07",
    title: "Data Analysis Project",
    description: "Menggunakan Python, R, dan Orange Data Mining untuk mengekstraksi wawasan dari dataset, melakukan pembersihan data, serta membangun visualisasi untuk keputusan analitis.",
    tags: [
      "Python / R",
      "Orange Data Mining",
      "Analytics"
    ],
    gradient: "from-teal-900/40 to-blue-900/40",
    image: "https://vczsausyegktbjgesyvd.supabase.co/storage/v1/object/public/Foto%20Portofolio/Frame%202.png",
    imageAlt: "Data Analysis",
    imageOpacity: "opacity-80"
  },
  {
    number: "08",
    title: "Solar EV Charging Station — PKM-KC",
    description: "Stasiun pengisian daya portabel bertenaga surya untuk sepeda motor listrik di komunitas 3T (Terdepan, Terluar, Tertinggal). Dirancang untuk menjawab keterbatasan infrastruktur energi di daerah terpencil. Bagian dari program PKM-KC 2025 Telkom University.",
    tags: [
      "Renewable Energy",
      "EV / Battery",
      "PKM-KC 2025"
    ],
    gradient: "from-yellow-900/40 to-green-900/40",
    image: "https://vczsausyegktbjgesyvd.supabase.co/storage/v1/object/public/Foto%20Portofolio/WhatsApp%20Image%202026-06-10%20at%2013.48.57%20(3).jpeg",
    imageAlt: "Solar Charging Station",
    imageOpacity: "opacity-80"
  },
  {
    number: "09",
    title: "Riset Baterai & Material — Lab BEST",
    description: "Riset pengembangan sistem penyimpanan energi dan daur ulang baterai di Laboratorium Basic Physics &amp; Energy Storage (Lab BEST) Telkom University. Berkontribusi dalam perancangan adaptor hemat daya untuk kendaraan listrik roda dua dan analisis material baterai untuk meningkatkan efisiensi energi pada aplikasi EV.",
    tags: [
      "Battery System",
      "Energy Storage",
      "EV Research",
      "Lab BEST"
    ],
    gradient: "from-emerald-900/30 to-teal-900/30",
    image: "https://vczsausyegktbjgesyvd.supabase.co/storage/v1/object/public/Foto%20Portofolio/WhatsApp%20Image%202026-06-10%20at%2014.02.51.jpeg",
    imageAlt: "Battery Research",
    imageOpacity: "opacity-80"
  },
  {
    number: "10",
    title: "Kliling — Web Tourism App",
    description: "Prototipe aplikasi pariwisata berbasis web yang dikembangkan dalam program Digital Talent Program (DTP). Berperan sebagai Product Designer &amp; UI/UX Designer. Dipresentasikan pada Demo Day sebagai produk siap pakai.",
    tags: [
      "UI/UX Design",
      "Figma",
      "Web App"
    ],
    gradient: "from-pink-900/40 to-orange-900/40",
    image: "https://vczsausyegktbjgesyvd.supabase.co/storage/v1/object/public/Foto%20Portofolio/Frame%201.png",
    imageAlt: "Kliling Web App",
    imageOpacity: "opacity-80"
  }
];
