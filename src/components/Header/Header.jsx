

const Header = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.imgur.com/b7Xy2bc.jpg)'}
        }>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Elevate Your Style with StyleIn</h1>
                        <p className="mb-5">Discover a World of Elegance and Comfort</p>
                        <button className="btn bg-[#B55B4E]">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;