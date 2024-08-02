import express from 'express'
const servidor = express()


servidor.get('/calculadora/soma/:n1/:n2',(req,resp)=>{
    let n1 = Number(req.params.n1) ;
    let n2 = Number(req.params.n2) ;
    let soma = n1+n2;
    
    resp.send({
        soma : soma
    })
})



servidor.get('/calculadora/subtracao/:n1/:n2',(req,resp)=>{
    let n1 = Number(req.params.n1) ;
    let n2 = Number(req.params.n2) ;
    let subtracao = n1-n2;
    
    resp.send({
        subtracao : subtracao
    })
});










servidor.listen(5050, () => console.log(`API SUBINDO NA PORTA 5050`));