<template>
  <div class="Details">









<div class="container">


    <nav class="navbar navbar-dark primary-color">
        <a class="navbar-brand" href="/">
          <img src="/Images/vodafone_logo.svg" class="col-sm-8" />
        </a>
        <div class="col-sm-4 d-none d-sm-block">
        <input type="text"  class="form-control form-group mx-sm-3 mb-2 " id="searchTxt"   placeholder="Search for contact">
    </div>  
    </nav>  
   <p></p>
    
        <h3 class="contactH3">
          {{persons.name}}'s Profile
        
        <span class="smallRedLine">
        </span>
</h3>



<br/>
<!-- i used a table for this form so i can mange the exact arranged component as in the example picture 
-->
  <table style=" line-height:2.5; margin: auto;">
    <tr>
      <td>

          <span style="color: gray;">Name: &nbsp;&nbsp;&nbsp;</span>
        
      </td>
      <td>
<!-- i used this inline style for the text input so i gave a feeling of been a label 
also it can be used to update and change the text of the record for a better and faster GUI
instead of using more javascript codes
-->
<input id="txtName" v-model="persons.name" v-bind="name" style=" background: rgba(0, 0, 0, 0);
  border: none;" >
        <!--<span style="color: gray;text-align: right;">{{persons.name}}</span> -->
      </td>
    </tr>
    
    <tr>
      <td>
        <span style="color: gray;text-align: center;">Email: &nbsp;&nbsp;&nbsp;</span>
      </td>
      <td>
       <!-- <span style="color: red;text-align: right;">{{persons.email}}</span>-->
       <input id="txtEmail" v-model="persons.email" style=" background: rgba(0, 0, 0, 0);
  border: none;">
      </td>
    </tr>
    <tr>
      <td>
        <span style="color: gray;text-align: center;">Phone: &nbsp;&nbsp;&nbsp;</span>
      </td>
      <td>
            <input id="txtPhone" v-model="persons.phone" style="width:auto; background: rgba(0, 0, 0, 0);
  border: none;">
        <!--<span style="color: red;text-align: center;">{{persons.phone}}</span>-->
      </td>
    </tr>
    </table>
<br/><br/>
    <div class="row">
      <div class="col-sm-12 text-center">

<!-- by clicking delete button it will call deletePerson function
and by clicking update it will cal updatePerson function
-->

          <button id="btnDelete"  v-on:click="deletePerson()" class="btn btn btn-outline-danger btn-md center-block" Style="width: 100px;" OnClick="" >Delete</button>
         &nbsp; &nbsp; &nbsp;
           <button id="btnEdit" v-on:click="updatePerson()" class="btn btn-outline-dark btn-md center-block" Style="width: 70px;" OnClick="btnClear_Click" >Edit</button>
       </div>
  </div>



<br/>
<br/>
<br/>

<br/>
<br/>
<br/>

<br/>
<br/>




  </div>
    
<router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'Details',

  components: {

  },
   data()
{
  return {
    // in here i retrive the parameter id that been sent by the main page 
    //and use it to retrive data only for that conact
    // and instead of a list i save the record in a normal variable not list
    id:this.$route.params.id,
    persons:{}
    };
},
async created()
{
 //i call the api by sending the exact id of the contact i want to retrive
    const res=await axios.get("https://brwa-test-app.herokuapp.com/persons/"+this.id);
    this.persons=res.data
    console.log(res)
 
},

methods:
{
  async deletePerson()
  {
/*in case of deleting a contact it asks for confermation if yes then it will call the api and delete 
that record if no then nothing will happen */
    if (confirm("Are you sure you want to delete this contact ?")) {
      await axios.delete("https://brwa-test-app.herokuapp.com/persons/"+this.id);
          window.location.href = "/";
          
     } 




  },


  async updatePerson()
  {
    /* in case of update we ask the user for confermation if yes then 
    i retrived the values from text inputs then send it as a json input for the api to update that
    specific record */
    if (confirm("Are you sure you want to Update this contact ?")) {

      let name= document.getElementById("txtName").value; 
       let email= document.getElementById("txtEmail").value; 
       let phone= document.getElementById("txtPhone").value; 
      await axios.put("https://brwa-test-app.herokuapp.com/persons/"+this.id,{name:name,email:email,phone:phone});
     alert("Contact Updated Successfully.");
     } 

}

}
}
</script>



