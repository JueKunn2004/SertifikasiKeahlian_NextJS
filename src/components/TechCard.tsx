import Image from "../../node_modules/next/image";


type TechCard = {
    imageURL : string
    techStack : string
}
export default function TechCard({imageURL,techStack} : TechCard){
    return(
        <>
         <div className=" w-48 h-48 flex justify-center items-center shadow-lg drop-shadow
          overflow-hidden rounded-3xl bg-[#72BF78] bg-opacity-10 backdrop-blur-lg border border-white
          border-opacity-20 flex-col hover:bg-[#72BF78] hover:scale-110 duration-300">
            <div className="relative object-cover w-20 h-20">
                <Image src={imageURL} alt="a" fill={true}/>
            </div>
                    <p className="text-white text-center text-base leading-4">
                        {techStack}
                        </p>
                </div>
             </>
    )
}
