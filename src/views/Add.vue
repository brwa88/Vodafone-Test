<template>
  <div class="Add">



<div class="container">
    <nav class="navbar navbar-dark primary-color">
        <a class="navbar-brand" href="/">
          <img src="Images/vodafone_logo.svg" class="col-sm-8"  />
        </a>
        <div class="col-sm-4 d-none d-sm-block">
        <input type="text"  class="form-control form-group mx-sm-3 mb-2 " id="searchTxt"   placeholder="Search for contact">
    </div>  
    </nav>  
   <p></p>
    
        <h3 class="contactH3">Add New Contact
        
        <span class="smallRedLine">
        </span>
</h3>
<form @submit.prevent="addPerson()">

<!-- here i made a form that include three input text and a button 
when i click on the button it will call the function addPerson which i used
to pass the new json data to the api and also using v-model i binded each text input to a vraiable that i made
-->

<p class=" mx-sm-1 mb-1 " style="text-align:left;"> Name</p>


       

<input required v-model="name" type="text"  class="form-control form-group mx-sm-1 mb-1 " id="nameTxt"   placeholder="Enter Name">
<p class=" mx-sm-1 mb-1 " style="text-align:left;"> Email</p>
<input required v-model="email" type="text"  class="form-control form-group mx-sm-1 mb-1 " id="emailTxt"   placeholder="Enter Email">
<p class=" mx-sm-1 mb-1 " style="text-align:left;"> Phone</p>
<input required v-model="phone" type="text"  class="form-control form-group mx-sm-1 mb-1 " id="phoneTxt"   placeholder="Enter Phone">
<br/>
<br/>
<input type="submit" class="form-control form-group mx-sm-20 mb-4 " style="width: 200px;margin: auto;" value="Add Contact"/>

</form>

<br/>







  </div>


<br/>


<br/>
<br/>

    </div> 


<router-view></router-view>
</template>

<script>

// i used axios package to consume my json api which i put in cloud using json server 
import axios from 'axios';

// this constant is the url of my json api
const baseUrl="https://brwa-test-app.herokuapp.com/persons/";

export default {
  name: 'Add',
  components: {
    
  },
   data()
{
  return {
  // here i used three variable and bind them with the input texts i made
    name:"",
    email:"",
    phone:""
    
    };
},methods:
{

  //i used this function to save the user inputs as a json data to my api


  async addPerson()
  {
   
 await axios.post(baseUrl,{name:this.name,email:this.email,phone:this.phone});
  this.name=""
  this.email=""
  this.phone=""
 alert("Contact Saved Successfuly")
  }


}


}
</script>



