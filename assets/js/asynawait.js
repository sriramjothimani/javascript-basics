// async

async function get() {
    response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    jsn = await response.json();
}

get();
