async function loginNetflix(){
const id=document.getElementById('subscriptionId').value.trim();
const status=document.getElementById('status');
if(!id){status.textContent='Enter Subscription ID';return;}
try{
const r=await fetch(`${API_BASE_URL}/check-subscription/${id}`);
const data=await r.json();
if(data.active){
localStorage.setItem('subscriptionId',id);
status.textContent='Login successful';
}else{
status.textContent='Subscription not active';
}
}catch(e){status.textContent='Server error';}
}

async function startSubscription(){
alert('Connect this button to /generate-id endpoint after backend deployment.');
}