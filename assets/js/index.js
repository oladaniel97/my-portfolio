function selectTab(tabIndex) {
    //Hide All Tabs
    document.getElementById("tab1Content").style.display = "none";
    document.getElementById("tab2Content").style.display = "none";
    document.getElementById("tab3Content").style.display = "none";
    //Show the Selected Tab
    document.getElementById("tab" + tabIndex + "Content").style.display =
    "block";
 }


<div class="card">
                    <img src="assets/images/netherland.bmp" alt="" class="img-fluid h-75">
                    <p>A building designed for a client in Netherland</p>
                </div>
                <div class="card">
                    <img src="assets/images/semi-detached2.jpg" alt="" class="img-fluid">
                    <p>A semi-detached duplex in Lagos,Nigeria</p>
                </div>
                <div class="card">
                    <img src="assets/images/3 bedroom.png" alt="" class="img-fluid">
                    <p>3 bedroom Apartment for a client</p>
                </div>
                <div class="card">
                    <img src="assets/images/semi-detached3.png" alt="" class="img-fluid">
                    <p>Semi-detached duplex for a company</p>
                </div>