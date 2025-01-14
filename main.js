//start code

// esercizio mail

// workflow

// 1. creare lista di email predefinita
// 2. creare var con email inserita dall'utente
// 3. controllo se email utente presente nella lista
//      - se mail presente: utente può accedere alla festa
//      - altrimenti: utente non può accedere alla festa

const festaInvitatiMail = ['lorenzo@gmail.com', 'alex@gmail.com', 'franco@gmail.com'];
let isUtenteInvitato = false;
let mailUtente = prompt('Inserisci la tua email per verificare se sei stato invitato alla festa', 'franco@gmail.com');

console.log(`email inserita: ${mailUtente}`)

for (i = 0; (i < festaInvitatiMail.length); i++) {
    if(mailUtente == festaInvitatiMail[i]) {
        isUtenteInvitato = true;
        
    }
}

isUtenteInvitato == true ? console.log('Puoi accedere alla festa') : console.log('Mi dispiace, non sei stato invitato');





// esercizio dadi

// workflow

// 1. generare num randomico per l'utente
// 2. generare num randomico per computer
// 3. controllo su chi ha ottenuto il num maggiore
//      - se num utente > num cpu: utente ha vinto
//      - se num utente < num cpu: utente ha perso
//      - altrimenti: utente e cpu hanno lo stesso num