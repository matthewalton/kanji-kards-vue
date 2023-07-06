import { defineStore } from "pinia";

export const usePacksStore = defineStore("packs", {
  state: () => ({
    nature: {
      title: "Nature",
      slug: "nature",
      description:
        "Explore Kanji characters representing elements of nature and deepen your connection with the natural world.",
      kanji: "自然",
      pronunciation: "Shizen",
    },
    numbers: {
      title: "Numbers",
      slug: "numbers",
      description:
        "Learn Kanji characters for numbers and confidently comprehend numerical values.",
      kanji: "数字",
      pronunciation: "Sūji",
    },
    colors: {
      title: "Colors",
      slug: "colors",
      description:
        "Unlock the vibrant world of Kanji characters for colors and expand your Kanji vocabulary.",
      kanji: "色",
      pronunciation: "Iro",
    },
    bodyParts: {
      title: "Body Parts",
      slug: "body-parts",
      description:
        "Enhance your Kanji proficiency by studying characters representing body parts and organs.",
      kanji: "身体の部位",
      pronunciation: "Shintai no bui",
    },
    animals: {
      title: "Animals",
      slug: "animals",
      description:
        "Embark on a Kanji adventure through the animal kingdom and recognize characters for various animals.",
      kanji: "動物",
      pronunciation: "Dōbutsu",
    },
    timeAndSeasons: {
      title: "Time and Seasons",
      slug: "time-and-seasons",
      description:
        "Dive into Kanji characters for time, months, seasons, and special occasions.",
      kanji: "時間と季節",
      pronunciation: "Jikan to kisetsu",
    },
    directionsAndLocations: {
      title: "Directions and Locations",
      slug: "directions-and-locations",
      description:
        "Navigate through Kanji characters for directions, places, and improve your ability to give and understand directions.",
      kanji: "方向と場所",
      pronunciation: "Hōkō to basho",
    },
  }),

  getters: {},
});
