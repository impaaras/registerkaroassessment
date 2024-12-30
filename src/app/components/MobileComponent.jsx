import Image from "next/image";
import mobileImage from "../images/mobile.png";
export function MobileComponent() {
  return (
    <section className="bg-[#1C4670] text-white  px-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Manage Your Services by your Mobile Phone
          </h2>
          <p className="text-gray-300 mb-8">
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress.
          </p>

          <div className="space-y-4">
            <h3 className="font-medium">Get the App</h3>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors">
                <img src="/apple.svg" alt="App Store" className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-medium">App Store</div>
                </div>
              </button>

              <button className="bg-white text-black px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors">
                <img src="/google.svg" alt="Google Play" className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="relative h-[600px] hidden md:block overflow-hidden">
          <div className="absolute right-0 top-0">
            <Image
              src={mobileImage}
              width={700}
              height={600}
              className="object-cover max-w-full max-h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
