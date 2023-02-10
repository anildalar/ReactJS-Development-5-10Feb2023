//1. Import Area

//1.1  import SomeDefaultImport from somelocation/somelibrary
import React from 'react'
import MyComp3 from './MyComp3';
//1.2 import { someNamedImport }  from somelocation/somelibrary
 


//2. Function defination area
//We are going to create a functional compoent
function MyComp2() {
    //Everything function return something
    return <span>MyComp2 <MyComp3 /> </span>

}


//3. Export area

export default MyComp2;