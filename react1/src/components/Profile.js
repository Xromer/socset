import React from 'react';


const Profile = () => {   
    return ( 
    <div className='content'>
        <div>
          <img className = "image" src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"/>
        </div>
        <div className="profile">
          <div clasName = "myphoto">
            <img  className = "logo2" src="https://logopond.com/logos/b7b61dcf7874fe5b8e97f9b00501a6ca.png"/>
          </div>
          <div className = "aboute_me">
            Opisanie
          </div>
        </div>
        <div>
          my posts        
          <div>
             New post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>

    </div>
    );
  }
 
export default Profile;