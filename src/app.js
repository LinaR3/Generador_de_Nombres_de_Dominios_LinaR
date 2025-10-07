import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let tld = ['.com', '.net', '.us', '.io']; // El reto de las extensiones

  let generatedDomains = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < tld.length; l++) {
          let domainName = pronoun[i] + adj[j] + noun[k] + tld[l];
          generatedDomains.push(domainName);
        }
      }
    }
  }


  const resultsContainer = document.getElementById('results-list');
  const domainCount = document.getElementById('domain-count');
  if (resultsContainer && domainCount) {
    let listHTML = '<ul>';
    generatedDomains.forEach(domain => {
      listHTML += `<li class="domain-item">${domain}</li>`;
    });
    listHTML += '</ul>';
    
    resultsContainer.innerHTML = listHTML;
    
    domainCount.textContent = generatedDomains.length;
  }
};