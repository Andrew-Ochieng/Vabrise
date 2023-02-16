const Courses = () => {
    const googleLink = 'https://accounts.google.com/v3/signin/identifier?dsh=S-1577003327%3A1673368471043976&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Fpli%3D1&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession'
    return ( 
        <>
            <div className="md:mt-16 md:mb-32 my-8 text-center lg:px-48 md:px-32 px-8">
                <div className="flex flex-col items-center justify-center pt-8 pb-4 md:text-3xl text-xl text-gray-800 font-semibold">
                    <h1 >Courses</h1>
                    <hr className="border-2 border-green-400 mt-2 md:w-32 w-24"/>
                </div>
                <h1 className="mb-8 md:text-xl text-lg text-gray-800">To enroll for the courses, first 
                    <a href={googleLink} className="text-red-500 font-medium mx-1">Login</a>
                    to your google account
                </h1>
                <p className="mb-12 md:text-xl text-lg text-gray-800">
                    <span className="font-bold">NOTE:</span> You can only respond once, so take your time</p>
                <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfqffASy65GijR5ZguwMQJgdMq05s6cGcxnp6JeNd0i4IAVeg/viewform?embedded=true" 
                    // width="640" 
                    // height="2330" 
                    title="course-registration"
                    className="w-full min-h-screen"
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0">
                        Loading…
                    </iframe>
            </div>
        </>
     );
}
 
export default Courses;