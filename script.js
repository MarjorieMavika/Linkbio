function ToggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img

  const img = document.querySelector("#profile img")

   if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light2.png")
    } else {
    img.setAttribute("src", "./assets/avatar2.png")
    }

   if (html.classList.contains("light")) {
     img.setAttribute("alt", "Foto de Marjorie sorrindo, cabelo roxo, batom vermelho, tem tatuagem de clarinete no antebraço, usando fone de ouvido, camiseta preta, calça camuflada e fundo roxo degradê")
    } else {
      img.setAttribute("alt", "Foto de Marjorie Pereira com leve sorriso, cabelo e batom roxo, usando jaqueta jeans e fundo amarelo.")
   }
  }