import React,{useEffect,useState} from 'react'
import NavProfile from '../components/Nav/NavProfile';
//import axios from ''
export default function Profile(){
   
        const [data,setData]= useState({
                success:true,
                id:"",
                username:"",
                photo:""
        })
         function changeState(change)
        {
                setData({...data,success:change})
        }

        useEffect(()=>{
                
                async function Fetching(){
                                       if(window.localStorage.getItem('peticiongo')==='ok'){
                                                const request=await  fetch("https://oauth2examplefirst.herokuapp.com/auth/login/success", {credentials: "include"});
                                                let data_request=request.status === 200? await request.json(): "failed to authenticate user";
                                                console.log(data_request)
                                                if('user' in data_request && 'success' in  data_request)
                                                {
                                                        window.localStorage.setItem('autorizado','go');
                                                        const {success,user:{_id,username,photo}}=data_request;
                                                        setData({                                                                
                                                                success,
                                                                id:_id,
                                                                username,
                                                                photo
                                                        });
                                                }     
                                        }
                                        else{
                                                setData({                                                                
                                                        success:false,
                                                        id:"",
                                                        username:"",
                                                        photo:""
                                                });
                                        }
                                }
                Fetching();
                
                // if(window.localStorage.getItem('peticiongo')==='ok'){
                //         fetch("https://oauth2examplefirst.herokuapp.com/auth/login/success", {
                //                 method: "GET",
                //                 credentials: "include",
                //                 headers: {
                //                         "Accept": "*/*",
                //                         //"Content-Type": "application/json",
                //                         "Access-Control-Allow-Credentials": true
                //                         //"Access-Control-Allow-Origin":"*"
                //                 }
                //                 })
                //               .then(response => {
                //                 console.log("transform")
                //                 if (response.status === 200) return response.json();
                //                 throw new Error("failed to authenticate user");
                //               })
                //               .then(async  (responseJson) => {      
                //                 console.log("htop-reponse ")
                //                 if('user' in responseJson && 'success' in  responseJson)
                //                 {
                //                         window.localStorage.setItem('autorizado','go');
                //                         const {success,user:{_id,username,photo}}=responseJson;
                //                         await setData({
                //                                 ...data,
                //                                 success,
                //                                 id:_id,
                //                                 username,
                //                                 photo
                //                         });
                //                 }
                //                 })

                //               .catch(error => {
                //                 console.log("errortop ",error);
                //               });
                //         }
                //         else{
                //                 setData({...data,success:false}) 
                //         }

        },[]);
    

                        return (
                                <div>
                                {
                                        data.success?<></>:window.location.href='/'
                                }
                                <NavProfile changeState={changeState} photo={data.photo}/>
                                
                               
                                {/* <NavProfile/>
                                {
                                 this.state.success === false
                                 ?<Redirect to='/session'/>
                                :<div></div> */}
                                
                                   <p>
                                    Bievenido : {data.username}
                                    </p>
                                    <img
                                        src={data.photo}
                                        alt='Go'
                                    />    
                                </div>
                        )
                }
    


// export default class Profile extends Component {
//         constructor(){
//                 super();
//                 this.state={
//                         success:true,
//                         id:"",
//                         username:"",
//                         photo:""
//                 };
                
//         }
//         componentDidMount()
//         {  
//                 // (async()=>{
//                 //         const  request=await fetch('http://localhost:5000/auth/login/success',{
//                 //                         method: "GET",
//                 //                         credentials: "include",
//                 //                         headers: {
//                 //                           Accept: "application/json",
//                 //                           "Content-Type": "application/json",
//                 //                           "Access-Control-Allow-Credentials": true
//                 //                         }});
//                 //         const data=await  request.json();
                        
//                 //         console.log(data);
//                 // })();
//                 if(window.localStorage.getItem('peticiongo')==='ok'){
//                 fetch("https://oauth2examplefirst.herokuapp.com/auth/login/success", {
//                         method: "GET",
//                         credentials: "include",
//                         headers: {
//                           //Accept: "application/json",
//                           "Content-Type": "application/json",
//                           "Access-Control-Allow-Credentials": true
//                         }
//                       }).then(response => {
//                         if (response.status === 200) return response.json();
//                         throw new Error("failed to authenticate user");
//                       })
//                       .then(async  (responseJson) => {      
//                         //window.localStorage.setItem('autorization','ok');

//                         // if(window.localStorage.getItem('autorization')==='no')
//                         // {
//                         //  return  window.location.href='/';
//                         // }
//                         console.log("htop-reponse ",responseJson)
//                         if('user' in responseJson && 'success' in  responseJson)
//                         {
//                                 await  window.localStorage.setItem('autorizado','go');
//                                 const {success,user:{_id,username,photo}}=responseJson;
//                                 await this.setState({
//                                         success,
//                                         id:_id,
//                                         username,
//                                         photo
//                                 });
//                         }
//                         })
//                       .catch(error => {
//                         console.log("errortop ",error);
//                       });
//                 }
//                 else{
//                      this.setState({
//                              success:false
//                      });   
//                 }
//         }
//         async changeState(change)
//         {
//               await  this.setState({
//                         success:change
//                 });
//         }
//         render() {
//                 return (
//                         <div>
//                         <NavProfile changeState={this.changeState.bind(this)} photo={this.state.photo}/>
//                         {
//                                 this.state.success?<></>:window.location.href='/'
//                         }
                       
//                         {/* <NavProfile/>
//                         {
//                          this.state.success === false
//                          ?<Redirect to='/session'/>
//                         :<div></div> */}
                        
//                            <p>
//                             Bievenido : {this.state.username}
//                             </p>
//                             <img
//                                 src={this.state.photo}
//                                 alt='Go'
//                             />    
//                         </div>
//                 )
//         }
// }

