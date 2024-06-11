import Registration from "../Customhooks/Registration"

const Section = () => {

const {HandleSubmit,handleInputs} = Registration();

  return (
   <section>
     <div className='form'>
         <form onSubmit={HandleSubmit}>
                <div className='first'>
               
               <div className='Name'>
               <h4>Name</h4>
               <input type="text" onChange={e => handleInputs("name",e.target.value)}/>
               </div>
                    
                   <div>
                   <h4>Address</h4>
                  <input type="text" onChange={e => handleInputs("address",e.target.value)}/>
                   </div>
                  
                </div>

                    <h4>password</h4>
                    <input type="password" onChange={e => handleInputs("password",e.target.value)}/>

                <div>
                    <h4>Confirm</h4>
                    <input type="password" onChange={e => handleInputs("confirm",e.target.value)}/>
                </div>

                <button type="submit">Submit</button>
                  
         </form>
     </div>
   </section>
  )
}

export default Section