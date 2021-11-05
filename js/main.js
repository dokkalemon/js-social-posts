/* 
Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) 
il nostro codice javascript in cui:
- Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. 
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: 
nome autore, foto profilo, data, testo del post, immagine, numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es: 
https://picsum.photos/id/237/600/350
- Prendendo come riferimento il layout di esempio presente nell’html, 
stampiamo i post del nostro feed.
Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli 
step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura
 del codice.
*/


//Generaimo l'array di oggetti

const posts = [
    {
        author: 'Phil Mangione',
        avatar: 'https://unsplash.it/300/300?image=15',
        date: `4 mesi fa`,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=171',
        likes: `80`,
    },
    {
        author: 'Donald Antrim',
        avatar: 'https://unsplash.it/300/300?image=15',
        date: `5 mesi fa`,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://picsum.photos/id/237/600/300',
        likes: `120`,
    },
    {
        author: 'Paul Auster',
        avatar: 'https://unsplash.it/300/300?image=15',
        date: `7 mesi fa`,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://picsum.photos/id/1/600/300',
        likes: `103`,
    },
    {
        author: 'John Barth',
        avatar: 'https://unsplash.it/300/300?image=15',
        date: `10 mesi fa`,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://picsum.photos/id/10/600/300',
        likes: `142`,
    },
    {
        author: 'Roberto Bolano',
        avatar: 'https://unsplash.it/300/300?image=15',
        date: `1 anno fa`,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://picsum.photos/id/20/600/300',
        likes: `97`,
    },
]

 console.table()



//Referenza del conteiner dei post
const postContainer = document.querySelector('.posts-list');

//Loop per generare i post
for (let i = 0; i < posts.length; i++) {

    const postsList = genPost(posts, i);

}








/* FUNCTION */
//Generiamo il post
function genPost(posts, i) {
    //Generiamo il contenitore del post
    const post = document.createElement('div');
    post.classList.add('post');
    postContainer.append(post);

    //generiamo l'header del post
    const postHeader = document.createElement('div');
    postHeader.classList.add('post__header');
    post.append(postHeader)

    /* ---- generiamo l'header ----*/
    //generiamo il contenitore dei meta data
    const postMeta = document.createElement('div');
    postMeta.classList.add('post-meta');
    postHeader.append(postMeta)

    //Creiamo gli elementi
    const postMetaIcon = document.createElement('div');
    const postMetaImg = document.createElement('img');

    //Aggiungiamo una classe
    postMetaIcon.classList.add('post-meta__icon');
    postMetaImg.classList.add('profile-pic');

    //aggiungiamo il src all'imagine
    const postMetaImgSrc = postMetaImg.src = `https://unsplash.it/300/300?image=1${i}`

    //Inseriamo conteiner icona e immagine icona nell'HTML
    postMeta.append(postMetaIcon)
    postMetaIcon.append(postMetaImg)


    //generiamo il conteiner per il nome e la data
    const postMetaAutor = document.createElement('div');
    postMetaAutor.classList.add('post-meta__data');
    postMeta.append(postMetaAutor)

    //generiamo il conteiner e aggiungiamo il nome
    const postMetaName = document.createElement('div');
    postMetaName.classList.add('post-meta__author');
    postMetaName.innerHTML += posts[i].author
    postMetaAutor.append(postMetaName);

    //generiamo il conteiner e aggiungiamo la data
    const postMetaData = document.createElement('div');
    postMetaData.classList.add('post-meta__time');
    postMetaData.innerHTML += posts[i].date;
    postMetaAutor.append(postMetaData)


    /* generiamo il testo del post */
    const postText = document.createElement('div')
    postText.classList.add('post__text')
    postText.innerHTML = posts[i].text
    post.append(postText)


    /* Generiamo l'immagine del post */
    const postImage = document.createElement('div')
    postImage.classList.add('post__image');
    post.append(postImage);

    const postImgTag = document.createElement('img');
    const postImgTagSrc = postImgTag.src = posts[i].image;
    postImage.append(postImgTag)


    /* generiamo il footer del post */
    const postFooter = document.createElement('div');
    postFooter.classList.add('post__footer');
    post.append(postFooter)

    //generiamo il conteiner del bottone like e del numero like
    const postLikeCont = document.createElement('div');
    postLikeCont.classList.add('likes', 'js-likes');
    postFooter.append(postLikeCont);

    //generiamo il bottone like  
    const postBtnCont = document.createElement('div');
    const postBtnLink = document.createElement('a');
    const postBtnIcon = document.createElement('i');
    const postBtnText = document.createElement('span')

    postBtnCont.classList.add('likes__cta');
    postBtnLink.classList.add('like-button', 'js-like-button');
    postBtnIcon.classList.add('like-button__icon', 'fas', 'fa-thumbs-up')
    postBtnText.classList.add('like-button__label');
    postBtnText.innerHTML = ' Mi Piace';


    postLikeCont.append(postBtnCont);
    postBtnCont.append(postBtnLink);
    postBtnLink.append(postBtnIcon, postBtnText);

    //generiamo il counter dei like
    const postCounterCont = document.createElement('div');
    postCounterCont.classList.add('likes__counter');
    postLikeCont.append(postCounterCont);

    //creiamo il testo bold
    const postCounterBold = document.createElement('b');
    postCounterBold.classList.add('js-likes-counter');

    postCounterBold.innerHTML = `${posts[i].likes}`

    

    //generiamo il testo
    postCounterCont.innerHTML = `Piace a ${postCounterBold} persone`




    return post
}


