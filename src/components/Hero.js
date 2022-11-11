import heroImg from "../assets/hero.png"

const Hero = () => {
    return ( 
        <>
            <div className="sm:flex justify-between lg:my-32 md:my-16 my-8">
                <div>
                    <h3 className="uppercase font-medium md:text-xl text-lg text-gray-600">
                        We Manage. You Grow
                    </h3>
                    <h1 className="md:my-8 my-4 md:text-4xl text-2xl font-extrabold text-gray-800 leading-relaxed ">
                        A Complete solution <br /> to all your tech <br /> needs without <br /> hustle
                    </h1>
                    <p>
                        Manage your bussiness without having to worry about the the software solutions you are using. Less hustle more growth.
                    </p>
                </div>
                <div>
                    <img src={heroImg} alt="Hero section" />
                </div>
            </div>
        </>
     );
}
 
export default Hero;