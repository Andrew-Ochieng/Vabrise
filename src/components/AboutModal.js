import { RiCloseCircleFill } from 'react-icons/ri'

const AboutModal = ({isOpen, setIsOpen}) => {
    if (!isOpen) return null;

    return ( 
        <div className="fixed inset-0 lg:px-80 sm:px-8 md:px-16 px-4 md:y-0 py-16 bg-gray-800 bg-opacity-30 flex items-center justify-center backdrop-blur-sm duration-500">
            <div className=" rounded-lg bg-blue-200">
                <div className='py-2 px-2 rounded-lg flex items-center justify-end'>
                    <RiCloseCircleFill 
                        onClick={() => setIsOpen(false)}
                        className='md:text-2xl text-xl cursor-pointer'
                        />
                </div>
                <hr className='text-gray-800 border-1.5 border-gray-500' />
                <div className='mx-3 my-8 '>
                    <div className='flex mb-8'>
                        <img 
                            className='md:w-36 w-24 rounded-full'
                            src="https://media.licdn.com/dms/image/C4D03AQGxGYmPVxET7w/profile-displayphoto-shrink_800_800/0/1667978494133?e=1677110400&v=beta&t=3vrmR78s8GK93gx4OYITa61jnbjkASzC0QZJRz2VFPk" 
                            alt=""/>
                        <div className='flex flex-col justify-center mx-4'>
                            <h3 className='text-lg'>Christopher Khayere</h3>
                            <p className='text-lg font-medium text-green-500'>Founder & CEO</p>
                            <p className='text-base font-light text-gray-900'>Cloud & Network Security Engineer</p>
                            <a 
                                className='text-blue-500 text-lg underline'
                                href="https://www.linkedin.com/in/chris-khayere/"
                                >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <h1 className='pb-4 md:text-xl text-lg font-semibold text-gray-800 '>The Long History</h1>
                    <p className='text-gray-700'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Semper feugiat nibh 
                        sed pulvinar proin gravida hendrerit lectus. Tempor id eu nisl nunc mi. 
                        Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. 
                        Mollis nunc sed id semper risus in hendrerit. Cursus risus at ultrices mi 
                        tempus imperdiet. Egestas fringilla phasellus faucibus scelerisque. 
                        Consequat nisl vel pretium lectus quam id leo in vitae. Viverra suspendisse 
                        potenti nullam ac tortor vitae purus faucibus. Sed odio morbi quis commodo odio. 
                        Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Pretium quam 
                        vulputate dignissim suspendisse in est ante. Viverra mauris in aliquam sem 
                        fringilla. Ut enim blandit volutpat maecenas volutpat blandit aliquam. 
                        In metus vulputate eu scelerisque felis imperdiet proin.
                    </p>
                    <p className='pt-4 text-gray-700'>
                        Molestie a iaculis at erat pellentesque adipiscing. Amet justo donec enim diam vulputate. 
                        Bibendum enim facilisis gravida neque. Montes nascetur ridiculus mus mauris. 
                        Arcu ac tortor dignissim convallis aenean et tortor at risus. Est placerat in 
                        egestas erat imperdiet sed euismod nisi porta. Elit duis tristique sollicitudin 
                        nibh sit amet commodo nulla. Amet justo donec enim diam vulputate ut pharetra sit. 
                        Faucibus a pellentesque sit amet porttitor eget. Sit amet nisl purus in mollis nunc sed. 
                        Sit amet est placerat in egestas erat imperdiet sed euismod. Morbi tempus iaculis urna 
                        id volutpat lacus. Faucibus pulvinar elementum integer enim neque volutpat. 
                        Montes nascetur ridiculus mus mauris vitae ultricies. Etiam sit amet nisl purus 
                        in mollis nunc sed id. Est ultricies integer quis auctor elit sed.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default AboutModal;