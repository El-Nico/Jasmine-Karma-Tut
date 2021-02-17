describe('First Test', () => {
    it('Should pass', () => {
        expect(1+1).toEqual(2);
    });
});

describe('Second test group', ()=> {
    it('should fail', ()=> {
        expect(1-1).toEqual(0)
    })
})