import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import img_template1 from "@/assets/images/template1.png";
import img_template2 from "@/assets/images/template2.png";

const cardList = [
    {
        img: "https://placehold.co/600x400?text=Empty+Page",
        title: "Empty Page",
        link: "/builder"
    },
    {
        img: img_template1,
        title: "Template 1",
        link: "/builder?template=template1"
    },
    { img: img_template2, title: "Template 2", link: "/builder?template=template2" }
];

export default function Home() {
    return (
        <div className="p-5 align-middle justify-center h-screen">
            <div className="text-2xl font-bold">Welcome, How to get started?</div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {cardList.map((card, index) => (
                    <div className="bg-white rounded-lg shadow-md p-4" key={index}>
                        <img className="w-full h-48 object-cover" src={card.img} alt="" />
                        <div className="mt-4">
                            <p className="font-bold text-xl">{card.title}</p>
                            <Button>
                                <Link to={card.link}>Start from here</Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
