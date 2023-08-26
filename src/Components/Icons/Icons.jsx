import React, { useContext } from 'react';
import { FaGithub,FaFacebookF,FaInstagram,FaGoogle,FaTwitter} from 'react-icons/fa';
import { AuthContext } from '../../Pages/AuthProvider/AuthProvider';

const Icons = () => {
    const {githubUser , googleUser, facebookUser } = useContext(AuthContext)


 // githubUser authenticaion
    const handleGithubUser =()=>{
      githubUser()
     .then(result=>{
            const user = result.user 
             console.log(user)
            })
      .catch(error=>console.log(error))

    }

// Google authentication 
  const handleGoogleUser = ()=>{
       googleUser()
       .then(result=>{
        const user = result.user
        console.log(user)
         })
        .catch(error=>console.log(error))
    
    }

    // facebook authentication 
   const handlefacebookUser = ()=>{

    facebookUser()
    .then(result=>{
       const  user = result.user 
       console.log(user)
    })
    
    .catch(err=>console.log(err))
    
          
   }


    return (
        <div>
            <div className="divider mt-0 mb-5 text-2xl">Or</div>
        <div className='flex justify-center'>
     <button onClick={handleGithubUser} className='mx-3 w-[45px] p-2 h-[45px]  bg-black rounded-full text-white hover:bg-orange-700'>
      <FaGithub size={30}/> 
     </button> 
     <button onClick={handleGoogleUser} className='mx-3 w-[45px] p-2 h-[45px]  bg-black rounded-full text-white hover:bg-orange-700'>
      <FaGoogle size={30}/>
       </button>
     <button onClick={handlefacebookUser} className='mx-3 w-[45px] p-2 h-[45px]  bg-black rounded-full text-white hover:bg-orange-700 '>
      <FaFacebookF size={30}/>
      </button>
     <button className='mx-3 w-[45px] p-2 h-[45px]  bg-black rounded-full text-white hover:bg-orange-700'>
      <FaInstagram size={30}/>
     </button>
     <button className='mx-3 w-[45px] p-2 h-[45px]  bg-black rounded-full text-white hover:bg-orange-700'>
      <FaTwitter size={30}/>
     </button>
 
        </div>
    </div>
    );
};

export default Icons;