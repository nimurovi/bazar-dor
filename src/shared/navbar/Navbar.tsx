 
import Image from 'next/image';
  
const NavbarPage = () => {
    const date = new Date().toLocaleDateString("en-US", {
        dateStyle: "full",
    });
    return (
        <div className="container mx-auto flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex items-center gap-3">
                <Image src="/logo-icon.png" className='border rounded p-3 bg-green-500'  alt="Logo" height={50} width={50} />
                <div>
                    <h1>Bazar Dor</h1>
                    <p>{date}</p>
                </div>
            </div>
            <div className="flex gap-2">
                <button className='btn'>Sign In</button>
                <button className='btn btn-active btn-success'>Sign Up</button>
            </div>
        </div>
    );
};

export default NavbarPage;