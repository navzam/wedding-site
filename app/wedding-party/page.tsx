'use client';

import HomeLayout from '../components/HomeLayout';
import { CaptionView } from '../components/gallery/views';
import { ImageProps } from '../components/gallery/utils/types';

interface Person {
    key: string,
    portrait: boolean,
    fname: string,
    lname: string,
    bio: string,
    memory: string,
}

const brideppl: Person[] = [
    { 
        key: "Emily.png", portrait: true,
        fname: "Emily", lname: "Curtis",
        bio: "Emily is currently living in Seattle, WA and working as a Scrum Master (kind of like a technical project manager) for Sports Reference - an online sports data company!",
        memory: "As Hannah's older sister Emily has millions of sweet memories, from creating their own secret written language, to tons of summer nights spent playing outside together (with Maggie, too!) More recently, one of her favorite memories with both Han and Jack was when they visited Nafis and Emily in Seattle. On a bus ride home Jack suggested the four of us share what they love about each other - and there was a lot to share!"
    },
    { 
        key: "Liza.png", portrait: true,
        fname: "Liza", lname: "Williams",
        bio: "Liza lives in Washington, D.C. and is a law student at Georgetown Law. She is Jack’s younger sister and is honored to be a bridesmaid. She’s enjoyed visiting Jack and Hannah in Madison and spending time with them and the kitties!",
        memory: "Her favorite memory with Hannah is when Hannah came to visit Liza in Spain during her study-abroad and they had a great time traveling to Sevilla and Cádiz!"
    },
    { 
        key: "Rachel.png", portrait: true,
        fname: "Rachel", lname: "Krutz",
        bio: "Rachel lives in Denver, Colorado and is graduating with her master's degree in Speech-Language Pathology this year and plans to work with pediatric clients in the future! She also has a puppy named Goose. She met Hannah in elementary school and had the honor of growing up alongside her playing volleyball, lifting weights, and being generally goofy girls.",
        memory: "Her favorite memory with Hannah was their senior trip to Puerto Rico with their moms where they drank mojitos, swam with manatees, and danced the nights away. She will remember that trip forever! "
    },
    { 
        key: "Maggie.png", portrait: true,
        fname: "Maggie", lname: "Davis",
        bio: "Maggie lives in NYC and works in the fashion industry. She's originally from Oklahoma, where she met Hannah in elementary school! Hannah moved to the same street she lived on and they’ve been such great friends ever since.",
        memory: "She has so many amazing and funny memories with Hannah, but a core memory of hers includes both Hannah and Jack. It was maybe the second time she met Jack—he was picking Hannah and Maggie up from the airport, and waiting in the car were freshly baked cookies. Something so small but it left a mark. She loved Jack and Hannah together from the get go, but needless to say she's been rooting for Jack ever since!"
    },
    { 
        key: "Lexi.png", portrait: true,
        fname: "Lexi", lname: "Thompson",
        bio: "Lexi lives in Norman, Oklahoma. She is a registered dental hygienist but is currently in school to get another degree in psychology. She first met Hannah growing up in First Christian Church of Norman but had the pleasure of getting to play many sports, go on many church activities and grow up with her.",
        memory: "One of her favorite memories with Hannah was on a mission trip. They got to serve a few days before going to nationals for volleyball. Driving to Minnesota they both had gotten poison ivy and had to cover themselves in Angry Bird Band-Aids to prevent them from scratching and had to play the tournament like that."
    },
];
const groomppl: Person[] = [
    { 
        key: "HJ-Sneak-2.jpg", portrait: true,
        fname: "Henry", lname: "Williams",
        bio: "",
        memory: ""
    },
    { 
        key: "HJ-Sneak-2.jpg", portrait: true,
        fname: "Max", lname: "Williams",
        bio: "",
        memory: ""
    },
    { 
        key: "HJ-Sneak-2.jpg", portrait: true,
        fname: "Ben", lname: "Curtis",
        bio: "",
        memory: ""
    },
    { 
        key: "nafis.png", portrait: true,
        fname: "Nafis", lname: "Zaman",
        bio: "Nafis works as a software engineer at Microsoft. He lives in Seattle with his wife, Emily, and their dog, Norman. Nafis is married to the maid of honor, Emily, and is Hannah’s brother-in-law. They’ve been married since Hannah and Jack started dating, so he already feels like a brother to Jack too!",
        memory: "His fun memory is hiking with Jack and Hannah at Glacier National Park after the rental car broke down, where they hiked to all the waterfalls and then got soaked in the giant one at the end 🙂"
    },
    { 
        key: "HJ-Sneak-2.jpg", portrait: true,
        fname: "Clark", lname: "Barrus",
        bio: "",
        memory: ""
    },
    { 
        key: "HJ-Sneak-2.jpg", portrait: true,
        fname: "Sadie", lname: "Garber",
        bio: "Sadie is a software dev in Madison. They like birdwatching, bouldering, and playing with Pesto and Moka (Hannah and Jack's cats)",
        memory: "I moved to a very cycling-focused city in my twenties without knowing how to ride a bike. Jack very patiently spent a week teaching me how to go downhill without screaming, and Jack and Hannah joined me on my first ride through the city after getting a bike - the first of many lovely rides with them!"
    },
];

export default function Travel() {
    const b: ImageProps[] = brideppl.map(p => {
        return {
            caption: <div><b>{p.fname} {p.lname}</b><p>{p.bio}</p><p>{p.memory}</p></div>, 
            ...p
        } as ImageProps;
    });
    const g: ImageProps[] = groomppl.map(p => {
        return {
            caption: <div><b>{p.fname} {p.lname}</b><p>{p.bio}</p><p>{p.memory}</p></div>, 
            ...p
        } as ImageProps;
    });
    return <HomeLayout isGalleryWidth={true}>
        <h1 className="text-2xl font-extrabold text-[#879b88]">Wedding Party</h1>
        <CaptionView images={b}></CaptionView>
        <CaptionView images={g}></CaptionView>
    </HomeLayout>;
}