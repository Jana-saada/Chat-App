const socket = io ('http://localhost:3000')
const messageForm= document.getElementById('send-container')
const messageinput=document.getElementById('message-input')
const messageContainer= document.getElementById('message-container')
const name= prompt('What is your name?')
messageForm.addEventListener('submit', e =>{
    e.preventDefault ()
    const message= messageinput.value
    socket.emit('send-chat-message',message)
    messageinput.value=''
    })
    
    


function appendMessage(message){

    appendMessage('You joined')
    socket.emit('new-user',name)
    socket.on ('chat-message', data=>{
    appendMessage(data)   
    
    })




const messageElement= document.createElement('div')
messageElement.innerText=message 
messageContainer.append(messageElement)
}
