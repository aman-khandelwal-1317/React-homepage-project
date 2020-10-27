import React from "react" ;
import ExpertDataCard from "../components/ExpertDataCard" ;
import data from "../components/data/ExpertData.json" ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;

class HomePage extends React.Component{


    renderExpertData(data){
        const singleData =  data.map((expertData) => {
            return (
             
               < ExpertDataCard expertData = {expertData}/>
             
            )
          })
          return singleData ;
        }
    
    render() {

        return (

            <div id="bodydiv">
             <header>
             <nav class="main-nav">

                  <div class="logo navbar-brand">
                  <a href=""> Logo</a>
                  </div>
                   <div class="options">
                   <a className="dashboard " href="/">Dashboard</a>
                   <a className="expert active" href="/">Find Experts</a>
                  <a className="discussion" href="/">Discussion</a>
                   </div>
                   <div class="icons">
                   <a className="ic1" href="/"><FontAwesomeIcon  icon="bell" /></a>
              <a className="ic2" href=""><FontAwesomeIcon  icon="envelope" /></a>
                   </div>
    
           
             </nav>
             </header>
            
             <div id="main">
               <aside className="aside-container">        
                    
                 <div className="filters">
                     <ul>
                         <h5>
                         Filters
                         </h5>
                     </ul>
                
                 </div>
                
                 <div className="card" >
                      <div className="aside-card">
                    <div className="expertise">
                        <h6>Expertise</h6>
                    <div>
                   <select 
                   class="selectpicker" 
                   data-live-search="true" 
                   multiple title="Search here ..." 
                   data-width="250px"
                   data-selected-text-format="count > 2">
                      
                  <option data-content="<span class='badge badge-success'>Relish</span>">Branding1</option>
                  <option data-content="<span class='badge badge-success'>Relish</span>">Branding2</option>
                  <option data-content="<span class='badge badge-success'>Relish</span>">Branding3</option>
                  </select>
                   </div>
                    </div>
                  

                     <div className="focus-area">
                         <h6>Focus Area</h6>
                     <div>
                   <select 
                   class="selectpicker" 
                   data-live-search="true" 
                   multiple title="Search here ..." 
                   data-width="250px"
                   data-selected-text-format="count > 2">
                      
                  <option data-content="<span class='badge badge-success'>Relish</span>">Focusarea</option>
                  <option data-content="<span class='badge badge-success'>Relish</span>">Focusarea</option>
                  <option data-content="<span class='badge badge-success'>Relish</span>">Focusarea</option>
                  </select>
                   </div>
                     </div>
                  
                     <div className="ratings">
                    <h6>Ratings</h6>
                    <div>
                        <div>
                        <input className="ratings-checkbox" type="checkbox"></input>
                          <span className="star-span"><FontAwesomeIcon icon="star" /></span>
                          <span className="star-span"><FontAwesomeIcon icon="star" /></span>
                          <span className="star-span"><FontAwesomeIcon icon="star" /></span>
                          <span className="star-span"><FontAwesomeIcon icon="star" /></span>
                         <input className="ratings-checkbox" type="checkbox"></input>
                         <span className="star-span"><FontAwesomeIcon icon="star" /></span>
                         <span className="star-span"><FontAwesomeIcon icon="star" /></span>
                         <span className="star-span"><FontAwesomeIcon icon="star" /></span>
                        </div>
                 <div>
                 <input className="ratings-checkbox" type="checkbox"></input>
                 <span className="star-span"><FontAwesomeIcon icon="star" /></span>
                         <span className="star-span"><FontAwesomeIcon icon="star" /></span>
                 <input className="ratings-checkbox" type="checkbox"></input>
                 <span className="star-span"><FontAwesomeIcon icon="star" /></span>
                 </div>
                 
                    
                    </div>
                </div>

                <div className="price">
                    <h6>Price</h6>
                    <div>
                 <div>
                 <input className="ratings-checkbox" type="checkbox"></input>
                 <span>Free</span>
                 </div>
                <div>
                <input className="ratings-checkbox" type="checkbox"></input>
                <span>Less than $25</span>
                </div>
               <div>
               <input className="ratings-checkbox" type="checkbox"></input>
                <span>$25-$50</span>
               </div>
                <div>
                <input className="ratings-checkbox"  type="checkbox"></input>
                <span>$50-$100</span>
                </div>
                <div>
                <input className="ratings-checkbox" type="checkbox"></input>
                 <span>More than $100</span>
                </div>
      
    
                    </div>
                </div>

   
    
    
</div>

</div>
                
                 
             </aside>
             <article className="article"> 
                 <div class="article-title">
                    
                        <h5>Featured Experts</h5>
                        <button class="btn btn-light  border border-dark">Best Match</button>
                    
                 </div>
                
                 {
            this.renderExpertData(data)
                 }
               
                
                 </article>   
            </div>
          </div>
            
        )
    }

}

export default HomePage ;