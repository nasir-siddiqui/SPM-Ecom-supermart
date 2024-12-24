import { categorySection } from "../constant/index"





const Category = () => {
    return (
        <>
        <div className="flex " >
            <div className="grid grid-cols-4 lg:grid-cols-8 ">
                {categorySection.map((item, index) => (
                    <div key={index} className=" p-4 border flex flex-col items-center justify-center">
                        <a href={item.href}>
                            <img className="w-[50px]" src={item.img} alt={item.label} />
                        </a>
                        <span className="text-sm">{item.label}</span>
                    </div>    
                ))}
            </div>
        </div>

        </>
    )
}

export default Category