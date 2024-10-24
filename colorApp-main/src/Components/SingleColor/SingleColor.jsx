import React,{useEffect,useState} from 'react'

const SingleColor = ({rgb,weight,index,hexColor}) => {
    const bcg = rgb.join(',');
    const hexValue = `#${hexColor}`
    const [alert, setAlert] = useState(false)
    useEffect(() => {
      const timeout = setTimeout(() => {
        setAlert(false)
      },2000)
      return () => clearTimeout(timeout)
    }, [alert])
    
  return (
   <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor :`rgb(${bcg})`}}
   onClick={()=>{
    setAlert(true)
    navigator.clipboard.writeText(hexValue)
   }}
   >
    <p className='percent-value'>{weight} %</p>
    <p className='color value'>{hexValue}</p>
    {alert && <p className='alert'>Copied to clipBoard</p>}
   </article>
  )
}

export default SingleColor
