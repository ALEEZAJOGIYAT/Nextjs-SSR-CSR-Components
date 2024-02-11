import React from 'react'
import Footer from './footer';
import Header from './header';


export async function ServerComponent (){
    console.log('hello i am server component')
    let isServer = (typeof window === 'undefined')? false : true;
    console.log(isServer, 'is Server')
    let res = await fetch('http://195.35.45.131:4000/user?all=true')

    return(
        <>
        <div>
            <Header title = {'NeXtJS SSR'} />
            <section className="slider_section ">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="detail-box" >
                                <h1 style={{color:'black'}}> Server Side Rendered Component</h1>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
        </>
    )
}