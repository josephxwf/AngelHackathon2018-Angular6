// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
          if (msg.text === 'hello') {
              // Call the specified callback, passing
              // the web-page's DOM content as argument
              //var address = document.getElementsByClassName('notranslate')[2].innerText;
              //var address = msg.joke;
              var address = '';
              var address1 = document.querySelectorAll('h1.notranslate')[0];




              if (address1 === undefined){
                var addrPart2 = document.getElementsByClassName('zsg-h5 bdp-sub-header')[0];
                var addrPart1 = document.getElementsByClassName('zsg-h5 bdp-sub-header')[0].previousSibling;
                address = addrPart1.innerText + ' ' + addrPart2.innerText;
              }else{
                address = address1.textContent;
              }


              var xhr = new XMLHttpRequest();
               // post extracted APT address on zillow and send to server database
              xhr.open("POST", "https://www.josephxwf.com/smalltown/myphp/insertapartment.php", true);
              xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
              xhr.onreadystatechange = function receiveResponse() {
               if (this.readyState == 4) {
                   if (this.status == 200) {
                   } else if (!isValid(this.response) && this.status == 0) {
                       alert("The computer appears to be offline.");
                   }
               }
            };




              var indexOf = address.indexOf("\n");
              if(indexOf != -1){
                address = address.substring(0, indexOf);
              }

              var obj = {"address": address};
              var myJSON = JSON.stringify(obj);

              xhr.send(myJSON);

              console.log(address);


        sendResponse('address');
    }
});
