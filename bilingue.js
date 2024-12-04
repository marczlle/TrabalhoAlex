const translations = {
    pt: {
        promoTitle: "Super Promoções",
        promoSubtitle: "Em todos os produtos",
        promoDesc: "Use cupons e ganhe até 70% de Desconto!",
        shopNow: "Compre Agora",
        about: "Sobre",
        store: "Store",
        arranjos: "Arranjos de verão fresquinhos",
        destaque: "Produtos em destaque",
        frete: "Frete",
        orders: "Pedidos on-line",
        economy: "Economia de dinheiro",
        promotions: "Promoções",
        sales: "Vendas satisfatórias",
        suport: "Suporte",
        estamos: "Estamos com 75% off em todos os buquês de inverno",
        troca: "Serviços de troca",
        explore: "Explore mais",
        registre: "Registre-se Para Receber as Novidades",
        receba: "Receba atualizações por e- mail sobre nossa última loja e ofertas especiais.",
        ofertas:"ofertas malucas",
        compre:"compre 1 e ganhe + 1",
        flores: "Flores Cheirosas e Calmantes",
        primavera: "Primavera/Verão",
        proxima: "Proxima Temporada",
        melhores: "As Melhores estão no Classico",
        colecao: "Coleção",
        temporada: "Venda de temporada",
        outono: "Coleção de outono -50% off",
        casais: "Novos Arranjos para casais",
        disponiveis: "DISPONÍVEIS",
        tulipas: "TULIPAS",
        moda: "A nova moda",
        novidades: "Novidades",
        sazonal: "Flores Sazonais de Temporada"
    },
    en: {
        promoTitle: "Super Sales",
        promoSubtitle: "On all products",
        promoDesc: "Use coupons and get up to 70% Off!",
        shopNow: "Shop Now",
        about: "About",
        store: "Store",
        arranjos: "Fresh summer arrangements",
        destaque: "Featured products",
        frete: "Freight",
        orders: "On-line orders",
        economy: "Money saving",
        promotions: "Promotions",
        sales: "Satisfactory sales",
        suport: "Suport",
        estamos: "We are with 75% off in all the winter bouquets",
        troca: "Exchange services",
        explore: "Explore more",
        registre: "Sign up to receive the latest news",
        receba: "Receive email updates about our latest store and special offers.",
        ofertas: "crazy offers",
        compre: "buy 1 get 1 free",
        flores: "Smelly and Calming Flowers",
        primavera: "Spring/Summer",
        proxima: "Next season",
        melhores: "The Best are in Classico",
        colecao: "Colection",
        temporada: "Season sale",
        outono: "Autumn Collection -50% off",
        casais: "New Arrangements for Couples",
        disponiveis: "AVAILABLE",
        tulipas: "TULIPS",
        moda: "The new fashion",
        novidades: "News",
        sazonal: "Seasonal Flowers of the Season"
    },
};

function changeLanguage(language) {
    document.getElementById("promo-title").textContent = translations[language].promoTitle;
    document.getElementById("promo-subtitle").textContent = translations[language].promoSubtitle;
    document.getElementById("promo-desc").textContent = translations[language].promoDesc;
    document.getElementById("shop-now").textContent = translations[language].shopNow;
    document.getElementById("about").textContent = translations[language].about;
    document.getElementById("store").textContent = translations[language].store;
    document.getElementById("arranjos").textContent = translations[language].arranjos;
    document.getElementById("destaque").textContent = translations[language].destaque;
    document.getElementById("frete").textContent = translations[language].frete;
    document.getElementById("orders").textContent = translations[language].orders;
    document.getElementById("economy").textContent = translations[language].economy;
    document.getElementById("promotions").textContent = translations[language].promotions;
    document.getElementById("sales").textContent = translations[language].sales;
    document.getElementById("suport").textContent = translations[language].suport;
    document.getElementById("estamos").textContent = translations[language].estamos;
    document.getElementById("troca").textContent = translations[language].troca;
    document.getElementById("explore").textContent = translations[language].explore;
    document.getElementById("registre").textContent = translations[language].registre;
    document.getElementById("receba").textContent = translations[language].receba;
    document.getElementById("ofertas").textContent = translations[language].ofertas;
    document.getElementById("flores").textContent = translations[language].flores;
    document.getElementById("compre").textContent = translations[language].compre;
    document.getElementById("colecao").textContent = translations[language].colecao;
    document.getElementById("temporada").textContent = translations[language].temporada;
    document.getElementById("outono").textContent = translations[language].outono;
    document.getElementById("casais").textContent = translations[language].casais;
    document.getElementById("disponiveis").textContent = translations[language].disponiveis;
    document.getElementById("tulipas").textContent = translations[language].tulipas;
    document.getElementById("moda").textContent = translations[language].moda;
    document.getElementById("news").textContent = translations[language].news;
    document.getElementById("sazonal").textContent = translations[language].sazonal;
}

document.getElementById("pt").addEventListener("click", () => changeLanguage("pt"));
document.getElementById("en").addEventListener("click", () => changeLanguage("en"));
