function Userss({name , age, image, job, props}){
   return(
      <>
      <h2>Username:{props.username} </h2>
      <img src={image} alt={name}></img>
      <h2>{job}</h2>
      <p>name: {name}</p>
      <p>age: {age}</p>
      </>
   );
}

export default Userss;