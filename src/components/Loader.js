import Loader from 'react-loader-spinner';

const Load = () =>{
    return(
        <Loader
         type="Oval"
         color="#00BFFF" 
         height={200}
         width={200} 
         className="Loader"
        />
    )
}

export default Load;