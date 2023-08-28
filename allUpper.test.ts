it('should return trun when all upper case', () => {
    expect(allUpperCase("TRUE")).toBe(true)
    expect(allUpperCase("True")).toBe(false)
    expect(allUpperCase("mixed UPPER and lower")).toBe(false)
})

function allUpperCase(text: string){
    return text.toUpperCase() === text
}

    
