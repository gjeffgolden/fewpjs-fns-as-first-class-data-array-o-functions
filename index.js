function wakeDog(dogName, dogBreed) {
    return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName, dogBreed) {
    return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(dogName, dogBreed) {
    return `Walk ${dogName} the ${dogBreed} to the park`
}

function throwFrisbee(dogName, dogBreed) {
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

function walkHome(dogName, dogBreed) {
    return `Walk ${dogName} the ${dogBreed} back home`
}

function unleashDog(dogName, dogBreed) {
    return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]

function exerciseDog(dogName, dogBreed) {
    return routine.forEach(fn => {
        fn(dogName, dogBreed)
    })
}