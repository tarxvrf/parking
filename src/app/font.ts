import { Cairo, Poppins } from "next/font/google";

export const pop =Poppins({
    weight:['100'],
    subsets:["latin"],
    variable:"--font-pop"
})

export const car =Cairo({
    subsets:["latin"]
})

