// Exercice 1 :

const nums = [2, 5, 8, 7, 3];

const nouvNums = nums.map(num => num * 3);

console.log(nouvNums); // [6, 15, 24, 21, 9]

// Exercice 2 :
const personnes = [
  { nom: "Ali", age: 25, estMember: true },
  { nom: "Sara", age: 30, estMember: false },
  { nom: "Yassine", age: 22, estMember: true },
  { nom: "Nadia", age: 28, estMember: false }
];

const nomAgés = personnes
  .filter(p => p.estMember === true)   
  .map(p => p.nom);                   

console.log(nomAgés); 

// Exercice 3 :

const inscriptions = [ 
    {id:10, nom:'Rami', filiere:'DEV'}, 
    {id:11, nom:'Kamali', filiere:'DEV'}, 
    {id:12, nom:'Fahmi', filiere:'DEV'}, 
    {id:13, nom:'Chaouki', filiere:'DEV'} 
];

function ajouterInscription(inscriptions, nouvelleInscription) {
  return [...inscriptions, nouvelleInscription];
}
const newInscris = {id:14, nom:'Ayman', filiere:'DEV'};

const result = ajouterInscription(inscriptions, newInscris);

console.log(result);

// Exercice 4 

const clients = [ 
{ nom: "Rami", montant: 4500 }, 
{ nom: "Karimi", montant: 2300 }, 
{ nom: "Chaouki", montant: 5500 }, 
{ nom: "Ramoun", montant: 7700 }, 
]; 


