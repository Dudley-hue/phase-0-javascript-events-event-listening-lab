function addingEventListener() {
  const input = document.getElementById('button').addEventListener('click',
  function(){
    alert('i have been clicked');
  });
}
addingEventListener();