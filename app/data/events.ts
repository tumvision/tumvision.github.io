// All club events. Add new talks here - the meetups page sorts them
// into "upcoming" and "previous" automatically based on the date.

export type EventType = "reading-group" | "kickoff" | "professor-talk";

export type Room = {
  name: string;
  link: string;
};

export type ClubEvent = {
  type: EventType;
  speaker: string;
  title: string;
  date: string; // YYYY-MM-DD
  time: string;
  paper?: string;
  affiliation?: string; // shown for keynote speakers
  post?: string; // LinkedIn post about the event
  room: Room;
};

export const ADDRESS = "Boltzmannstraße 3, 85748 Garching";

const ROOM_02_13_010: Room = {
  name: "02.13.010",
  link: "https://nav.tum.de/room/5613.02.010",
};

const ROOM_01_10_11: Room = {
  name: "01.10.11",
  link: "https://nav.tum.de/room/5610.01.011",
};

export const EVENT_LABELS: Record<EventType, string> = {
  "reading-group": "Paper Reading Group",
  kickoff: "Kickoff Keynote",
  "professor-talk": "Professor Talk",
};

// kickoff keynotes and professor talks get a more prominent card
export const isFeatured = (event: ClubEvent) =>
  event.type === "kickoff" || event.type === "professor-talk";

export const EVENTS: ClubEvent[] = [
  {
    type: "reading-group",
    speaker: "Zhuojiang Cai",
    title:
      "GazeOnce360: Fisheye-Based 360° Multi-Person Gaze Estimation with Global-Local Feature Fusion",
    paper: "https://caizhuojiang.com/GazeOnce360/",
    date: "2026-07-14",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Abhishek Saroha",
    title:
      "EgoFlow: Gradient-Guided Flow Matching for Egocentric 6DoF Object Motion Generation",
    paper: "https://abhi-rf.github.io/egoflow/",
    date: "2026-07-07",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Snehal Jauhri",
    title: "3D Al for Robot Perception and Learning",
    paper: "https://sjauhri.github.io",
    date: "2026-06-30",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Ziya Erkoc",
    title: "WorldAgents: Can Foundation Image Models be Agents for 3D World Models?",
    paper: "https://ziyaerkoc.com/worldagents/",
    date: "2026-06-09",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Weirong Chen",
    title: "NOV3R: Beyond Pixel-Aligned 3D Reconstruction",
    paper: "https://wrchen530.github.io/nova3r/",
    date: "2026-06-02",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Nicolas von Lützow",
    title: "GaussianGPT: Towards Autoregressive 3D Gaussian Scene Generation",
    paper: "https://nicolasvonluetzow.github.io/GaussianGPT/",
    date: "2026-05-26",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Ganlin Zhang",
    title: "Vista-SLAM: Efficient and Accurate Real-Time 3D Geometry Recovery",
    paper: "https://ganlinzhang.xyz/vista-slam/",
    date: "2026-05-19",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "professor-talk",
    speaker: "Prof. Dr. Angela Dai",
    affiliation: "TUM",
    post: "https://lnkd.in/p/eiZc6UXr",
    title: "Building Interactable 3D Spaces from Imperfect Real-World Data",
    paper: "https://www.3dunderstanding.org/publications.html",
    date: "2026-05-05",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "kickoff",
    speaker: "Prof. Dr. Matthias Nießner",
    affiliation: "TUM",
    title: "World Models: Connecting the Digital and Physical World",
    post: "https://www.linkedin.com/feed/update/urn:li:activity:7455511272889958400",
    paper: "https://niessnerlab.org/publications.html",
    date: "2026-04-28",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Cecilia Curreli",
    title: "Nonisotropic Gaussian Diffusion for Realistic 3D Human Motion Prediction",
    paper: "https://ceveloper.github.io/publications/skeletondiffusion/",
    date: "2025-12-09",
    time: "18:00-19:00",
    room: ROOM_01_10_11,
  },
  {
    type: "reading-group",
    speaker: "Thomas Dages",
    title: "Metric Convolutions: A Unifying Theory to Adaptive Image Convolutions",
    paper:
      "https://openaccess.thecvf.com/content/ICCV2025/html/Dages_Metric_Convolutions_A_Unifying_Theory_to_Adaptive_Image_Convolutions_ICCV_2025_paper.html",
    date: "2025-12-02",
    time: "18:00-19:00",
    room: ROOM_01_10_11,
  },
  {
    type: "reading-group",
    speaker: "Jonathan Schmidt",
    title: "BecomingLit: Relightable Gaussian Avatars with Hybrid Neural Shading",
    paper: "https://jonathsch.github.io/becominglit/",
    date: "2025-11-25",
    time: "18:00-19:00",
    room: ROOM_01_10_11,
  },
  {
    type: "reading-group",
    speaker: "Peter Kocsis",
    title: "IntrinsiX: High-Quality PBR Generation using Image Priors",
    paper: "https://peter-kocsis.github.io/IntrinsiX/",
    date: "2025-11-18",
    time: "18:00-19:00",
    room: ROOM_01_10_11,
  },
  {
    type: "reading-group",
    speaker: "Yueh-Cheng Liu",
    title: "QuickSplat: Fast 3D Surface Reconstruction via Learned Gaussian Initialization",
    paper: "https://liu115.github.io/quicksplat",
    date: "2025-11-11",
    time: "18:00-19:00",
    room: ROOM_01_10_11,
  },
  {
    type: "reading-group",
    speaker: "David Rozenberski",
    title: "UnScene3D: Unsupervised 3D Instance Segmentation for Indoor Scenes",
    paper: "https://rozdavid.github.io/unscene3d",
    date: "2025-07-17",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Jiapeng Tang",
    title: "GAF: Gaussian Avatar Reconstruction from Monocular Videos via Multi-view Diffusion",
    paper: "https://tangjiapeng.github.io/projects/GAF/",
    date: "2025-07-10",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Ziya Erkoc",
    title: "PrEditor3D: Fast and Precise 3D Shape Editing",
    paper: "https://ziyaerkoc.com/preditor3d/",
    date: "2025-07-03",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Xinyi Zhang",
    title: "DNF: Unconditional 4D Generation with Dictionary-based Neural Fields",
    paper: "https://xzhang-t.github.io/project/DNF/",
    date: "2025-06-26",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Haoxuan Li",
    title: "MeshPad: Interactive Sketch-Conditioned Artist-Designed Mesh Generation and Editing",
    paper: "https://derkleineli.github.io/meshpad/",
    date: "2025-06-12",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Riccardo Marin",
    title: "On 3D Virtual Humans and Their Behavior",
    paper: "https://riccardomarin.github.io/",
    date: "2025-06-05",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Mateo de Mayo",
    title: "Visual-inertial tracking for Spatial Agents",
    paper: "https://cvg.cit.tum.de/members/mayom",
    date: "2025-05-22",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Artem Sevastopolsky",
    title: "One-Shot Head Reconstruction Model with Virtual Views",
    paper: "https://seva100.github.io/",
    date: "2025-02-06",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Simon Weber",
    title: "Power Variable Projection for Initialization-Free Large-Scale Bundle Adjustment",
    paper: "https://arxiv.org/abs/2405.05079",
    date: "2025-01-30",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Daoyi Gao",
    title: "MeshArt: Generating Articulated Meshes with Structure-guided Transformers",
    paper: "https://daoyig.github.io/Mesh_Art/",
    date: "2024-12-12",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Shivangi Aneja",
    title: "GaussianSpeech: Audio-Driven Gaussian Avatars",
    paper: "https://shivangi-aneja.github.io/projects/gaussianspeech",
    date: "2024-12-05",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Yujin Chen",
    title: "Mesh2NeRF: Direct Mesh Supervision for Neural Radiance Field Representation and Generation",
    paper: "https://terencecyj.github.io/projects/Mesh2NeRF/",
    date: "2024-11-28",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Manuel Dahnert",
    title: "Coherent 3D Scene Diffusion From a Single RGB Image",
    paper: "https://www.manuel-dahnert.com/research/scene-diffusion",
    date: "2024-11-21",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Simon Giebenhain",
    title: "NPHM: Learning Neural Parametric Head Models",
    paper: "https://simongiebenhain.github.io/NPHM/",
    date: "2024-10-31",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Lukas Höllein",
    title: "Text2Room: Extracting Textured 3D Meshes from 2D Text-to-Image Models",
    paper: "https://lukashoel.github.io/text-to-room/",
    date: "2024-10-24",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
  {
    type: "reading-group",
    speaker: "Peter Kocsis",
    title: "Intrinsic Image Diffusion for Indoor Single-view Material Estimation",
    paper: "https://peter-kocsis.github.io/IntrinsicImageDiffusion/",
    date: "2024-10-17",
    time: "18:00-19:00",
    room: ROOM_02_13_010,
  },
];

// "today" in Munich as YYYY-MM-DD, so an event stays upcoming on its own day
export const todayInMunich = () =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Berlin" }).format(new Date());

export const splitEvents = (today: string) => {
  const sorted = [...EVENTS].sort((a, b) => b.date.localeCompare(a.date));
  return {
    upcoming: sorted.filter((e) => e.date >= today).reverse(),
    previous: sorted.filter((e) => e.date < today),
  };
};

// TUM semesters: summer runs April-September, winter October-March
export const semesterOf = (date: string) => {
  const year = Number(date.slice(0, 4));
  const month = Number(date.slice(5, 7));
  if (month >= 4 && month <= 9) {
    return { key: `${year}-s`, label: `Summer Semester ${year}` };
  }
  const start = month >= 10 ? year : year - 1;
  return {
    key: `${start}-w`,
    label: `Winter Semester ${start}/${String(start + 1).slice(2)}`,
  };
};
