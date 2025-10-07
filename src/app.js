import "bootstrap";
import "./style.css";

// Definimos las listas fuera para que sean accesibles.
const pronoun = ['the', 'our', 'a', 'my', 'your', 'his', 'her', 'its'];
const adj = ['great', 'big', 'clever', 'fast', 'small', 'crazy', 'epic', 'funny'];
const noun = ['jogger', 'racoon', 'pancake', 'pirate', 'dragon', 'ninja', 'robot', 'shark'];
const tld = ['.com', '.net', '.us', '.io'];

let allGeneratedDomains = [];
let currentPage = 1;
const itemsPerPage = 3; // Mostrar 3 resultados por página

// Función para generar TODAS las combinaciones posibles una sola vez
const pregenerateAllDomains = () => {
    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < noun.length; k++) {
                for (let l = 0; l < tld.length; l++) {
                    const domainName = pronoun[i] + adj[j] + noun[k] + tld[l];
                    allGeneratedDomains.push(domainName);
                }
            }
        }
    }
};

// Función para mostrar los dominios de la página actual
const displayDomains = (page) => {
    const resultsContainer = document.getElementById('results-list');
    const domainCount = document.getElementById('domain-count');
    const currentPageSpan = document.getElementById('current-page');
    const totalPagesSpan = document.getElementById('total-pages');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Oculta la lista anterior
    resultsContainer.innerHTML = '';
    
    // Calcula el índice de inicio y fin para la página actual
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const domainsToDisplay = allGeneratedDomains.slice(startIndex, endIndex);

    // Muestra los dominios con botones de acción
    let listHTML = '<ul>';
    domainsToDisplay.forEach(domain => {
        listHTML += `
            <li class="domain-item">
                <span>${domain}</span>
                <button class="copy-btn" data-domain="${domain}">
                    <i class="fas fa-copy"></i>
                </button>
            </li>`;
    });
    listHTML += '</ul>';

    resultsContainer.innerHTML = listHTML;
    
    // Actualiza la información de la paginación
    const totalPages = Math.ceil(allGeneratedDomains.length / itemsPerPage);
    currentPageSpan.textContent = page;
    totalPagesSpan.textContent = totalPages;
    domainCount.textContent = allGeneratedDomains.length;
    
    // Habilita/deshabilita los botones de navegación
    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPages;

    // Agrega la funcionalidad a los botones de Copiar
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const domain = event.currentTarget.dataset.domain;
            navigator.clipboard.writeText(domain).then(() => {
                alert(`¡Dominio copiado al portapapeles: ${domain}!`);
            });
        });
    });
};

// Eventos de la página
window.onload = function() {
    pregenerateAllDomains();
    displayDomains(currentPage);

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayDomains(currentPage);
        }
    });

    nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(allGeneratedDomains.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayDomains(currentPage);
        }
    });
};