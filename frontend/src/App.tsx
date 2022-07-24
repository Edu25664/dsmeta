
import Header from "./components/Header/index";
import SalesCard from "./components/SalesCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// O main e o section fica sendo da página
//no react não faz uso da palavra class
//O react não permite exportar duplas de parametros coloque o <></>
//Sempre Colocar em pascal case
//App tsx é um componente principal do projeto
function App() {
  return (<>
    <ToastContainer/>
  <Header/>
  <main>
      <section id="sales">
        <div className="dsmeta-container">
            <SalesCard></SalesCard>
        </div>
        </section>
        </main>
        </>);
}
export default App;
