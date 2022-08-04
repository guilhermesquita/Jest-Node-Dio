describe('Users Controller', ()=>{
    it('Deve somoar 1+1', ()=>{
        function soma(a: number,b:number){
            return a+b;
        }

        const res = soma(1,2)

        expect(res).toBe(3);
    })
})