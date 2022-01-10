import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'
export default function Another() {
    const [count, setcount] = useState(1)
    const [number, setnumber] = useState(1)
    const [value, setvalue] = useState(1)

    function myfun(){
        return count*200
    }
    function myfunny(){
        return number*150
    }
    function myfunz(){
        return value*250
    }
    const placedorder = ()=>{
        return alert('your order is placed ')
    }
    return (
        <>
           <div className="container">
  <div className="row">
    <div className="col">
      <div className="card" style={{width:"18rem"}}>
  <img src="https://media.istockphoto.com/photos/cheese-burger-with-bacon-on-black-dark-background-picture-id1295796231?b=1&k=20&m=1295796231&s=170667a&w=0&h=lipbuWnWZE_-ScipwtVamsug7sd4j6hxiIUN0PkwWD8=" className="card-img-top" alt="burger"/>
  <div className="card-body">
    <h5 className="card-title">Hamburger</h5>
    <p className="card-text">Price : 200</p>
    <h1>{count}</h1>
    <h3>{myfun()}</h3>
    <a href ="#"  className="btn btn-primary"><FontAwesomeIcon icon={faPlus} /><button onClick={()=>{setcount(count+1)}} style={{marginLeft:'10px'}}>Add</button></a>
    <a href="#"  style = {{marginLeft:'15px'}}className="btn btn-primary"><FontAwesomeIcon icon ={faMinus} /><button  onClick={()=>{setcount(count-1)}} style={{marginLeft:'10px'}}>Sub</button></a>
    <button style={{marginTop:'10px', backgroundColor:'green'}} type='submit' onClick={placedorder}>placed</button>
  </div>
</div>
    </div>
    <div className="col">
      <div className="card" style={{width:"18rem"}}>
  <img src="https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?b=1&k=20&m=938742222&s=170667a&w=0&h=HyfY78AeiQM8vZbIea-iiGmNxHHuHD-PVVuHRvrCIj4=" className="card-img-top" alt="burger"/>
  <div className="card-body">
    <h5 className="card-title">Pizza</h5>
    <p className="card-text">Price : 150</p>
    <h1>{number}</h1>
    <h3>{myfunny()}</h3>
    <a href="#" className="btn btn-primary"><FontAwesomeIcon icon={faPlus} /><button onClick={()=>{setnumber(number+1)}} style={{marginLeft:'10px'}}>Add</button></a>
    <a href="#" style = {{marginLeft:'15px'}} className="btn btn-primary"><FontAwesomeIcon icon={faMinus} /><button onClick={()=>{setnumber(number-1)}} style={{marginLeft:'10px'}}>sub</button></a>
    <button style={{marginTop:'10px', backgroundColor:'green'}} type='submit' onClick={placedorder}>placed</button>
  
  </div>
</div>
    </div>
    <div className="col">
      <div className="card" style={{width:"18rem"}}>
  <img src="https://media.istockphoto.com/photos/cola-with-a-large-splash-isolated-on-blue-picture-id157476159?b=1&k=20&m=157476159&s=170667a&w=0&h=8ErZIAVchr5TQ55x_sHWIfl34NtivmOr96tr72u0w7U=" className="card-img-top" alt="burger"/>
  <div className="card-body">
    <h5 className="card-title">Coldrink</h5>
    <p className="card-text">Price: 250</p>
    <h1>{value}</h1>
    <h3>{myfunz()}</h3>
    <a href="#" className="btn btn-primary"><FontAwesomeIcon icon={faPlus} /><button onClick={()=>{setvalue(value+1)}} style={{marginLeft:'10px'}}>Add</button></a>
    <a href="#" style = {{marginLeft:'15px'}} className="btn btn-primary"><FontAwesomeIcon icon={faMinus} /><button onClick={()=>{setvalue(value-1)}} style={{marginLeft:'10px'}}>sub</button></a>
    <button style={{marginTop:'10px', backgroundColor:'green'}} type='submit' onClick={placedorder}>placed</button>
  
  </div>
</div>
    </div>
  </div>
</div>
        </>
    )
}
