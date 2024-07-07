
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const data = [
    {
        id: 1,
        title: "Accordion One",
        text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
    },
    {
        id: 2,
        title: "Accordion Two",
        text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
    },
    {
        id: 3,
        title: "Accordion Three",
        text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
    },
];

function Accordion() {
    const [openId, setOpenId] = useState(null) //1,2,3

    const handleOpen = (id) => {
        setOpenId(id === openId ? null : id)
    }

    return (
        <div className="max-w-3xl mt-16 space-y-4 rounded-2xl overflow-hidden">
            {data.map(item => {
                return (
                    <AccordionItem key={item.id} item={item} openId={openId} onOpen={handleOpen} >
                        {item.text}
                    </AccordionItem>
                )
            })}
        </div>
    )
}

export default Accordion


function AccordionItem({ item, openId, onOpen, children }) {
    const isOpen = item.id === openId

    return (
        <div className="bg-white">
            <div onClick={() => onOpen(item.id)} className="flex items-center justify-between p-4 cursor-pointer font-bold text-xl mb-2">{item.title} <FaChevronDown className={isOpen ? " rotate-180 transition-all duration-300 ease-in-out" : "rotate-0 transition-all duration-300 ease-in-out"} /></div>
            <div className={` overflow-hidden text-[#374151] text-lg leading-6 px-4 transition-all duration-300 ease-in-out ${isOpen ? "p-4 opacity-100 max-h-screen transition-all duration-300 ease-out" : "max-h-0 opacity-0"}`}>{children}</div>
        </div>
    )
}