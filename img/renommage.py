def renommerCopie (dossier):
    for fichier in dossier:
        entree = open(fichier, "r")
        contenu= entree.read()
        entree.close
        sortie= open("../copie/photo"+numero+".jpg", "w")
        sortie.write(contenu)
        sortie.close


$ for fic in $(ls -t);do i=$(($i+1));mv -v $fic $(printf "photo_%03d.jpg{$fic}" $i);done && unset i
