import { useState, useEffect } from "react";
import { saveInStorage, searchInStorage } from "../../utils/storage";
import "./painel-preferencias.css";

export default function PainelPreferencias() {
  const [nome, setName] = useState(() => searchInStorage("usuario_nome") || "");
  const [tema, setTheme] = useState(
    () => searchInStorage("usuario_tema") || "",
  );

  useEffect(() => {
    if (tema === "escuro") {
      document.body.classList.add("tema-escuro");
    } else {
      document.body.classList.remove("tema-escuro");
    }
  }, [tema]);

  const handleChangeName = (e) => {
    const newName = e.target.value;
    setName(newName);
    saveInStorage("usuario_nome", newName);
  };

  const handleChangeTheme = (e) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    saveInStorage("usuario_tema", newTheme);
  };

  return (
    <div className="panel-container">
      <h2>Olá, {nome || "Visitante"}</h2>

      <div className="input-group">
        <label>Seu Nome:</label>
        <input
          type="text"
          id="name"
          value={nome}
          onChange={handleChangeName}
          placeholder="Digite seu nome aqui..."
        ></input>
      </div>

      <div className="input-group">
        <label>Escolha seu tema:</label>
        <select id="tema" value={tema} onChange={handleChangeTheme}>
          <option value="claro">Tema Claro</option>
          <option value="escuro">Tema Escuro</option>
        </select>
      </div>
    </div>
  );
}
