import React, { useEffect, useState } from "react";
import Cards from './Cards'
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white">
        <div className="mt-28 items-center justify-center text-center ">
          <h1 className="text-2xl  md:text-4xl">We're delighted to have you <span className="text-pink-500">Here! :)</span></h1>
            <p className="mt-8">"Whether you're a professional researcher or a science enthusiast, our extensive collection of journals and magazines will keep you informed on the latest trends and discoveries in every field of science."</p>

            <Link to={'/'}>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-5">Back</button>
            </Link>
            
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            book.map((item) =>( 
              <Cards key={item.id} item = {item} />
            ))
          }

        </div>
    </div>
    </>
  )
}

export default Course
