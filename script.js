


// button.on("click", function(){
//   anotherColor.toggleClass("another-color")
// });
// $(document).ready(function () {
//     var d = new Date();
//     var h = d.getHours();

//     if(h > 18 || h < 8){
//         $("body").addClass("bg-dark");
        
//     }
// });



// if (localStorage.getItem('dark-mode') ===null) {
//     localStorage.setItem('dark-mode', "False");
// }

// if (localStorage.getItem('dark-mode') ===null) {
//     localStorage.setItem('dark-mode', "true");
// }

// $(document).ready (function(){
// $.ajax({
// url:"https://randomuser.me/api/?results=10",
// method:"GET",
// dataType:"JSON",



// }).done(function(data){
//     console.log(data)
// })


// })
// $("#me").click(function(){
//     $("p").append(" <div id='ok'> <p>Mouhcine kouidry</p></div>.");
    
//   });
//   $("#me").click(function(){
//     $("#me").replaceWith("<a id='hi'> effacer la reponse?</a>");
    
//   });
//   $("#hi").click(function(){
//     $("#ok").hide();
    
//   });
function start() {
    let res_msg = document.createElement('div');
    res_msg.innerHTML = "Hi friend! How can I help you today?";
    res_msg.setAttribute("class", "left");

    document.getElementById('msg-area').appendChild(res_msg);
}

document.getElementById('send').addEventListener("click", async (e) => 
{
    e.preventDefault();

    var req = document.getElementById('text').value;

    if(req == undefined || req == "") {

    }
    else {
        let res = "";
        await axios.get(`https://api.monkedev.com/fun/chat?msg=${req}`).then(data => {
        res =JSON.stringify(data.data.response)
        })

        let msg_req = document.createElement('div');
        let msg_res = document.createElement('div');

        let Con1 = document.createElement('div');
        let Con2 = document.createElement('div');

        Con1.setAttribute("class", "msgCon1");
        Con2.setAttribute("class", "msgCon2");

        msg_req.innerHTML = req;
        msg_res.innerHTML = res;

        msg_req.setAttribute("class", "right");
        msg_res.setAttribute("class", "left");

        let message = document.getElementById('msg-area');

        message.appendChild(Con1);
        message.appendChild(Con2);

        Con1.appendChild(msg_req);
        Con2.appendChild(msg_res);

        document.getElementById('text').value = "";

        function scroll () {
            var scrollMsg = document.getElementById('msg-area');
            scrollMsg.scrollTop = scrollMsg.scrollHeight;
        }
        scroll();
    }
});


