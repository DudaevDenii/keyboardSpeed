import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface IState {
  typingText: string[];
  level: number;
  currentSymbol: string | undefined;
  correct: number;
  nonCorrect: number;
  allCorrect: number;
  allNonCorrect: number;
  auth: {
    name: string;
    surname: string;
  };
}
const initialState: IState = {
  typingText: [
    "the quick brown fox jumps over a lazy dog near a serene lake as the sun sets behind the mountains, casting a beautiful reflection on the water's surface, where fish swim quietly and the evening birds sing, marking the end of a peaceful day in the heart of nature's wonderland. Across the lake, a family sets up camp, enjoying the tranquil atmosphere, roasting marshmallows over a gentle fire, and sharing stories under the starry sky, creating memories in this picturesque setting.",
    "in a quaint village, a young boy named Tim plays with his faithful dog while his mother bakes a delicious apple pie in the cozy, sunlit kitchen, filling the air with sweet aromas as neighbors pass by, waving and smiling, in the warm embrace of this small community's charm. Nearby, children laugh and play in the village square, their joyful voices blending with the sound of the local musicians who strum guitars and sing folk songs, adding to the village's lively spirit.",
    "a group of wizards gather around a cauldron in a moonlit forest, concocting a mysterious potion that glows with an eerie, magical luminescence, their chants echoing through the trees as curious creatures of the night watch from a distance, mesmerized by the spectacle. The forest is alive with whispers and rustling leaves, as if nature itself is reacting to the magical energies being unleashed, adding a sense of ancient power to the enigmatic ritual unfolding.",
    "deep beneath the ocean's surface, a team of divers explore a sunken shipwreck, discovering hidden treasures and forgotten artifacts of ancient times, swimming through the shadowy corridors as colorful fish dart around them, in a world silent and strange, yet full of beauty. Their lights reveal intricate carvings and mysterious symbols on the ship's wooden beams, hinting at untold stories of seafaring adventures and long-lost secrets of the deep.",
    "on a bustling city street, people from all walks of life come together to celebrate a festive parade, full of vibrant colors and joyous music, dancers move rhythmically, and floats adorned with flowers pass by, creating a tapestry of culture and happiness that unites everyone present. Street vendors sell delicious treats and handmade crafts, while children watch in awe, their faces painted with whimsical designs, fully immersed in the excitement of the city's grand celebration.",
    "high above the earth, astronauts aboard a space station witness a spectacular sunrise, as they orbit the planet and conduct important scientific research, their view from the cosmos offers a unique perspective on our world, a fragile blue orb in the vast expanse of space. The beauty of the earth's oceans, deserts, forests, and cities is visible from their vantage point, a reminder of the interconnectedness of all life and the importance of preserving our planet.",
    "in an ancient library, a scholar uncovers an old, dusty tome containing lost knowledge and secrets from a civilization long gone, as he turns the fragile pages, he is transported back in time, imagining the lives of those who once walked the same halls. He finds detailed illustrations and writings about their culture, their achievements, and their daily lives, providing a rare glimpse into a world that existed centuries ago, filled with wisdom and mystery.",
    "in a remote desert, under the vast and starry sky, a group of astronomers gaze through a telescope, marveling at the wonders of the universe, their exploration reveals distant galaxies, shimmering nebulae, and sparkling constellations, a testament to the endless mysteries of space. The stillness of the night is broken only by the soft whispers of the wind and the occasional flicker of a shooting star, creating a moment of profound connection with the cosmos and its infinite beauty.",
    "in a lush rainforest, a wildlife biologist observes the complex ecosystem, surrounded by towering trees and vibrant flora, the sounds of exotic birds and rustling leaves fill the air, creating a symphony of nature's music. The biologist carefully documents the behavior of rare species, understanding their role in the delicate balance of life in this rich and diverse habitat, every discovery shedding light on the intricate web of life that thrives in the heart of the rainforest.",
    "deep in the heart of an ancient forest, a hidden lake lies serene and untouched, reflecting the ever-changing skies above, the waters are crystal clear, revealing the colorful pebbles and fish that dwell beneath the surface. Surrounding the lake, the old trees stand as guardians, their leaves whispering secrets of centuries past. This secluded paradise, a haven for wildlife, remains a peaceful escape from the outside world, embodying the unspoiled beauty and mystery of nature's untouched landscapes.",
  ],
  level: 1,
  currentSymbol: undefined,
  auth: JSON.parse(localStorage.getItem("auth") || "{}"),
  correct: 0,
  nonCorrect: 0,
  allCorrect: 0,
  allNonCorrect: 0,
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    keyDown(state, action: PayloadAction<string>) {
      state.currentSymbol = action.payload;
    },
    correct(state) {
      state.correct += 1;
      state.allCorrect += 1;
      state.typingText[state.level] = state.typingText[state.level]
        .split("")
        .splice(1)
        .join("");
    },
    nonCorrect(state) {
      state.nonCorrect += 1;
      state.allNonCorrect += 1;
    },
    setStorage(state) {
      state.auth = JSON.parse(localStorage.getItem("auth")!);
    },
    nextLevel(state) {
      state.level += 1;
      state.correct = 0;
      state.nonCorrect = 0;
    },
  },
});
export const { keyDown, correct, nonCorrect, setStorage, nextLevel } =
  appSlice.actions;
export default appSlice.reducer;
