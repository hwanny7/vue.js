import axios from 'axios'

axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/collects/collection/597/',
    data: {
        user: 1,
        title: 'hi',
        movies: [12, 43, 22, 53],
        content: 'ㅋㅋㅋㅋㅋ'
    }
})
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })