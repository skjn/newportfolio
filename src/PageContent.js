import ReactDOM from 'react-dom';
import React, { Component } from 'react';
//import './Page.css';
import './bootstrap-4.1.3-dist/css/bootstrap.min.css';

import img from './images'



function ThesisBody (){
    return(
      <div className="container mt-5">
        <h2 className="text-center">Smart Residential School</h2>
        <p className="text-center text-secondary mb-5">Architecture | Undergraduate Thesis | Academic | Individual</p>
      <div className="row border border-muted mx-auto text-muted">
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Program</strong> : Institutional</p>
          <p classname="mb-0"><strong>Site Area</strong> : 376,736 SQF</p>
          <p classname="mb-0"><strong>Total Built Area</strong> : 387,500 SQF</p>
          <p classname="mb-0"><strong>Location</strong> : Dwarka, NCR, India</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center ">
          <p classname="mb-0"><strong>Key research Areas</strong></p>
           <ul className="list-unstyled">
             <li>Inclusivity in Educational Spaces</li>
             <li>Sustainability</li>
             <li>Impact of technology on teaching methods</li>
           </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Tools</strong></p>
           <ul className="list-unstyled">
             <li>User Research</li>
             <li>Human Centred Design</li>
             <li>Story Mapping</li>
           </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Tools</strong></p>
           <ul className="list-unstyled">
             <li>AutoCAD</li>
             <li>Photoshop</li>
             <li>Sketchup</li>
           </ul>
        </div>
      </div>
      <hr/>
        <div className="row">
          <div className="ml-3">
            <h4>Design Brief</h4>
            <p className="text-justify">Education plays a vital role in development of a human being and the society as a whole. Technological advancements cause a major impact on teaching 
            methodologies worldwide and through this thesis an attempt has been made to understand how architecture can respond
            to the needs of these modern teaching methodologies.</p>
            <p className="text-justify">The built components include an academic block, auditorium, faculty housing, student hostels and associated facilities.
            An elevated walkway, an activity podium of sorts, is introduced, which connects all the built components and provides covered and shaded linkages. With an exploration
            into designing inspirational and healthy spaces for children, the thesis aims to create a school environment conducive to learning and holistic development of children.</p>
          </div>
          <div className="container">
          <hr className="mb-3"/>
            <h4>Site</h4>
            <div className="row">
            <div className="col-4 mb-3"><img src={img[10]} style={{maxWidth : "300px"}}/></div>
            <div className="col-8">
              <p className="text-justify">The selected site is in Dwarka, an upcoming residential neighbourhood in NCR. Being a corner plot, having 2 sides open allows for flexibility in design. 
                 The surroundings are planned as residential developments. <br/><br/>A commerical complex is planned on the other side of the road, due to which a special attention 
                 needs to be paid to vehicular circulation to prevent traffic congestion.A water canal with protected greens, adjacent to the site provides an open character  
                 to the school campus. <br/><br/>The greens, apart from livening up the view from classrooms, can act as extended green spaces for class outings/ play sessions.</p>
            </div>
            </div>
          </div>
          <div className="container">
          <hr className="mb-3"/>
            <h4>Floor Plans</h4>
            <div className="row">
            <div className="col-12">
              <p className="text-justify">Recessive stacking and internal courtyards have been used to change built mass scale, increase natural light and ventilation, and provide open terraces at various levels </p>
            </div>
            <div className="col-12 text-center"><img src={img[11]} style={{maxWidth:"80%"}}/></div>
            </div>
          </div>
          <div className="container">
          <hr className="mb-3"/>
            <h4>Conceptual Model</h4>
            <div className="row">
            <div className="col-12 text-center"><img src={img[12]} style={{maxWidth:"60%"}}/></div>
            <div className="col-12">
              <p><strong>1. Academic Block</strong></p>
              <p> Interconnected courts catering to different age groups maintain a continuity in opennes. Courts and Spaces of varying sizes and experiential quality cater to different needs. </p>
              <p><strong>2. Open Air Theatre</strong></p>
              <p> A huge OAT in the central court acts as the central hub for the school. All other spaces flow into this. </p>
              <p><strong>3. Hostels</strong></p>
              <p>Local open spaces merge into the larger field, providing varying degree of introvertness. Climatically oriented rooms end into stepped terrace gardens acting as breakout spaces overlooking the field. </p>
              <p><strong>4. Elevated Walkway</strong></p>
              <p>Naturally shaded elevated walkway connects the build mass, acting as an activity hub in itself. The walkway also provides a shaded path between the built masses to counter the unfavourable climatic conditions. </p>
              <p><strong>5. Faculty Housing</strong></p>
              <p>Centrally positioned faculty housing helps ensure the safety of students at all times.</p>
              <p><strong>6. Auditorium and Multipurpose Hall</strong></p>
              <p>The auditorium & multipurpose hall , although connected to the main academic block, can be operated seperately for events, without disturbing the rest of the school activities. </p>
            </div>
            </div>
          </div>
          <div className="container">
          <hr className="mb-3"/>
            <h4>Site Plan</h4>
            <div className="row">
            <div className="col-12 text-center mb-3"><img src={img[13]} style={{maxWidth:"50%"}}/></div>
            <div className="col-12">
              <p className="text-justify">An attempt has been made to utilise as much natural light and ventilation as possible through internal courts and proper orientation. Natural courtyard effect and passive cooling technologies with a few water 
                bodies reduce the energy consumption for airconditioning. Stacking and terraces facing towards the field provide a sense of connection by increasing visibility of the complex from different parts. Primary 
                wing gas been provided a seperate zone to allow it to function independently as required</p>
            </div>
            </div>
          </div>
          <div className="container">
          <hr className="mb-3"/>
            <h4>Sections</h4>
            <div className="row ml-1">
            <div className="col-12 text-center mb-3"><img src={img[14]} style={{maxWidth:"80%"}}/></div>
              <p ><strong>Section XX'</strong></p>
              <p>Naturally shaded walkway, which connects the academic block and the hostels, acts as an acitivity space in itself. It acts as the hub of connectivity and congregation. </p>
              <div className="col-12 text-center mb-3"><img src={img[15]} style={{maxWidth:"80%"}}/></div>
              <p><strong>Section YY'</strong></p>
              <p>Built mass of the academic block is broken by internal courts, which provide natural light and ventilation, and as small spillouts to break the monotony of the built. </p>
              <div className="col-12 text-center mb-3"><img src={img[16]} style={{maxWidth:"80%"}}/></div>
              <p><strong>Section ZZ'</strong></p>
              <p>Apart from the common football field, seperate smaller open greens are provided for different age groups, with a central sunken open air theatre acting as the hub for common activities.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function UdBody (){
    return(
      <div className="container mt-5">
        <h2 className="text-center">International Work Center</h2>
        <p className="text-center text-secondary mb-5">Urban Design | Academic | Group</p>
      <div className="row border border-muted mx-auto text-muted">
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Program</strong> : Institutional</p>
          <p classname="mb-0"><strong>Site Area</strong> : 376,736 SQF</p>
          <p classname="mb-0"><strong>Total Built Area</strong> : 387,500 SQF</p>
          <p classname="mb-0"><strong>Location</strong> : Dwarka, NCR, India</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center ">
          <p classname="mb-0"><strong>Key research Areas</strong></p>
           <ul className="list-unstyled">
             <li>Inclusivity in Educational Spaces</li>
             <li>Sustainability</li>
             <li>Impact of technology on teaching methods</li>
           </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Tools</strong></p>
           <ul className="list-unstyled">
             <li>User Research</li>
             <li>Human Centred Design</li>
             <li>Story Mapping</li>
           </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Tools</strong></p>
           <ul className="list-unstyled">
             <li>AutoCAD</li>
             <li>Photoshop</li>
             <li>Sketchup</li>
           </ul>
        </div>
      </div>
      <hr/>
        <div className="row">
          <div className="ml-3">
            <h4>Design Brief</h4>
            <p className="text-justify">The brief called for the design of a work centre with added complexes including a mall, a hotel, and service apartements. An attempt was made to zone the complex 
              in a manner that functioning of each building does not affect the other programmes negatively, but at the same time, making the built mass interact in such a manner 
              that the whole complex reads as a single unit. </p>
            <p className="text-justify">An elevated walkway was proposed that would connect walkways outside the site to office and mall directly at various levels. This was done to ensure a continous and uninterrupted 
              pedestrian movement. Vehicular penetration into the site was kept to a minimum. Vehicles had the option of parking on 
              the periphery, or going to the basement level.The mall was placed at the busiest part of the site, to create an image, and to attract footfall for the complex, whereas the 
              office complex and the hotel were placed at relatively intimate portions of the site, to give them the privacy they needed to function.</p>
              <div className="col-12"><img src={img[23]} style={{maxWidth : "100%"}}/></div>
          </div>
          <div className="container">
          <hr className="mb-3"/>
            <h4>Area Programme</h4>
            <div className="row mt-5">
            <div className="col-12 text-center"><img src={img[24]} style={{maxWidth : "80%"}}/></div>
            </div>
          </div>
          <div className="container">
          <hr className="mb-3"/>
            <h4>Design Directives</h4>
            <div className="row">
            <div className="col-12 justify-content-center">
              <p>Recessive stacking and internal courtyards have been used to change built mass scale, increase natural light and ventilation, and provide open terraces at various levels </p>
            </div>
            <div className="col-lg-4 md-6 sm-12">
            <p className="text-center"><strong>Courtyard Spaces</strong></p>
            <img src={img[27]} style={{maxWidth:"50%"}}/>
            <p className="text-justify"> Different types of introverted and extroverted courts are created to generate different user experiences and serve different functions in the various 
              typologies of buildings. The massing on the front of the site attempts to provide seclusion to internal spaces from heavy traffic, and create a bold visual image for the development as a whole.</p>
              <img className="justify-content-center" src={img[26]} style={{maxWidth:"80%"}}/>
            </div>
            <div className="col-lg-4 md-6 sm-12">
            <p className="text-center"><strong>Interfaces</strong></p>
            <img src={img[29]} style={{maxWidth:"50%"}}/>
            <p className="text-justify"> The zoning both internal and external has been designed in a manner that gives priority to the concept of ‘Street’ as a public space. Public functions of every 
            building spills over the connecting pathways and this interaction is equally responded to by the facing buildings. This creates synergy between different components of the site, generating an integrated user experience as a whole. </p>
              <img className="justify-content-center" src={img[28]} style={{maxWidth:"80%"}}/>
            </div>
            <div className="col-lg-4 md-6 sm-12">
            <p className="text-center"><strong>Paths</strong></p>
            <img src={img[31]} style={{maxWidth:"50%"}}/>
            <p className="text-justify"> Axes in form of streets is used as activity spaces at interfaces between different components of the site. The paths in two directions act as major axis for activity and movement within the site. 
              The staggered axis is maintained to instill a sense of curiosity in the viewer by hiding a small portion of what lies ahead. Intermittent plazas creates nodes and breaks the linearity of the axis.
</p>
              <img className="justify-content-center" src={img[30]} style={{maxWidth:"80%"}}/>
            </div>
            </div>
          </div>
          <div className="container">
          <hr className="mb-3"/>
            <h4>Site Plan</h4>
            <div className="row">
            <div className="col-12 text-center"><img src={img[32]} style={{maxWidth:"100%"}}/></div>
            </div>
          </div>
          <div className="container">
          <hr className="mb-3"/>
            <h4>Pedestrian Movement</h4>
            <div className="row">
            <div className="col-12 text-center"><img src={img[33]} style={{maxWidth:"100%"}}/></div>
            </div>
          </div>
          <div className="container">
          <hr className="mb-3"/>
            <h4>Elevations and Sections</h4>
            <div className="row">
            <div className="col-12 text-center"><img src={img[34]} style={{maxWidth:"100%"}}/></div>
            </div>
          </div>
          <div className="container">
          <hr className="mb-3"/>
            <h4>Physical and Digital Models</h4>
            <div className="row">
            <div className="col-12 text-center"><img src={img[35]} style={{maxWidth:"100%"}}/></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function OmaBody (){
    return(
      <div className="container mt-5">
        <h2 className="text-center">OMA - Office Management Application</h2>
        <p className="text-center text-secondary mb-5">Architecture | Undergraduate Thesis | Academic | Individual</p>
      <div className="row border border-muted mx-auto text-muted">
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Program</strong> : Institutional</p>
          <p classname="mb-0"><strong>Site Area</strong> : 376,736 SQF</p>
          <p classname="mb-0"><strong>Total Built Area</strong> : 387,500 SQF</p>
          <p classname="mb-0"><strong>Location</strong> : Dwarka, NCR, India</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center ">
          <p classname="mb-0"><strong>Key research Areas</strong></p>
           <ul className="list-unstyled">
             <li>Inclusivity in Educational Spaces</li>
             <li>Sustainability</li>
             <li>Impact of technology on teaching methods</li>
           </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Tools</strong></p>
           <ul className="list-unstyled">
             <li>User Research</li>
             <li>Human Centred Design</li>
             <li>Story Mapping</li>
           </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Tools</strong></p>
           <ul className="list-unstyled">
             <li>AutoCAD</li>
             <li>Photoshop</li>
             <li>Sketchup</li>
           </ul>
        </div>
      </div>
      <hr/>
        <div className="row">
          <div className="ml-3">
            <h4>Design Brief</h4>
            <p className="text-justify">Education plays a vital role in development of a human being and the society as a whole. Technological advancements cause a major impact on teaching 
            methodologies worldwide and through this thesis an attempt has been made to understand how architecture can respond
            to the needs of these modern teaching methodologies.</p>
            <p className="text-justify">The built components include an academic block, auditorium, faculty housing, student hostels and associated facilities.
            An elevated walkway, an activity podium of sorts, is introduced, which connects all the built components and provides covered and shaded linkages. With an exploration
            into designing inspirational and healthy spaces for children, the thesis aims to create a school environment conducive to learning and holistic development of children.</p>
          </div>
          <div className="container">
          <hr className="mb-3"/>
            <h4>Site</h4>
            <div className="row">
            <div className="col-12 mb-3"><img src={img[43]} style={{maxWidth : "100%"}}/></div>
            <div className="col-12 mb-3"><img src={img[44]} style={{maxWidth : "100%"}}/></div>
            <div className="col-12 mb-3"><img src={img[45]} style={{maxWidth : "100%"}}/></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function BitsBody (){
    return(
      <div className="container mt-5">
        <h2 className="text-center">BITS - Battle of the Wits</h2>
        <p className="text-center text-secondary mb-5">Architecture | Undergraduate Thesis | Academic | Individual</p>
      <div className="row border border-muted mx-auto text-muted">
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Program</strong> : Institutional</p>
          <p classname="mb-0"><strong>Site Area</strong> : 376,736 SQF</p>
          <p classname="mb-0"><strong>Total Built Area</strong> : 387,500 SQF</p>
          <p classname="mb-0"><strong>Location</strong> : Dwarka, NCR, India</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center ">
          <p classname="mb-0"><strong>Key research Areas</strong></p>
           <ul className="list-unstyled">
             <li>Inclusivity in Educational Spaces</li>
             <li>Sustainability</li>
             <li>Impact of technology on teaching methods</li>
           </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Tools</strong></p>
           <ul className="list-unstyled">
             <li>User Research</li>
             <li>Human Centred Design</li>
             <li>Story Mapping</li>
           </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Tools</strong></p>
           <ul className="list-unstyled">
             <li>AutoCAD</li>
             <li>Photoshop</li>
             <li>Sketchup</li>
           </ul>
        </div>
      </div>
      <hr/>
        <div className="row">
          <div className="ml-3">
            <h4>Design Brief</h4>
            <p className="text-justify">Education plays a vital role in development of a human being and the society as a whole. Technological advancements cause a major impact on teaching 
            methodologies worldwide and through this thesis an attempt has been made to understand how architecture can respond
            to the needs of these modern teaching methodologies.</p>
            <p className="text-justify">The built components include an academic block, auditorium, faculty housing, student hostels and associated facilities.
            An elevated walkway, an activity podium of sorts, is introduced, which connects all the built components and provides covered and shaded linkages. With an exploration
            into designing inspirational and healthy spaces for children, the thesis aims to create a school environment conducive to learning and holistic development of children.</p>
          </div>
          <div className="container">
          <hr className="mb-3"/>
            <h4>Site</h4>
            <div className="row">
            <div className="col-12 mb-3"><img src={img[46]} style={{maxWidth : "100%"}}/></div>
            <div className="col-12 mb-3"><img src={img[47]} style={{maxWidth : "100%"}}/></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function IllustrationsBody (){
    return(
      <div>
        hi Illustrations
      </div>
    )
  }
  
  function HousingBody (){
    return(
      <div className="container mt-5">
        <h2 className="text-center">Inclusive Housing</h2>
        <p className="text-center text-secondary mb-5">Architecture | Undergraduate Thesis | Academic | Individual</p>
      <div className="row border border-muted mx-auto text-muted">
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Program</strong> : Institutional</p>
          <p classname="mb-0"><strong>Site Area</strong> : 376,736 SQF</p>
          <p classname="mb-0"><strong>Total Built Area</strong> : 387,500 SQF</p>
          <p classname="mb-0"><strong>Location</strong> : Dwarka, NCR, India</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center ">
          <p classname="mb-0"><strong>Key research Areas</strong></p>
           <ul className="list-unstyled">
             <li>Inclusivity in Educational Spaces</li>
             <li>Sustainability</li>
             <li>Impact of technology on teaching methods</li>
           </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Tools</strong></p>
           <ul className="list-unstyled">
             <li>User Research</li>
             <li>Human Centred Design</li>
             <li>Story Mapping</li>
           </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
          <p classname="mb-0"><strong>Tools</strong></p>
           <ul className="list-unstyled">
             <li>AutoCAD</li>
             <li>Photoshop</li>
             <li>Sketchup</li>
           </ul>
        </div>
      </div>
      <hr/>
        <div className="row">
          <div className="ml-3">
            <h4>Design Brief</h4>
            <div className="col-lg-8-md-12-sm-12 ">
            <p className="text-justify">

                The brief was to design a community for 5000 families (units), catering to all the sections of the society.

                Percentage of housing alloted to each economic group was :
                <strong>
                Economically Weaker Section - 50%
                Low Income Group - 35%
                Middle Income Group - 10%
                High Income Group - 5%.
                </strong>
                 Due to the size of the site, it was divided into sectors, with each housing sector having housing for 3 income groups. HIG were alloted seperate zone for luxurious highrise towers </p>
            <p className="text-justify">The sectors had minimum vehicular penetration, and each sector was self sufficient in terms of   facilities and community greens.

                A Pedestrian pathway through the centre of the site was proposed, with housing sectors on either side of the pathway. The pathway acted as a    spillout for sectors to indulge in various daily and community activties. Shops/small scale  commercial facilities were porposed along the pathway to ensure that it remained active and lively.

                The monotony of the pathway was broken by larger openings called “Chowks” at regular intervals, which acted as places of rest and interaction along the long stretch.

                </p>
                </div>
                <div className="col-lg-4-md-12-sm-12"><img src={img[36]} style={{maxWidth:"100%"}} /></div>
          </div>
          <div className="container">
          <hr className="mb-3"/>
            <h4>Design Directives: Site Plan</h4>
            <div className="row ml-1">
            <p> <strong>Blocking Glare : Tilting the site</strong></p>
              <p className="text-justify">The movement grid is tilted by 15 degrees to cut glare on most pedestrian and vehicular paths and maximize on south sun.
              The shadow analysis of the pedestrian spine shows how a simple tilt can help in shading the avenue and making walking a more pleasant activity.</p>
            </div>
            <div className="col-12 mb-3"><img src={img[38]} style={{maxWidth : "100%"}}/></div>
            <div className="row ml-1">
            <p> <strong>Walkability : Restricting Width of Settlement</strong></p>
              <p className="text-justify">The maximum perpendicular distance from the pedestrian spine is limited to 230 metres to create a transit oriented , walkable setllement.

                  The major central pedestrian spine & 2 minor pedestrian paths on the edges are connected at multiple locations and shaded for pedestrians.</p>
            </div>
            <div className="col-12 mb-3"><img src={img[39]} style={{maxWidth : "100%"}}/></div>
            <div className="row ml-1">
            <p> <strong>Pedestrian Friendly : Restricting Vehicular Penetration</strong></p>
              <p className="text-justify">Major vehicular circulation has been kept on the edges of the settlement, which are connected through underground tunnels below chowks.

                  This creates a friendly pedestrian environment, and seperates & protects the pedestrian activities from vehicular traffic.

                  Parking has been provided on the edges of the sectors</p>
                              </div>
            <div className="col-12 mb-3"><img src={img[40]} style={{maxWidth : "100%"}}/></div>
            </div>
            <div className="container">
          <hr className="mb-3"/>
            <h4>Design Directives: Sector Plan</h4>

            <div className="col-12 mb-3"><img src={img[41]} style={{maxWidth : "100%"}}/></div>
            <div className="col-12">
              <p><strong>1. EWS Housing</strong></p>
              <p> EWS housing has a clustered arrangement, to enhance community feeling and generate common active courtyards. </p>
              <p><strong>2. LIG Housing</strong></p>
              <p> also enjoy connected greens, with a central park predomanantly catering to a cluster.<br/>
              A variation of LIG housing is proposed along the pedestrian axis. These houses are designed to have a shop on the ground floor, which directly adds to the experience along the pedestrian axis.
              </p>
              <p><strong>3. MIG Housing</strong></p>
              <p>Stacked as G+3 towers, MIG enjoys connected open greens of varying scales.</p>
              <p><strong>4. Pedestrian Axis</strong></p>
              <p>out the setlement, acts as a hub of activities and events. It serves various functions like toddler parks, jogging & cycling tracks, shops and eating outlets, catering to every age group. </p>
              <p><strong>5. Organization of Greens</strong></p>
              <p>Careful attention has been given to structuring and flow of green spaces in each sector. An attempt has been made to ensure that each dwelling unit has proximity to lively open space
                  Common greens have community services which cater to all the economic groups.Hierarchy of greens is maintained so that various functions can be catered to. Use of well defined pathways and open spaces ensure a holistic and integrated community experience.</p>
            </div>
            </div>
        </div>
      </div>
    )
  }
  
  function NgBody (){
    return(
      <div className="container mt-5">
      <h2 className="text-center">Namami Gange</h2>
      <p className="text-center text-secondary mb-5">Urban Design | Morphogenesis | Professional | Morphogenesis Team</p>
    <div className="row border border-muted mx-auto text-muted">
      <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
        <p classname="mb-0"><strong>Program</strong> : Institutional</p>
        <p classname="mb-0"><strong>Site Area</strong> : 376,736 SQF</p>
        <p classname="mb-0"><strong>Total Built Area</strong> : 387,500 SQF</p>
        <p classname="mb-0"><strong>Location</strong> : Dwarka, NCR, India</p>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center ">
        <p classname="mb-0"><strong>Key research Areas</strong></p>
         <ul className="list-unstyled">
           <li>Inclusivity in Educational Spaces</li>
           <li>Sustainability</li>
           <li>Impact of technology on teaching methods</li>
         </ul>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
        <p classname="mb-0"><strong>Tools</strong></p>
         <ul className="list-unstyled">
           <li>User Research</li>
           <li>Human Centred Design</li>
           <li>Story Mapping</li>
         </ul>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-3 mt-3 text-center">
        <p classname="mb-0"><strong>Tools</strong></p>
         <ul className="list-unstyled">
           <li>AutoCAD</li>
           <li>Photoshop</li>
           <li>Sketchup</li>
         </ul>
      </div>
    </div>
    <hr/>
      <div className="row">
        <div className="ml-3">
          <h4>Design Brief</h4>
          <div className="col-12 mb-3 text-center"><img src={img[18]} style={{maxWidth : "100%"}}/></div>
          <p>The brief included redevelopment of Ghats and Crematoriums along the Ganges, between Allahabad and Varanasi. The aim was to improve the condition of the river and 
            control pollution. A large part of Indian population depends on the Ganges for their daily activities and livelihood.</p>
          <p>One major source of pollution identified was the traditional cremations along the river. The redevelopment also included 
            building efficient and cleaner cremation systems, apart from redeveloping eroded and de-funct ghats with better construction techniques 
            and providing community spaces along the river with infrastructure for public facilities. Large data sets of usage patterns and footfall
            along various ghats were studied to come up with optimal modular designs.</p>
        </div>
        <div className="container">
        <hr className="mb-3"/>
          <h4>Understanding the Scope</h4>
          <div className="row">
          <div className="col-12 mb-3 text-center"><img src={img[19]} style={{maxWidth : "100%"}}/></div>
          <div className="col-12">
            <p>A total of 33 major ghats and 20 major crematoriums were selected to redevelop, over a stretch of 210 KM along the Ganges.
              The scale of the selected ghats varied from the Kumbh Mela to 4-5 visitors per day. Kumbh Mela -“World's largest congregation of religious pilgrims“
              An estimated 120 million people visited Maha Kumbh Mela in 2013 in Allahabad over a two-month period.
              An estimated 30 million visited in a single day on the occasion of Mauni Amavasya.</p>
          </div>
          </div>
        </div>
        <div className="container">
        <hr className="mb-3"/>
          <h4>Goals</h4>
          <div className="row">
          <div className="col-12 text-center"><img src={img[20]} style={{maxWidth:"80%"}}/></div>
          </div>
        </div>
        <div className="container">
        <hr className="mb-3"/>
          <h4>General Strategies</h4>
          <div className="row">
          <div className="col-12 text-center"><img src={img[21]} style={{maxWidth:"80%"}}/></div>
          </div>
        </div>
        <div className="container">
        <hr className="mb-3"/>
          <h4>Modular Layout of Ghats</h4>
          <div className="row">
          <div className="col-12 text-center mb-3"><img src={img[22]} style={{maxWidth:"80%"}}/></div>
          </div>
        </div>
      </div>
    </div>
  )
  }
  
  function DfhBody (){
    return(
      <div>
        hi DFH
      </div>
    )
  }
  
  function SkjnBody(){
    return(
      <div>
        hi Skjn
      </div>
    )
  }
  export {OmaBody};
  export {UdBody};
  export {HousingBody};
  export {IllustrationsBody};
  export {SkjnBody};
  export {DfhBody};
  export {NgBody};
  export {BitsBody};
  export default ThesisBody;
