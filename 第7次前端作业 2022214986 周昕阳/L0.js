const btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    const res = await fetch('https://taskapi.chovrio.club/')
    const a = await res.json();
    console.log(a);
})