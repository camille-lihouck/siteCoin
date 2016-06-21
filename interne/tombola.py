from random import *

def tombola(visitors):
    liste = []
    for i in range (visitors):
        liste.append(i+1)
    for i in range (visitors):
        random = randint(0,visitors)
        aux = liste[random - 1]
        liste[random - 1] = liste[i]
        liste[i]=aux
    return liste

def nouveau_tirage():
    tirage=input('nouveau numéro O / N ?')
    while not correct(tirage):
        tirage=input('nouveau numéro O / N ?')
    return tirage

def correct(commande):
    return commande=='O' or commande=='N'

def tirage(liste):
    tirage = nouveau_tirage()
    while tirage == 'O':
        print (liste[0])
        liste = liste[1:]
        tirage = nouveau_tirage()


def tirage_tombola(nombre):
    liste = tombola (nombre)
    tirage(liste)
    return liste
    
