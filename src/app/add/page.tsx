"use client";
import { useSession } from "next-auth/react";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { title } from "process";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

// Inputs types
type INPUTES = {
  title: string;
  desc: string;
  price: number;
  catSlug: string;
};

type PRODUCTOPTION = {
  title: string;
  additionalPrice: number;
};

const AddPage = () => {
  const {data: session, status} = useSession();// Get user auth information and status
  const [inputs, setInputs] = useState<INPUTES>({// Input state to store product information
    title: "",
    desc: "",
    price: 0,
    catSlug: ""
  });
  const [option, setOption] = useState<PRODUCTOPTION>({// Option state to store product options
    title: "",
    additionalPrice: 0
  });
  const [options, setOptions] = useState<PRODUCTOPTION[]>([]);// Options state collect all options in one state
  const [file, setFile] = useState<File>();// File state to save Image

  const router = useRouter();// Create router instance for redirect
  // Make a loading
  if (status === 'loading') return <p className="p-4 lg:px-16 xl:px-20">Loading...</p>;
  // Check if user not authenticated or is not an admin
  if (status === "unauthenticated" || !session?.user.isAdmin) {
    router.push("/");
  };

  // Hadnle inputs change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  };

  // Handle options change
  const handleOption = (e: ChangeEvent<HTMLInputElement>) => {
    setOption(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  };

  // Handle change product image
  const handleChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files![0]);
  }

  // Upload product image
  const upload = async () => {
    // Check if there's no error
    if (!file) {
      toast.error('Please select a file first!');
      return;
    }
    // Create a FromData  and add to it the image file and the folder name
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "resturant");
    
    // Upload Image
    const cloudinaryURL = `https://api.cloudinary.com/v1_1/dhfkwyomq/image/upload`;
    let url: string | null = null;
    await fetch(cloudinaryURL, {
      method: "POST",
      body: data
    })
    .then(response => response.json())
    .then(responseData => {
      if(responseData.secure_url) {
        url = responseData.secure_url;
      } else {
        console.error('Upload failed', responseData);
      }
    })
    .catch(err => console.error('Error:', err));
    return url;
  }

  // Handle submit form
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const url = await upload();// Get product image url
      const res = await fetch("http://localhost:3000/api/products", {// Create a new product
        method: "POST",
        body: JSON.stringify({
          img: url,
          ...inputs,
          options
        })
      });
      const data = await res.json();
      router.push(`/product/${data.data[0].id}`);
    } catch (err) {
      console.log("Submit new product error, ", err);      
    }
  }

  return (
    <div className="p-4 lg:px-16 xl:px-20 flex items-center justify-center">
      <form className="flex flex-wrap gap-6" onSubmit={handleSubmit}>
        <h1 className="text-4xl mb-2 text-gray-600 font-bold">Add New Product</h1>
        <div className="w-full flex flex-col gap-2 ">
          <label className="text-sm cursor-pointer flex gap-4 items-center" htmlFor="file" >
            <Image src="/upload.png" alt="upload icon" width={30} height={20} />
            <span>Upload Image</span>
          </label>
          <input type="file" id="file" className="hidden" onChange={handleChangeImg} />
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <label className="text-sm">Title</label>
          <input onChange={handleChange} className="ring-1 ring-gray-300 py-2 px-4 rounded-sm placeholder:text-gray-400 outline-none" type="text" placeholder="Bella Napoli" name="title" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm">Description</label>
          <textarea onChange={handleChange} rows={3} className="ring-1 ring-gray-300 py-2 px-4 rounded-sm placeholder:text-gray-400 outline-none resize-none" placeholder="A timeless favorite with a twist, showcasing a thin crust topped with sweet tomatoes, fresh basil and creamy mozzarella." name="desc" />
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <label className="text-sm">Price</label>
          <input onChange={handleChange} className="ring-1 ring-gray-300 py-2 px-4 rounded-sm placeholder:text-gray-400 outline-none" type="number" placeholder="29" name="price" />
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <label className="text-sm">Category</label>
          <input onChange={handleChange} className="ring-1 ring-gray-300 py-2 px-4 rounded-sm placeholder:text-gray-400 outline-none" type="text" placeholder="pizzas" name="catSlug" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm">Options</label>
          <div className="flex gap-4">
            <input onChange={handleOption} className="ring-1 ring-gray-300 py-2 px-4 rounded-sm placeholder:text-gray-400 outline-none" type="text" placeholder="Title" name="title" />
            <input onChange={handleOption} className="ring-1 ring-gray-300 py-2 px-4 rounded-sm placeholder:text-gray-400 outline-none" type="number" placeholder="Additional Price" name="additionalPrice" />
            <button type="button" className="bg-gray-500 py-2 px-4 rounded-md text-white" onClick={() => setOptions(prevState => [...prevState, option])}>Add Option</button>
          </div>
          <div className="flex flex-wrap gap-4 mt-2">
            {options.map((opt) => (
              <div key={opt.title} className="py-2 px-3 rounded-md cursor-pointer bg-gray-200 text-slate-900"
                onClick={() =>
                  setOptions((prev) =>
                    prev.filter((item) => item.title !== opt.title)
                  )
                }
              >
                <span>{opt.title}</span>
                <span className="text-xs font-semibold ms-2 text-red-500"> (+$ {opt.additionalPrice})</span>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="bg-red-500 p-4 text-white w-48 rounded-md relative h-10 flex items-center justify-center" > Submit </button>
      </form>
    </div>
  )
}

export default AddPage