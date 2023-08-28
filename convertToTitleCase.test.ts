it('should to convert title to upper case', ()=> {
  expect(converTitleToUpper('hello world')).toBe('Hello World');
  expect(converTitleToUpper("openai gpt-4")).toBe("Openai Gpt-4");
  expect(converTitleToUpper("THE QUICK BROWN FOX")).toBe("The Quick Brown Fox");
})

function converTitleToUpper(title:string) {
  const result = 
  title
  .split(' ')
  .map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )   
  .join(' ')
  return result
}