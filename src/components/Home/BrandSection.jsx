import { brands } from "../../data/data";

export default function BrandSection({ className, sectionTitle, type }) {
  return (
    <div data-aos="fade-up" className={`w-full ${className || ""}`}>
      <div className="container-x mx-auto">
        {type !== 3 && (
          <div className=" section-title flex justify-between items-center mb-5">
            <div>
              <h1 className="sm:text-3xl text-xl font-600 text-qblacktext">
                {sectionTitle}
              </h1>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2">
         
        {brands.slice(4).map((elem,index)=>(
            <div key={index} className="item">
            <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
              <img  className="object-contain hover:object-cover duration-200 ease-in-out transition w-full h-full"
                src={elem.url}
                alt="logo"
              />
            </div>
          </div>
        ))}
  
        </div>
      </div>
    </div>
  );
}
