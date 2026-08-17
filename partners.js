document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("partners-container");
    if (!container) return;

    fetch("partners.json")
        .then(response => {
            if (!response.ok) throw new Error("JSON nem található");
            return response.json();
        })
        .then(data => {
            let html = `<h3>${data.title}</h3><div class="partners-grid">`;
            
            data.items.forEach(item => {
                html += `
                    <a href="${item.link}" class="partner-box ${item.isPromotional ? 'promo-box' : ''}">
                        <span>${item.text}</span>
                    </a>
                `;
            });

            html += `</div>`;
            container.innerHTML = html;
        })
        .catch(error => console.error("Hiba a partnerek betöltésekor:", error));
});
