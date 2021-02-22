
export const compliments: string[] = [
    '{name} is a great thinker!',
    'You always looks amazing, {name}!',
    '{name}, you are the best cook!',
    'Wow, you are so smart {name}!',
    'You have the kindest heart {name}.',
    'You always light up a room {name}!',
    '{name}, you are the most fun!'
]


export function getSuggestion(): string {
    const idx = Math.floor(Math.random()*compliments.length)
    return compliments[idx]
}

