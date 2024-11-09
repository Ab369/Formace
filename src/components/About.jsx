function About(){

    return(
        <div className="about flex flex-col gap-4 bg-grey md:gap-0 text-zinc-600">
            <div className="top text-center text-xl border-t-dark border-b-dark border-2 border-solid py-8 bg-grey font-semibold mt-1 text-zinc-600 md:text-4xl md:py-10">
             ABOUT US
            </div>

            <div className="mid grid text-center gap-4 p-4 md:p-0 md:grid-cols-2 md:items-center">
                <div className="quote font-semibold md:border-r-2 text-zinc-600 md:border-dark md:border-solid md:text-2xl lg:text-4xl md:py-24 lg:py-32 md:px-20 lg:px-48 md:leading-relaxed lg:leading-relaxed">ELEGANT INTUITIVE DESIGNS CRAFTED BY PASSION</div>
                <div className="about-text md:px-10 md:text-xl md:font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum odit dolore culpa soluta ipsa perferendis dignissimos hic sapiente voluptates quas? Cum ipsa suscipit laboriosam minima.</div>
            </div>

            <div className="bottom text-center border-t-2 border-b-2 border-solid border-dark bg-cream1 px-2 py-8 md:text-2xl md:py-24 ">
              FROM CONCEPT TO DESIGN WE WORK CLOSELY WITH YOU TO BRING VISION TO LIFE
            </div>

        </div>
    )
}

export default About;