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
        image: 'https://picsum.photos/600/300',
        likes: `120`,
    },
    {
        author: 'Paul Auster',
        avatar: 'https://unsplash.it/300/300?image=15',
        date: `7 mesi fa`,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://picsum.photos/600/300',
        likes: `103`,
    },
    {
        author: 'John Barth',
        avatar: 'https://unsplash.it/300/300?image=15',
        date: `10 mesi fa`,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://picsum.photos/600/300',
        likes: `142`,
    },
    {
        author: 'Roberto Bolano',
        avatar: 'https://unsplash.it/300/300?image=15',
        date: `1 anno fa`,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://picsum.photos/600/300',
        likes: `97`,
    },
]

console.table(posts)



//Referenza del conteiner dei post
const postContainer = document.querySelector('post');

