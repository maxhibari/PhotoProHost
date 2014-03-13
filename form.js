function verification(x) 
{ 
if(x.nom.value == '') // s'il manque le nom 
{ 
alert('Merci de saisir votre nom'); 
} 
if(x.prenom.value == '') // s'il manque le prenom 
{ 
alert('Merci de saisir votre prŽnom'); 
} 
if(x.pseudo.value == '') // s'il manque le pseudo 
{ 
alert('Merci de saisir votre matricule'); 
} 
if( x.mail.value != /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/ ) // s'il manque le mail 
{ 
alert('Merci de saisir votre mail correctement'); 
} 
if(x.pass.value == '') // s'il manque le mot de passe 
{ 
alert('Merci de saisir votre mot de passe'); 
}
if(x.pass.value != x.pass1.value) // s'il manque le mail 
{ 
alert('Votre mots de passe n est pas correctement comfirmer'); 
}
else 
{ 
x.go.click(); 
} 
} 
