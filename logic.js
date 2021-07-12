const cardTemplate=`
<div class="card">
    <div class="page2_card1_content"> 
        <div >
            <img src="/images/temp.jpg" alt="temp" class="page2_card1_image1">                          
        </div>
        <div class="userdetails">
            <h3 class="page2_card1_username">Username</h3>
            <h1 class="page2_card1_coursename">Course Name</h1>
            <h3 class="page2_card1_secno">Section: 01</h3>
        </div>
        <div>
            <img src="/images/arrow.jpg" alt="temp" class="page2_card1_image2">
        </div>
    </div>
    <div>
        <p class="sec1_learning_tracker_countdown"> 00:00:00 </p>
        <p class="sec1_learning_tracker_totaltime">TOTAL TIME LEARNED</p>
    </div>
    <div class="sec1_date">
        <div>
            <p class="startdate">12 JULY 2021</p>
            <p class="startdatelabel">START DATE</p>
        </div>
        <div>
            <p class="enddate" >---</p>
            <p class="enddatelabel" >COMPLETED DATE</p>
        </div>

    </div>

</div>`;

const card = document.createElement("article");
// card.innerHTML = cardTemplate;


