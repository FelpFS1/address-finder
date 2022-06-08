const zipCodeSearch = document.getElementById('search-cep')
const btn = document.getElementById('btn-search');
const adress = document.getElementById('adress');
const complement = document.getElementById('complement');
const district = document.getElementById('district');
const locality = document.getElementById('locality');
const state = document.getElementById('state');
const zipCode = document.getElementById('zip-code');
const sectionShow = document.querySelector('.show');
const searchShowText = document.querySelector('.off-text');


btn.addEventListener('click', () => {

    sectionShow.classList.add('animation')
    searchShowText.classList.add('search-text')

    setTimeout(() => {
        sectionShow.classList.remove('animation')
    }, 4000)

    fetch(`https://viacep.com.br/ws/${zipCodeSearch.value}/json/`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setTimeout(() => {
                adress.value = data.logradouro;
                complement.value = data.complemento;
                district.value = data.bairro;
                locality.value = data.localidade;
                state.value = data.uf;
                zipCode.value = data.cep;
            },3000)

        })
        .catch(() => {
            setTimeout(() => {
                adress.value = `Erro! tente outro CEP ou tente novamente`;
                complement.value = `Erro! tente outro CEP ou tente novamente`;
                district.value = `Erro! tente outro CEP ou tente novamente`;
                locality.value = `Erro! tente outro CEP ou tente novamente`;
                state.value = `Erro! tente outro CEP ou tente novamente`;
                zipCode.value = `Erro! tente outro CEP ou tente novamente`; 
            },3000)
        })
})