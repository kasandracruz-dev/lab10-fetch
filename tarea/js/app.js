async function mostrarPosts() {
    const lista = document.querySelector("#posts");
    
    try {
        // 1. Petición a la API para traer publicaciones del usuario 1
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
        
        if (!res.ok) {
            throw new Error("Respuesta de red no ok");
        }
        
        // 2. Convertir la respuesta a JSON
        const posts = await res.json();
        
        // 3. Renderizar los títulos en la lista
        lista.innerHTML = posts.map(post => `<li>${post.title}</li>`).join("");
        
    } catch (error) {
        // 4. Mensaje en caso de falla
        lista.innerHTML = "<li>No se pudo cargar la información</li>";
    }
}

mostrarPosts();