import {
	ChevronRightIcon,
	ChevronLeftIcon
} from "@primer/octicons-react";

interface SliderProps {
    imgList: string[];
}

function Slider({imgList}:SliderProps) {
    return ( 
        <section className="flex justify-center mt-[5%]">
        <div className="w-[526.5px] h-[702px] relative">
        {imgList.map((img:string)=>(<img src={img} alt="" key={img}></img>))}
        <div className="absolute left-[95%] top-[43%] cursor-pointer">
        <ChevronRightIcon size={24} fill="#8e8e8e"/>
        </div>
        <div className="absolute right-[95%] top-[43%] cursor-pointer">
        <ChevronLeftIcon size={24} fill="#8e8e8e"/>
        </div>
        </div>
        </section>
     );
}

export default Slider;