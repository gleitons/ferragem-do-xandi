document.querySelector('.copyright-text').innerHTML = `<p><a href="http://gleiton.com.br/servicos" target="_blank">© 2022 | Futuro Consultoria</a></p>`;

document.querySelector('.top-header-text').innerHTML = `<p>R. Pastor Gustav Nordlund, 337 - São José, Novo Hamburgo | ferragemdoxandi@gmail.com | 51 99545.8366  / 51 3556.0298</p>
<!-- / 51 3556.0298 -->`;

document.querySelector('.social-links').innerHTML = `<li>
<a href="https://www.facebook.com/ferragem.doxandi.3" class="facebook"><i class="socmed socmed-facebook"></i></a>
</li>
                            <li>
<a href="mailto:ferragemdoxandi@gmail.com" class="email"><i class="socmed socmed-email"></i></a>
</li>`;


const todoCorpo = document.body.innerHTML
const substituiCorpo = todoCorpo.replace(/https:\/\/ferragemxandi.com.br/gi, '')
document.querySelector('body').innerHTML = substituiCorpo


async function produtos() {
    const response = await fetch('/produto')
    const data = await response.json()
    const testApp = document.querySelector('#content')
    const enderecoLink = location.href
    const divTexto = document.createElement('div')
    divTexto.classList.add('produtosOnline')
    data.map((p) => {    
        if(enderecoLink.includes('epis')){
            
        }
        if(p.categoria != 'estofados'){
            const divProduto = document.createElement('div')    
            divProduto.innerHTML = p.codigo
            divTexto.appendChild(divProduto)    
            testApp.appendChild(divTexto)
        }   
        // const divProduto = document.createElement('div')    
        // divProduto.innerHTML = p.codigo
        // divTexto.appendChild(divProduto)

        // testApp.appendChild(divTexto)

    })
}

setTimeout('produtos()', 1000)










