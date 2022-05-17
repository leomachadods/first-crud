//This is my first crud
//Creating elements
const $form = document.createElement("form");
const $input = document.createElement("input");
$input.setAttribute("name", "CriaPosts");
$input.setAttribute("placeholder", "digite aqui");
const $button = document.createElement("button");
$button.setAttribute("type", "submit");
$button.innerText = "click";
$button.style.marginLeft = "5px";
const $ul = document.createElement("ul");
$ul.classList.add("listaPost");
document.body.appendChild($form);
$form.appendChild($input);
$form.appendChild($button);
$form.appendChild($ul);

//Basic logic
const app = {
  usuarios: [
    {
      username: "leomachadods",
    },
  ],
  posts: [
    {
      id: 1,
      owner: "leomachadods",
      content: "Postei aqui",
    },
  ],
};
//create

const criarPost = (dados, htmlOnly = false) => {
  if(!htmlOnly) {
    app.posts.push({
      id: app.posts.length + 1,
      owner: dados.owner,
      content: dados.content,
    });
  }
  
  const $lista = document.querySelector(".listaPost");
  $lista.insertAdjacentHTML("afterbegin", `<li>${dados.content}</li>`);
};

//read
const lerPost = () => app.posts;
app.posts.forEach(({owner, content}) => {
  criarPost({owner, content}, true)
});

//update
const atualizarContentPost = (id, novoConteudo) => {
  const postASerAtualizado = lerPost().find((post) => post.id === id);
  postASerAtualizado.content = novoConteudo;
};

//delete
//Não deleta no array principal
const deletePost = (id) => {
  const listaAtualizada = lerPost().filter((post) => post.id !== id);
  app.posts = listaAtualizada;
};


//Select html elements
$selectedForm = document.querySelector("form");

//Submit event
$selectedForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const $input = document.querySelector('input[name="CriaPosts"]');
  criarPost({ owner: "leomachados", content: $input.value });
  $input.value = "";
});

console.log(lerPost())

