import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1} from "../assets/images";
import { useState } from "react";


const Hero = () => {
    const [ bigShoeImg, setBigShoeImg] = useState(bigShoe1);

    return (
        <section
            id="home"
            className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
                    <span 
                        className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"
                    >The New Arrival</span>
                    <br />
                    <span 
                        className="text-coral-red inline-block mt-3"
                    >Neki</span> Shoes
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                    Discover Stylish Neki Arrivals, quality comfort, and innovation for your active life. 
                </p>
                <Button 
                    label="Shop Now"
                    iconURL={arrowRight}
                />
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((statistic) => (
                        <div key={statistic.label}>
                            <p className="text-4xl font-palanquin font-bold"
                            >{statistic.value}</p>
                            <p className="font-montserrat leading-7 text-slate-gray"
                            >{statistic.label}</p>
                        </div>
                    ))
                    }
                </div>
            </div>

            <div className="relative flex items-center justify-center flex-1 xl:min-h-screen mx-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img 
                    src={bigShoeImg} 
                    alt="Nike shoe" 
                    height={500}
                    width={610}
                    className="object-contain relative z-10"
                />

                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6"> 
                    {shoes.map((shoe) =>(
                        <div key={shoe.bigShoe}>
                            <ShoeCard 
                                imgURL={shoe}
                                changeBigShoeImage= {(shoe) => setBigShoeImg(shoe)}
                                bigShoeImg={bigShoeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero;