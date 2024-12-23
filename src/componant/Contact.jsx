function Contact() {
  return (
    <section className="xl:padding-l  wide:padding-r paddind-b bg-gray-100">
      <div className=" px-7 py-12  flex flex-col gap-5 ">
        <h1 className="text-4xl text-blue-700 text-center mb-4 font-mono">
          Contact Us
        </h1>
        <div className="flex flex-row items-center gap-4 justify-between">
          <input
            type="text"
            placeholder="Enter your Frist Name"
            className="outline-none flex-grow  py-4 px-3 border-blue-400 border-[2px] focus:border-blue-500 focus:border-[3px]"
          />
          <input
            type="text"
            placeholder="Enter your Last Name"
            className="outline-none  flex-grow py-4 px-3 border-blue-400 border-[2px] focus:border-blue-500 focus:border-[3px]"
          />
        </div>
        <div className="w-full ">
          <input
            type="email"
            placeholder="Enter your Email"
            className="outline-none w-full  py-4 px-3 border-blue-400 border-[2px] focus:border-blue-500 focus:border-[3px]"
          />
        </div>
        <div className="w-full h-[200px] bg-red-300 ">
          <textarea
            placeholder="Enter Your Massege"
            className=" outline-none w-full h-full  py-4 px-3  border-blue-400 border-[2px] focus:border-blue-500 focus:border-[3px] "
          />
          <div className="w-full mt-3 ">
            <button className="outline-none w-full hover:bg-blue-800  font-bold  bg-blue-700 text-white py-4 px-3 border-blue-100 ">
              Send Massege
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
