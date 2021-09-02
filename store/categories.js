const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "human-greeting",
    label: "Engineering",
    id: 1,
    color:"white"
  },
  {
    backgroundColor: "#fd9644",
    icon: "gesture",
    label: "Physics",
    id: 2,
    color:"white"
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Technology",
    id: 3,
    color:"white"
  },
  {
    backgroundColor: "#26de81",
    icon: "brain",
    label: "Spiritual",
    id: 4,
    color:"white"
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Fashion and Lifestyle",
    id: 5,
    color:"white"
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    id: 6,
    color:"white"
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Pop-Culture",
    id: 7,
    color:"white"
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Journalism",
    id: 8,
    color:"white"
  },
  {
    
  backgroundColor: "pink",
    icon: "space-invaders",
    label: "Sci-Fi",
    id: 9,
    color:"white"
  },
  {
  backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    id: 10,
    color:"white"
  }
];


const getCategories = () => categories;

const getCategory = id => categories.find(c => c.id === id);

module.exports = {
  getCategories,
  getCategory
};
