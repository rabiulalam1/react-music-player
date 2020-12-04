import { v4 } from "uuid";

function songs() {
    return [
        {
            name: "Genda Phool",
            cover: "https://www.desinode.com/storage/images/250/8847.jpg",
            artist: "Badshah , Payal Dev",
            audio : "https://files1.mp3slash.xyz/stream/186b4cb8a716b8bdb846f4b76d98f647",
            id: v4(),
            active: true,
        },
        {
            name: "Muqabla",
            cover: "https://www.desinode.com/storage/images/250/8393.jpg",
            artist: "Parampara Thakur , Yash Narvekar",
            audio : "https://files1.mp3slash.xyz/stream/455987a38b2562ef299a1b9d0dfdb0ba",
            id: v4(),
            active: false,
        },
        {
            name: "Aashiq Banaya Aapne",
            cover: "https://www.desinode.com/storage/images/250/4249.jpg",
            artist: "Himesh Reshammiya",
            audio : "https://files1.mp3slash.xyz/stream/ea56e1fce6ec3ddea847e80f1667ee5b",
            id: v4(),
            active: false,
        },

        {
            name: "Akh Lad Jaave",
            cover: "https://www.desinode.com/storage/images/250/5650.jpg",
            artist: "Badshah , Asees Kaur , Jubin Nautiyal",
            audio : "https://files1.mp3slash.xyz/stream/1fcfcf16e5dea8e3725eddae657fbb95",
            id: v4(),
            active: false,
        }
    ]
}

export default songs;