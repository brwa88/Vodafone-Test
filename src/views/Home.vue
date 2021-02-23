<template>
  <div class="home">

<div class="container">
    <nav class="navbar navbar-dark primary-color">
        <a class="navbar-brand" href="/">
          <img src="Images/vodafone_logo.svg" class="col-sm-8"  />
        </a>
        <div class="col-sm-4 d-none d-sm-block">
     
        <!--  the search text input when you click we set clicked button variable so the app know
        to filter the json data according to the input text value 
         -->
        <input v-on:click="clickedButton=''"  type="text" v-model="search"  class="form-control form-group mx-sm-3 mb-2 " id="searchTxt"   placeholder="Search for contact">
    </div>  
    </nav>  
   <p></p>
    
        <h3 class="ContactH3">Contacts
        
        <span class="smallRedLine">
        </span>
</h3>

<br/><br/>
<h4 class="filter">


<!--  if any filter letters clicked it will change value of clickedButton to
 its letter so we know which letter has been clicked so we do the filtering part
   -->
<button  v-on:click="clickedButton='A'"  id="A"  class="filterLetters" onclick="clickA()">A</button>&nbsp; &nbsp;  
<button  v-on:click="clickedButton='C'"  id="C"  class="filterLetters"  onclick="clickC()">C</button>&nbsp; &nbsp; 
<button  v-on:click="clickedButton='F'"  id="F"  class="filterLetters"  onclick="clickF()">F</button>&nbsp; &nbsp; 
<button  v-on:click="clickedButton='K'"  id="K"  class="filterLetters"  onclick="clickK()">K</button>&nbsp; &nbsp; 
<button  v-on:click="clickedButton='N'"  id="N"   class="filterLetters"  onclick="clickN()">N</button>&nbsp; &nbsp; 
<button  v-on:click="clickedButton='T'"  id="T"  class="filterLetters"  onclick="clickT()">T</button>&nbsp; &nbsp; 
 
</h4>




<br/>



   



<div class="row row-cols-1 row-cols-md-3">



 <div class="col mb-4" v-for="person in filtered" :key="person.id">

 
 <!-- here i used bootstrap card to show each contact also i used router link so if
 you click any contact it will go to the details of that contact and for that i used each person id 
 from the json data retrived

 -->
   <router-link v-bind:to="'/Details/'+person.id" style="text-decoration: none; color: inherit;">
      <div class="card ">
        <div class="card-header text-light h6 cardHead" >
            {{person.name}}
          </div>
        <div class="card-body ">
            
        
          <p class="card-text h6 cardText" >
            {{person.email}}
        <br/>
        {{person.phone}}
        </p>
        </div>
      </div>



   </router-link>
    </div>
  </div>
 

  
  
  
      </div> 
      <!-- here i used router link to navigate to add page 
      and as the add contact i con i used a png file and fixed it in its posision as it was in the sample image
       -->
         
      <div class="fixed-bottom addButton">
        <router-link to="/Add"><img src="Images/add.png" style="width:60px;"/>
        </router-link>
      </div>




      <router-view></router-view>
      </div>

  
</template>

<script>
// i used axios package to consume my json api which i put in cloud using json server 
import axios from 'axios';

// this constant is the url of my json api
const baseUrl="https://brwa-test-app.herokuapp.com/persons";

export default {
  name: 'Home',
  components: {
  },
   data()
{
  return {

    /* these are variables that i will use persons is an array that contain will contain all contacts 
    retrived from my api, also i use the search variable to store the text written in the search input
    so i will use it later for filtering purpose, clickedButton i use this to indicate which filtering 
    letter clicked.

    */
    persons:[],
    search:"",
    clickedButton:""
  };
},
async created()
{
/* this method will be the first function to be called after we open the page 
so first step i called my api in this function and store all the values in persons array
*/
  try
  {
    const res=await axios.get(baseUrl);
    this.persons=res.data;
  }
  catch(e){console.error(e);}

},
computed:
{
  filtered()
  {
    

    /* i use this method for both filtering and search purpose
       first if the search variable is not null i set color of all filtering letters to black 
       and filter my person array using filter function to filter all the contacts that thier names
       are like my search text input.

   */
    let result=this.persons;
    if(this.search !='')
    {
       document.getElementById("A").style.color='black';
       document.getElementById("C").style.color='black';
       document.getElementById("F").style.color='black';
       document.getElementById("K").style.color='black';
       document.getElementById("N").style.color='black';
       document.getElementById("T").style.color='black';
   result= this.persons.filter(person=>person.name.includes(this.search))
    }

    /*
    here if clickedButton variable value is A i change the text color to red and
    set the text color of other filter letters to black and filter the result as showing all the contacts
    that the contact name include A
    */
 if(this.clickedButton =="A")
    {
           document.getElementById("A").style.color='red';
       document.getElementById("C").style.color='black';
       document.getElementById("F").style.color='black';
       document.getElementById("K").style.color='black';
       document.getElementById("N").style.color='black';
       document.getElementById("T").style.color='black';

   result= this.persons.filter(person=>person.name.includes("A"))


    }

    /*
    here if clickedButton variable value is C i change the text color to red and
    set the text color of other filter letters to black and filter the result as showing all the contacts
    that the contact name include C
    */
     if(this.clickedButton =="C")
    {
             document.getElementById("A").style.color='black';
       document.getElementById("C").style.color='red';
       document.getElementById("F").style.color='black';
       document.getElementById("K").style.color='black';
       document.getElementById("N").style.color='black';
       document.getElementById("T").style.color='black';
   result= this.persons.filter(person=>person.name.includes("C"))

    }
    /*
    here if clickedButton variable value is F i change the text color to red and
    set the text color of other filter letters to black and filter the result as showing all the contacts
    that the contact name include F
    */
     if(this.clickedButton =="F")
    {
             document.getElementById("A").style.color='black';
       document.getElementById("C").style.color='black';
       document.getElementById("F").style.color='red';
       document.getElementById("K").style.color='black';
       document.getElementById("N").style.color='black';
       document.getElementById("T").style.color='black';
   result= this.persons.filter(person=>person.name.includes("F"))

    }

    /*
    here if clickedButton variable value is K i change the text color to red and
    set the text color of other filter letters to black and filter the result as showing all the contacts
    that the contact name include K
    */

     if(this.clickedButton =="K")
    {
             document.getElementById("A").style.color='black';
       document.getElementById("C").style.color='black';
       document.getElementById("F").style.color='black';
       document.getElementById("K").style.color='red';
       document.getElementById("N").style.color='black';
       document.getElementById("T").style.color='black';
   result= this.persons.filter(person=>person.name.includes("K"))

    }

/*
    here if clickedButton variable value is N i change the text color to red and
    set the text color of other filter letters to black and filter the result as showing all the contacts
    that the contact name include N
    */

     if(this.clickedButton =="N")
    {
             document.getElementById("A").style.color='black';
       document.getElementById("C").style.color='black';
       document.getElementById("F").style.color='black';
       document.getElementById("K").style.color='black';
       document.getElementById("N").style.color='red';
       document.getElementById("T").style.color='black';
   result= this.persons.filter(person=>person.name.includes("N"))

    }

/*
    here if clickedButton variable value is T i change the text color to red and
    set the text color of other filter letters to black and filter the result as showing all the contacts
    that the contact name include T
    */

     if(this.clickedButton =="T")
    {
             document.getElementById("A").style.color='black';
       document.getElementById("C").style.color='black';
       document.getElementById("F").style.color='black';
       document.getElementById("K").style.color='black';
       document.getElementById("N").style.color='black';
       document.getElementById("T").style.color='red';
   result= this.persons.filter(person=>person.name.includes("T"))

    }



/* in the end of the filter function i return the result of the filter and set the value
of clickedButton to null so if i click another letter its value change to that letter.

*/
    this.clickedButton =="";
    return result;

}
}
 






};




    
</script>