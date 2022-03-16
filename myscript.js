//===========fetch data from json file=============
fetch('https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5')
.then(function (reponse) {
    return reponse.json();
 })

.then(function (data){
//========================fetching users data into table=============
     var output = "";
    for(let i=0; i<data.length;i++){
        output += `
             <tr class='body_row'">
              <td >`+data[i].first_name +`</td> 
               <td>`+data[i].last_name +`</td>
              <td>` +data[i].username +`</td>
              <td>` +data[i].employment.title +`</td>
             <td>` +data[i].address.country +`</td>
             </tr>`;
       
     }

    document.getElementById("tbody").innerHTML = output;
     
//=========For Default User Data============

    displayData(data[0].id)
    
//=================Onclick Event For Each Row=============

    each_row = document.getElementsByTagName("tr")
    for (let i = 1; i <=data.length; i++) 
      {
        each_row[i].addEventListener("click", function(){
            displayData(data[i-1].id)
        });  
      }

//======Function to display details of specific user===============

    function displayData(id)
      {
        for(let i=0;i<data.length ;i++)
         { 
            if(data[i].id == id)
             {
                greet(data[i].first_name)
                
                document.getElementById("avatar").setAttribute("src", data[i].avatar);
                document.getElementById("id").innerHTML = data[i].id;
                document.getElementById("uid").innerHTML = data[i].uid;
                document.getElementById("pass").innerHTML = data[i].password;
                document.getElementById("name").innerHTML = data[i].first_name+" "+data[i].last_name;
                document.getElementById("uname").innerHTML = data[i].username;
                document.getElementById("gen").innerHTML=data[i].gender;
                document.getElementById("email").innerHTML=data[i].email;
                document.getElementById("phone").innerHTML=data[i].phone_number;
                document.getElementById("sin").innerHTML=data[i].social_insurance_number;
                document.getElementById("dob").innerHTML=data[i].date_of_birth;
                document.getElementById("title").innerHTML=data[i].employment.title;
                document.getElementById("skill").innerHTML=data[i].employment.key_skill;
                document.getElementById("addr").innerHTML=`${data[i].address.city}, ${data[i].address.state}, ${data[i].address.country}`;
                document.getElementById("ccn").innerHTML=data[i].credit_card.cc_number;
                document.getElementById("ss").innerHTML=data[i].subscription.status;

             }
           }
      }
 });


//=========Function For greeting user
function greet(fname)
{
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = ' Morning ' +fname;
    else if (hrs <=16)
        greet = ' Afternoon ' +fname;
    else if (hrs <= 23)
        greet = ' Evening ' +fname;

    document.getElementById("greet").innerHTML = greet;
}

