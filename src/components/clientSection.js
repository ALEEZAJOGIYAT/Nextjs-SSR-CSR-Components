'use client'

import Image from "next/image";
import React from "react"

const ClientSection = () => {
    return(
        <>

        <section className="recipe_section layout_padding-top">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                    CSR 
                    </h2>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4 mx-auto">
                    <div className="box">
                        <div className="img-box">
                        <Image src="/images/ui-interactive.jpg" className="box-img" alt="" height={20} width={20}/>
                        </div>
                        <div className="detail-box">
                        <h4>
                            Browser Interacts UI
                        </h4>
            
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mx-auto">
                    <div className="box">
                        <div className="img-box">
                        <Image src="/images/client4.png" className="box-img" alt="" height={20} width={20}/>
                        </div>
                        <div className="detail-box">
                        <h4>
                            API Expose
                        </h4>
            
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 mx-auto">
                    <div className="box">
                        <div className="img-box">
                        <Image src="/images/client2.jpg" className="box-img" alt="" height={20} width={20}/>
                        </div>
                        <div className="detail-box">
                        <h4>
                            Dinner
                        </h4>  
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="client_section layout_padding">
        
        </section>
        </>
    )

}


export default ClientSection;