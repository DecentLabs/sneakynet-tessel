const button = document.querySelector('button')
const post = document.querySelector('.post')
const list = document.querySelector('.list')

button.addEventListener('click', () => {
  fetch('/api/messages', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify({ post: post.value })
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
      list.innerHTML = responseJSON.map(line => `<li>${line.post}</li>`).join('')
  })
}

updateList()
