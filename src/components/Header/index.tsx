import Image from "next/image";
const Header = () => {
    return (
        <div className="h-32 w-full bg-background-100 flex px-10">
            <div className="flex max-w-[1392px]">
                <div className="flex items-center gap-4">
                    <div className="flex items-start">
                        <Image 
                            src="/assets/images/logo.jpg" 
                            alt="logo"
                            width={90}
                            height={90}
                            className="rounded-full"
                            />
                    </div>
                    <div className="font-rowdis text-2xl font-bold">
                        PSA-YEG Talent Acquisition System
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;