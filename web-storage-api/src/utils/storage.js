// salvar dados no local storage
// dados: chave, valor
// nome: "igor", tema: "escuro"

// funçaõ que salva
export const saveInStorage = (key, value) => {
    try {
        const valueString = JSON.stringify(value);
        localStorage.setItem(key, valueString);
    } catch (error) {
        console.error("Erro ao salvar no localStorage:", error);
    }
}

export const searchInStorage = (chave) => {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.error("Erro ao ler no localStorage", error)
        return null
    }
}