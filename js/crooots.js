import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";
import {setCookieWithExpireHour} from "https://jscroot.github.io/cookie/croot.js";

function PostLogIn(){
    let target_url = "https://asia-southeast2-hppinjam.cloudfunctions.net/adminlogin";
    let tokenkey = "token";
    let tokenvalue = "57680f8af4ead19a4b200e10466a9f8be9abf928425835df41797523db0559c5c33338060ecbce4f4f3c607ce5053ca326b3bdb475a4522145e2ff8f92beb95f"; 
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);

}
function responseData(result) {
    
    alert(result.message)
    if (result.status === true) {
        setCookieWithExpireHour("token", result.token, 2);
        // Jika pesan adalah "Selamat Datang", arahkan ke halaman dashboard.
        window.location.href = "hp.html"; // Gantilah "error.html" dengan halaman error yang sesuai.
    } else {
        
        window.location.href = "index.html";
    }
}

document.getElementById("buttonlogin").addEventListener("click",PostLogIn)