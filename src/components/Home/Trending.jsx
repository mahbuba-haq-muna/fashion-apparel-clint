

const Trending = () => {
    return (
        <div >
            <h1 className="text-center text-5xl font-bold my-10 ">Our Trending Products</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               <div>
                <img src="https://i.imgur.com/uPlFhVk.jpg" alt="" className="w-72 h-96" />
               </div>

               <div>
                <img src="https://i.imgur.com/Gpd8RxN.jpg" alt="" className="w-72 h-96"  />
               </div>
                
               <div>
                <img src="https://i.imgur.com/Bw1tk3s.jpg" alt="" className="w-72 h-96" />
               </div>

               <div>
                <img src="https://i.imgur.com/Z5itD0X.jpg" alt="" className="w-72 h-96" />
               </div>
            </div>
        </div>
    );
};

export default Trending;