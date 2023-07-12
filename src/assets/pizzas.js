import { storage } from "../firebase-config";
import { ref, getDownloadURL } from "firebase/storage";

export const pizzaList = [
  {
    name: "Grandiosa Original",
    img: () => {
      getDownloadURL(ref(storage, "images/Grandiosa Original.png"));
    },
    rating: "6.9",
  },
  {
    name: "Grandiosa Kjøttdeig og Løk",
    img: "src/assets/pizzaImgs/GrandiosaKjøttdeigOgLøk.png",
    rating: "7.9",
  },
  {
    name: "Grandiosa Delux Pepperoni",
    img: "src/assets/pizzaImgs/GrandiosaDeluxPepperoni.png",
    rating: "8.2",
  },
];
