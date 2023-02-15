//Estrutura de dados com objetos
const students = [
    {
        name: 'joao',
        firstNote: 7.8,
        secondNote: 10,
    },
    {
        name: 'maria',
        firstNote: 8.5,
        secondNote: 9.5,
    },
    {
        name: 'jose',
        firstNote: 4,
        secondNote: 5.5,
    },
    {
        name: 'luciana',
        firstNote: 6,
        secondNote: 7.6,
    },

]

let approved = 7

//Criação de funções
function averageCalc(noteOne, NoteTwo) {
    return (noteOne + NoteTwo) / 2
}

//Estrutura de repetição e operadores comparativos;
for (let average of students) {
    if (averageCalc(average.firstNote, average.secondNote) >= approved) {
        alert(`A média do(a) aluno(a) ${average.name} é: ${averageCalc(average.firstNote, average.secondNote)}\nVocê foi aprovado(a) no concurso!`)
    } else {
        alert(`A média do(a) aluno(a) ${average.name} é: ${averageCalc(average.firstNote, average.secondNote)}\nNão foi dessa vez, ${average.name}! Tente novamente!`)
    }
}