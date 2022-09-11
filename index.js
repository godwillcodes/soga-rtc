let localStream;
let remoteStream;

let init = async () => {    
    localStream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
    document.getElementById('local').srcObject = localStream;
}