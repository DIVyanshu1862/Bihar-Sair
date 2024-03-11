//set 1
import Mahaboddhi from "../bihar image/Mahabodhi Temple.jpg";
import GiantBuddha from "../bihar image/Giant Buddha.jpg";
import MettaBuddharam from "../bihar image/Metta Buddharam Temple.jpg";
import TergarMonastery from "../bihar image/Tergar Monastery.jpg"

const gayadata = [
  {
    id: "01",
    title: "Mahabodhi Temple",
    city: "Gaya",
    distance: 100,
    address:'Bihar',
    price: 1000,
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
    price: 1000,
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
    price:1100,
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
    price: 1150,
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
];

export default gayadata;
