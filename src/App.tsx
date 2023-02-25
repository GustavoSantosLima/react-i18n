import { useTranslate } from "./i18n/useTranslate";

function App() {
  const { translate, changeTranslate } = useTranslate();

  return (
    <div className="App">
      <h1>{translate("WELCOME")}</h1>

      <p className="read-the-docs">{translate("MESSAGE")}</p>

      <div className="translates">
        <button onClick={() => changeTranslate("pt")}>PT-BR</button>
        <button onClick={() => changeTranslate("en")}>EN-US</button>
      </div>
    </div>
  );
}

export default App;
