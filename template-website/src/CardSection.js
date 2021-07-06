import React from'react';
import Card from './Card';
const CardSection = () =>{
    let link1 = "https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    let link2 = "https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    let link3 = "https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    return(
        <div>

        <section className="contact bg-success " >
        <div className="container " >
          <h2 className="text-white" >
            We love new friends!
          </h2>
          <div className="row" style={{marginTop:"50px"}}>
            <div className="col-4">
              <Card titile ="BecannyTuts" button="Home Tutors" imageText= {link1}/>
            </div>
            <div className="col-4">
              <Card titile ="BecannyTuts" button="Home Tutors" imageText={link2}/>
            </div>
            <div className="col-4">
              <Card titile ="BecannyTuts" button="Home Tutors" imageText={link3}/>
            </div>
          </div>
        </div>
      </section>

        </div>
    );
}

export default CardSection;