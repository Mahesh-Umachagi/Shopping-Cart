function Contact(){
    return(
      // Basic Contact Details
        <>
        <div className=" flex items-center justify-center">
      <div className="p-8 rounded shadow-lg max-w-md w-full mt-3 bg-slate-100">
        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Email:</h3>
          <p className="text-gray-700">support@uttarashop.com</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Phone:</h3>
          <p className="text-gray-700">+91 999 3940 444</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Address:</h3>
          <p className="text-gray-700">1st Block, Rajaji Nagar, Bengaluru</p>
        </div>
      </div>
    </div>

        </>
    )
}

export default Contact