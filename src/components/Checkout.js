import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



function Checkout  () {
  
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is Required!"),
    address: yup.string(),
    email: yup.string().matches(/^([A-Za-z])([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Valid E-mail required").required("Enter Mail ID ..."),
    phoneNumber:yup.number().min(10).max(10),
    city:yup.string(),
    zipCode:yup.string(),
    country:yup.string(),
    
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    
  };


return (

  <div class="flex flex-col items-center justify-center">
    <div id="form" className="block p-8 rounded shadow-lg max-w-md w-full mt-5 bg-slate-100 ">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className=" text-gray-800 text-medium font-semibold my-2 text-center text-lg">Billing</h2>
            <div className="flex flex-row">
              <div className="w-1/2 mr-1">
                <input
                  type="text"
                  placeholder="First Name"
                  className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
                  {...register("fullName")}
                />
              </div>
              <div className="w-1/2 mr-1">
                <input
                  type="text"
                  placeholder="Last Name"
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              />
              </div>
            </div>
            <br></br>
            <input
              type="text"
              placeholder="Email"
              {...register("email")}
              class="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 mb-5 bg-transparent outline-blue-600 shadow-sm"
            />
            <br></br>
            <input
              type="text"
              placeholder="Phone Number"
              {...register("phoneNumber")}
              class="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 mb-5 bg-transparent outline-blue-600 shadow-sm"
            />
            <br></br>
            <input
              type="text"
              placeholder="Address"
              {...register("address")}
              class="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 mb-5 bg-transparent outline-blue-600 shadow-sm"
            />
            <br></br>
            <div  className="flex flex-row ">
              <div  className="w-1/2 mr-1">
              <input
                type="text"
                placeholder="City"
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2  bg-transparent outline-blue-600 shadow-sm"
                {...register("city")}
              />
              </div>
            <br></br>
            <div id="lastName" className="w-1/2 mr-1">
              <input
                type="text"
                placeholder="Zip Code"
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2  bg-transparent outline-blue-600 shadow-sm"
              />
            </div>
            </div>
            <br></br>
            <input
              type="text"
              placeholder="Country"
              {...register("Country")}
              class="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 mb-5 bg-transparent outline-blue-600 shadow-sm"
            />
            <br></br>
          </form>
          <input
            type="button"
            value="Pay"
            className="bg-gray-800 w-full h-10 mt-5 cursor-pointer text-white  font-semibold rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 tex"
          />
      </div>    
  </div>
  );
};

export default Checkout;