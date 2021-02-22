import {compliments} from './suggest'

describe('compliments', () => {
    it('contains {name}', () => {
        compliments.forEach( val => 
            expect(val).toContain('{name}')
        )
    })

    it('ends with punctuation', () => {
        compliments.forEach( val => 
            expect(val).toMatch(/[.!]$/)
        )
    })

    it('starts with capital or name', () => {
        compliments.forEach( val => 
            expect(val).toMatch(/^([A-Z]|\{name\})/)
        )
    })
})