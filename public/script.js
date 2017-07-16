const button = document.querySelector('button')
const name = document.querySelector('.name')
const post = document.querySelector('.post')
const list = document.querySelector('.list')

button.addEventListener('click', () => {
  const payload = {
    "content": post.value,
    "author_username": name.value,
    "post_time": new Date().toISOString()
  }
  fetch('/api/messages', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(payload)
  }).then(response => response.json())
  .then(responseJSON => {
      console.log(responseJSON)
      updateList()
  })
})

const updateList = () => {
  fetch('/api/messages', {
    method: 'GET',
    headers: new Headers({'Content-Type': 'application/json'}),
    mode: 'cors',
    cache: 'default'
  }).then(response => response.json())
  .then(responseJSON => {
      console.log(responseJSON)
      list.innerHTML = responseJSON.map(line => `<li>${line.author_username}: ${line.content}</li>`).join('')
  })
}

updateList()
