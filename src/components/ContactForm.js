const ContactForm = () => {
    const handleForm = (e) => {
        e.preventDefault();

        console.log("form submitted successfully!")

    }
    return ( 
        <>
            <div>
                <form onSubmit={handleForm} >
                    <div className="my-4">
                        <input className="p-3 bg-gray-100 rounded-lg w-full" type="text" name="firstname" placeholder="First Name" />
                    </div>
                    <div className="my-4">
                        <input className="p-3 bg-gray-100 rounded-lg w-full" type="text" name="lastname" placeholder="Last Name" />
                    </div>
                    <div className="my-4">
                        <input className="p-3 bg-gray-100 rounded-lg w-full" type="tel" name="phone" placeholder="Telephone Number" />
                    </div>
                    <div className="my-4">
                        <textarea className="px-3 py-2 bg-gray-100 rounded-lg w-full" name="message" placeholder="Message" cols="30" rows="6"></textarea>
                    </div>
                    <button className="mt-4 px-4 py-3 rounded-lg bg-green-400 w-full">
                        Submit
                    </button>
                </form>
            </div>
        
        </>
     );
}
 
export default ContactForm;