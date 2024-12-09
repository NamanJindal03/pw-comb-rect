/* 
    file system module -> which is used to export and import data
*/
export default function Card({heading, text}){
    // console.log(Angadi.heading);
    // heading = 'a'; //never ever mutate it, not a good practice
    // text = 'z' //never ever mutate it not a good practive
    return (
      <>
        <h1 style={{color: 'red'}}>{heading}</h1>
        <p>{text}</p>
      </>
    )
  }