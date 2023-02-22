const ContactForm = () => {
     
    const handleForm = (e) => {
        e.preventDefault();

        alert("form submitted successfully!")

    }

    return ( 
        <>
            <div>
                <form onSubmit={handleForm} >
                    <div className="my-4">
                        <input className="input" type="text" name="firstname" placeholder="First Name" required />
                    </div>
                    <div className="my-4">
                        <input className="input" type="text" name="lastname" placeholder="Last Name" required />
                    </div>
                    <div className="my-4">
                        <input className="input" type="tel" name="phone" placeholder="Telephone Number.." required />
                    </div>
                    <div className="my-4">
                        <textarea className="input w-full" name="message" placeholder="Message" cols="30" rows="4"></textarea>
                    </div>
                    <button className="mt-4 px-4 py-3 rounded-lg bg-sky-500 w-full">
                        Submit
                    </button>
                </form>
            </div>
        
        </>
     );
}
 
export default ContactForm;