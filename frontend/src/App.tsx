import { useNavigate } from 'react-router-dom';
import './App.css'

function App() {

  const navigate = useNavigate();

  // async function getRightHolders() {
  //   try {
  //     const response = await fetch('http://localhost:3000/right-holders'); // URL da rota do seu backend
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     console.log('Right Holders:', data);
  //     // ... faça algo com os dados recebidos ...
  //   } catch (error) {
  //     console.error('Error fetching right holders:', error);
  //   }
  // }
  
  // async function assignRights(address: string, percentage: number) {
  //   try {
  //     const response = await fetch('http://localhost:3000/assign-music-rights', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ address, percentage })
  //     });
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     console.log('Response:', data);
  //     // ... faça algo com os dados recebidos ...
  //   } catch (error) {
  //     console.error('Error assigning rights:', error);
  //   }
  // }
  
  // // Exemplo de chamada das funções
  // getRightHolders();
  // assignRights("0xEndereço", 25);

  function viewMusic(){
    navigate("/music");
  }

  function viewMusic2(){
    navigate("/music2");
  }

  
  function viewMusic3(){
    navigate("/music3");
  }

  function changeProduct(){
    navigate("/produtor");
  }

  return (
    <>
      <div className="w-screen h-screen bg-[#1B2B40] flex flex-col items-center justify-between ">
        <header className="flex flex-row justify-between p-8 bg-[#00060D] w-screen h-[90px]">
          <div className="self-center text-5xl text-[#80A2A6]"><a onClick={()=>{changeProduct()}}>Mermaid</a></div>
          <div className="flex flex-row space-x-10 text-xl text-[#80A2A6]">
            <span>About</span>
            <span>Contact</span>
          </div>
        </header>

        <main className="bg-[#1B2B40] h-screen w-screen space-y-28">
          <div className="flex justify-center items-center">
            <span className="text-4xl text-[#80A2A6]">Coleção</span>
          </div>

          <div className="flex flex-row items-center justify-evenly">
            <div className="rounded-3xl w-80 h-96 bg-slate-700 flex flex-col items-center justify-center shadow-md">
              <img className="rounded-t-3xl object-cover w-full h-2/3" src="scriminal.jpg" alt="Smooth Criminal" />
              <span className="text-3xl text-[#fff]">Smooth Criminal</span>
              <button onClick={() => viewMusic()} className="bg-[#BF5934] text-[#f2f2f2] rounded-3xl p-3 m-5">0.15eth</button>
            </div>

            <div className="rounded-3xl w-80 h-96 bg-slate-700 flex flex-col items-center justify-center">
              <img className="rounded-t-3xl object-cover w-full h-2/3" src="coldplay.jpg" alt="Yellow- coldplay" />
              <span className="text-3xl text-[#fff]">Yellow</span>
              <button onClick={() => viewMusic2()} className="bg-[#BF5934] text-[#f2f2f2] rounded-3xl p-3 m-5">0.15eth</button>
            </div>

            <div className="rounded-3xl w-80 h-96 bg-slate-700 flex flex-col items-center  justify-center">
              <img className="rounded-t-3xl object-cover w-full h-2/3" src="luanSantana.jfif" alt="Luan Santana" />
              <span className="text-3xl text-[#fff]">Meio Termo</span>
              <button onClick={() => viewMusic3()} className="bg-[#BF5934] text-[#f2f2f2] rounded-3xl p-3 m-5">0.15eth</button>
            </div>
          </div>
        </main>
        <footer className="bg-[#00060D] w-screen text-[9px] text-white"> made by Team Leviatã</footer>
      </div>
    </>
  )
}

export default App