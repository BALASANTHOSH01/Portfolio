
const Contact = () => {
  return (
    <div className="block p-5 px-8 rounded-[10px] bg-white mx-auto sm:w-[90%] w-[40%] my-16 mb-24">
        <div className="flex flex-col">
            <h1 className="text-center text-2xl font-bold my-3 ">Contact Me</h1>
            <label htmlFor="name">Name :</label>
            <input type="text" placeholder="name" id="name" className="p-2 border border-gray-400 rounded-[10px] focus:outline-none"/><br>
            </br>

            <label htmlFor="email">Email :</label>
            <input type="email" placeholder="email" id="email" className="p-2 border border-gray-400 rounded-[10px] focus:outline-none"/><br>
            </br>

            <label htmlFor="password">Password :</label>
            <input type="password" placeholder="password" id="password" className="p-2 border border-gray-400 rounded-[10px] focus:outline-none"/><br>
            </br>

            <label htmlFor="message">Message :</label>
            <textarea cols={5} rows={5} className="p-2 border border-gray-400 rounded-[10px] focus:outline-none mb-2" placeholder="message"></textarea>
        </div>
    </div>
  )
}

export default Contact;