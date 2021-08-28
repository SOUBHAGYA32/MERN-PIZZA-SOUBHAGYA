import React from 'react'
import { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../owl.css'
export class Service extends Component {  

        render(){
            
            return(
                <div>
                    <div class='container banner' style={{"background":"url('images/Banner.jpg')"}} >      
                        <div className="row owl__title" style={{marginBottom: "20px"}} >      
                            <div class="col-sm-12">      
                               <h5 className="text-left font-weight-bold">EVERYDAY VALUE OFFERS BY - SOUBHAGYA </h5>
                            </div>      
                        </div>  
                    </div>
                    <div class='container-fluid' >            
                        <OwlCarousel items={3} className="owl-theme" loop nav margin={8} >  
                       
                            <div class="owl_item"> <img src="https://api.dominos.co.in/prod-olo-api/images/amazon_home_20210412.jpg" alt="pizza1image" /> </div>
                            <div class="owl_item"> <img src="https://api.dominos.co.in/prod-olo-api/images/Home_Paytm_20210519.jpg" alt="pizza2image" /> </div>
                            <div class="owl_item"> <img src="https://api.dominos.co.in/prod-olo-api/images/Home_airtel_30082020.jpg" alt="pizza2image" /> </div>
                            <div class="owl_item"> <img src="https://api.dominos.co.in/prod-olo-api/images/Home_Freecharge_20210405.jpg" alt="pizza2image" /> </div>
                            <div class="owl_item"> <img src="https://api.dominos.co.in/prod-olo-api/images/Dominos_Mobi_Home_20210503.jpg" alt="pizza2image" /> </div>
                            
                        </OwlCarousel>  
                    </div>    
                </div>
            )
        }
    
}    
export default Service  
