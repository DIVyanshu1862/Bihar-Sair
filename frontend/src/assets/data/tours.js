//set 1
import Mahaboddhi from "../images/Mahabodhi Temple.jpg";
import GiantBuddha from "../images/Giant Buddha.jpg";
import MettaBuddharam from "../images/Metta Buddharam Temple.jpg";
import TergarMonastery from "../images/Tergar Monastery.jpg"

//set 2
import GhoraKotoraLake from "../images/Ghora Kotora Lake.jpg";
import MahavirswamiJain from "../images/Mahavirswami Jain Water Temple.jpg";
import RajgirGlassBridge from "../images/Rajgir Glass Bridge.jpg";
import RuinsofNalandaUniversity from "../images/Ruins of Nalanda University.jpg";

//set 3
import AshokaPillar from "../images/Ashoka Pillar.jpg";
import VaishaliMeseum from "../images/Vaishali Museum.jpg";
import BuddhaRelicStupa from "../images/Buddha Relic Stupa.jpg";
import VishwaShantiStupa from "../images/Vishwa Shanti Stupa.jpg";

const tours = [
  {
    id: "01",
    title: "Mahabodhi Temple",
    city: "Gaya",
    distance: 100,
    address:'Bihar',
    price: 1999,
    maxGroupSize: 10,
    desc: "The Mahabodhi Temple, located in Gaya, India, is a sacred Buddhist site that marks the spot where Siddhartha Gautama, the Buddha, attained enlightenment. Recognized as a UNESCO World Heritage Site, the temple complex features an iconic Bodhi Tree, descendant of the original tree under which the Buddha meditated. Pilgrims from around the world visit this spiritual destination, adorned with intricate carvings and historical significance, making it a symbol of Buddhism's profound teachings and the enlightenment experience",
    reviews: [
      {
        name: "Shivam Singh",
        rating: 4.9,
      },
      {
        name: "Abhiraj Yadav",
        rating: 5,
      },
    ],
    avgRating: 4.7,
    photo: Mahaboddhi,
    featured: true,
  },
  {
    id: "02",
    title: "The Great Buddha Statue",
    city: "Gaya",
    distance: 300,
    address:'Bihar',
    price: 1999,
    maxGroupSize: 15,
    desc: "The Great Buddha statue is one of the popular stops on the Buddhist pilgrimage and tourist routes in Bodh Gaya, Bihar. The statue is 18.5 m high representing the Buddha seated in a meditation pose, or dhyana mudra, on a lotus in the open air",
    reviews: [
      {
        name: "Navnit Kumar",
        rating: 4.6,
      },
      {
        name: "Abhishek Kumar",
        rating: 4.9,
      },
    ],
    avgRating: 4.5,
    photo: GiantBuddha,
    featured: true,
  },
  {
    id: "03",
    title: "Metta Buddharam Temple",
    city: "Gaya",
    distance: 300,
    address:'Bihar',
    price: 2499,
    maxGroupSize: 10,
    desc: "The Metta Buddharam Temple is a Thai temple situated at Bodhgaya. The temple is appealing with an outer shell of stainless steel and a decorative mosaic using mirrors.  The temple sees the Thai Temple style of architecture. The main temple floor is made of wood. Underneath the temple is the marble-floored meditation room offering a perfect environment to the devotees for meditation.",
    reviews: [
      {
        name: "Vinayak Gupta",
        rating: 4.7,
      },
      {
        name: "Ranjita Gupta",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: MettaBuddharam,
    featured: true,
  },
  {
    id: "04",
    title: "Tergar Monastery",
    city: "Gaya",
    distance: 300,
    address:'Bihar',
    price: 2999,
    maxGroupSize: 10,
    desc: "The most impressive of Bodhgaya's Tibetan-style monasteries is the Tergar Monastery of the Karmapa school of Tibetan Buddhism. The Karmapa is often in residence here and gives teachings in the compound next door. There's a small café on-site",
    reviews: [
      {
        name: "Rishabh Raj",
        rating: 4.6,
      },
      {
        name: "Raushan Kumar",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: TergarMonastery,
    featured: true,
  },
  {
    id: "05",
    title: "Ghora kotora Lake",
    city: "Rajgir",
    distance: 300,
    address:'Bihar',
    price: 2999,
    maxGroupSize: 10,
    desc: "Ghora Katora, which means Horse Bowl, is a natural lake near the city of Rajgir in the Indian state of Bihar. The shape of the lake resembles that of a horse and is surrounded by mountains on three of the sides. The lake attracts migratory birds from Siberia and central Asia during winter",
    reviews: [
      {
        name: "Anuj Singh",
        rating: 4.6,
      },
      {
        name: "Rakesh Kumar",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: GhoraKotoraLake,
    featured: true,
  },
  {
    id: "06",
    title: "Glass Bridge",
    city: "Rajgir",
    distance: 400,
    address:'Bihar',
    price:2499,
    maxGroupSize: 8,
    desc: "Among the many tourist attractions in India's Bihar is the glass bridge at Rajgir in Nalanda. Modelled after China's Hangzhou Glass Bridge, this 85-foot-long and 6-foot-wide bridge was inaugurated in 2021. Located amid five hills, the bridge draws domestic as well as international tourists every year.",
    reviews: [
      {
        name: "Ravi Kumar",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: RajgirGlassBridge,
    featured: true,
  },
  {
    id: "07",
    title: "Mahavir Water Temple",
    city: "Nalanda",
    distance: 500,
    address:'Bihar',
    price: 2999,
    maxGroupSize: 8,
    desc: "The Jal Mandir or Water Temple is situated in Pawapuri, in the Indian state of Bihar. It is a major pilgrimage destination of Jains and the temple is dedicated to Mahavira, the 24th Tirthankara, which marks the place of his cremation. Mahavira attained Nirvana in Pawapuri in 527 BC",
    reviews: [
      {
        name: "Munna Kumar",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: MahavirswamiJain,
    featured: true,
  },
  {
    id: "08",
    title: "Ruins of Nalanda University",
    city: "Nalanda",
    distance: 500,
    address:'Bihar',
    price: 2999,
    maxGroupSize: 8,
    desc: "Nalanda was a renowned mahavihara in ancient Magadha, eastern India. Considered by historians to be the world's first residential university and among the greatest centers of learning in the ancient world, it was located near the city of Rajagriha and about 90 kilometres southeast of Pataliputra",
    reviews: [
      {
        name: "Kamlesh Kumar",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: RuinsofNalandaUniversity,
    featured: true,
  },
  {
    id: "09",
    title: "Ashoka Pillar",
    city: "Vaishali",
    distance: 500,
    address:'Bihar',
    price: 1599,
    maxGroupSize: 8,
    desc: "Ashoka Pillar is a historical monument located at Kolhua in Vaishali, Bihar. Situated inside the Vaishali Archaeological Ruins complex, it is one of the popular places of heritage in Bihar, and among the must include places in Vaishali Tour Packages",
    reviews: [
      {
        name: "Lalit Kumar",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: AshokaPillar,
    featured: true,
  },
  {
    id: "10",
    title: "Vaishali Meseum",
    city: "Vaishali",
    distance: 500,
    address:'Bihar',
    price: 1599,
    maxGroupSize: 8,
    desc: "Vaishali Museum is an archaeological museum situated on the banks of Coronation Tank in Vaishali, Bihar. It is one of the popular museums in Bihar, and among the interesting places to visit in Vaishali for history lovers.",
    reviews: [
      {
        name: "Abhishek Kumar",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: VaishaliMeseum,
    featured: true,
  },
  {
    id: "11",
    title: "Buddha Relic Stupa",
    city: "Vaishali",
    distance: 500,
    address:'Bihar',
    price: 1599,
    maxGroupSize: 8,
    desc: "Buddha's Relic Stupa is a sacred spot located at Chak Ramdas in the Vaishali district of Bihar. Situated near Vaishali Museum, it is one of the prominent historical structures in Bihar, and among the best places to visit in Vaishali.",
    reviews: [],
    avgRating: 4.5,
    photo: BuddhaRelicStupa,
    featured: true,
  },
  {
    id: "12",
    title: "Vishwa Shanti Stupa",
    city: "Vaishali",
    distance: 500,
    address:'Bihar',
    price: 1499,
    maxGroupSize: 8,
    desc: "Vishwa Shanti Stupa is a peace pagoda located near Vishali Museum in Vaishali, Bihar. Also known as World Peace Pagoda, it is one of the Peace Pagodas in India, and among the most-visited tourist places in Vaishali.",
    reviews: [],
    avgRating: 4.5,
    photo: VishwaShantiStupa,
    featured: true,
  },
];

export default tours;
