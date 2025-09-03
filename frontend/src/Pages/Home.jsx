import  Logo from "src/Assets/Images/logo.jpg"
function Home() {
    return  <div className="flex flex-col items-center justify-center gap-40 h-[100vh]">
            <div className="h-40 w-40" >
                <img className="w-full h-full" src={Logo} alt="logo" />
            </div> 
            <div className="flex justify-around items-center gap-16 text-2xl">
                <div className="w-2/4 text-center font-semibold basis-1/2">
                    <h1 className="text-white text-3xl tracking-widest leading-normal">Book Shelf
                        <br />
                        <span className="text-warning">Your Personal Library and social networks for book</span>
                    </h1>
                </div> 
                <div>
                    <button className="btn btn-primary rounded-md px-5 py-2 text-xl">Register</button>
                     <button className="btn btn-warning mx-3 rounded-md px-5 py-2 text-xl">Login</button>
                </div>

            </div>
        </div>
}

export default Home; 