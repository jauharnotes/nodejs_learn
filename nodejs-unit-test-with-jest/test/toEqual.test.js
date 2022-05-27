import { sayhi } from "../src/toEqual";

test('should toBe', () => { 
    let name = "Johar";
    let hello = sayhi(name);

    expect(hello).toBe('Hello Johar');
 })

 test('should toEqual', () => {
     let person = {id: '01'};
     Object.assign(person, {name: 'Johar'})

     expect(person).toEqual({id: '02', name: 'Johar'})
 })