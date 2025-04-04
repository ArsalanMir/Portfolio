import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

function Footer(){
    return(
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <div className="flex flex-col md:flex-row lg:space-x-12 items-center mb-4">
                    <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold mb-2">Arsalan</h3>
                    <p className="text-gray-400">Learning Mern Stack front-end is almost completed </p>
                    </div>
                    <div className="flex-1 w-full">
                        <form className="flex items-center justify-center">
                        <input type="email" className="w-full p-3 rounded bg-gray-800 border-t-stone-50 " placeholder="Your Email" />
                        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded" >Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="broder-t broder-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} Arsalan. All rights reserved.
                    </p>
                    <div className="flex space-x-4 my-4 md:my-0">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaInstagram/>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaLinkedin/>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaGithub/>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaFacebook/>
                        </a>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            Privacy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            Terms of service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )

}
export default Footer
